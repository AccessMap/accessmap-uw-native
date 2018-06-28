import React, { Component } from 'react';
import { bindActionCreators, createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import rootReducer from './reducers';
import MainView from './views/MainView';

const store = createStore(rootReducer);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <MainView />
      </Provider>
    );
  }
}
