import {combineReducers, configureStore, StoreEnhancer} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import reactotron from '../../ReactotronConfig';
import pokemonSlice from './slices/pokemon-slice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['pokemon'], // Persist only the pokemon slice
};

const rootReducer = combineReducers({
  pokemon: pokemonSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
  enhancers: getDefaultEnhancers => {
    const defaultEnhancers = getDefaultEnhancers();
    if (__DEV__ && reactotron.createEnhancer) {
      return defaultEnhancers.concat(
        reactotron.createEnhancer() as StoreEnhancer,
      );
    }
    return defaultEnhancers;
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
