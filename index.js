import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import store from './src/store/store';

const reduxStore = store();

const reactNativeRedux = () => (
  <Provider store={reduxStore}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('reactnativecourse', () => reactNativeRedux);
