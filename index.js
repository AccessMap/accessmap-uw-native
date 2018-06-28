import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { AppRegistry } from 'react-native';

import App from './src/App';
import rootReducer from './src/reducers';

const store = createStore(rootReducer);


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

AppRegistry.registerComponent('AccessMap', () => Index);
