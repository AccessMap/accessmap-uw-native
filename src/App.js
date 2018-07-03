import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { View } from 'react-native';
import {
  Container,
  Header,
} from 'native-base';

import * as AppActions from './actions';

import styles from './styles';

import Map from './containers/Map';
import DefaultHeader from './components/DefaultHeader';

import MainView from './views/MainView';
import POIView from './views/POIView';
import TripPlanningView from './views/TripPlanningView';
import DirectionsView from './views/DirectionsView';

import SearchOverlay from './overlays/SearchOverlay';

type Props = {};
class App extends Component<Props> {
  render() {
    const {
      mode,
      overlay,
      poi,
    } = this.props;

    let bottomContent;
    switch (mode) {
      case 'planningtrip':
        bottomContent = (<TripPlanningView />);
      case 'directions':
        bottomContent = (<DirectionsView />);
      default:
        bottomContent = (<MainView />);
    }
    if (poi) {
      bottomContent = (<POIView />);
    }

    return (
      <Container>
        <Header>
          <DefaultHeader />
        </Header>
        <Map />
        <View style={styles.bottomview}>
          {bottomContent}
        </View>
        { overlay == 'search' && <SearchOverlay />}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
    overlay: state.overlay,
    poi: state.map.poi,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
