/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';

import {RootNavigator} from './src/navigation';
import {store} from './src/redux';

/* Create client for tanstack queries */
const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
});

if (__DEV__) {
  require('./ReactotronConfig');
}

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
