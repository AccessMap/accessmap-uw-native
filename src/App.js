import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as AppActions from './actions';

import MainView from './views/MainView';
import TripPlanningView from './views/TripPlanningView';

type Props = {};
class App extends Component<Props> {
  render() {
    const {
      mode,
    } = this.props;

    if (mode === 'planningtrip') {
      return (<TripPlanningView />);
    }
    return (<MainView />);
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
