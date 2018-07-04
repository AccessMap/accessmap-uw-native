import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

import App from './src/App';
import configureStore from './src/store';

const store = configureStore();


type Props = {};
class Index extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('AccessMap UW', () => Index);
