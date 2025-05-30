import {combineReducers, configureStore, StoreEnhancer} from '@reduxjs/toolkit';
import reactotron from '../../ReactotronConfig';
import profileSlice from './slices/pokemon-slice';

const rootReducer = combineReducers({
  profile: profileSlice,
});

export const store = configureStore({
  reducer: rootReducer,
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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
