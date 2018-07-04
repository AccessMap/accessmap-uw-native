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
import MapButtons from './containers/MapButtons';
import DefaultHeader from './components/DefaultHeader';

import MainView from './views/MainView';
import POIView from './views/POIView';
import ProfileView from './views/ProfileView';
import RouteView from './views/RouteView';

import SearchOverlay from './overlays/SearchOverlay';
import POIsOverlay from './overlays/POIsOverlay';

type Props = {};
class App extends Component<Props> {
  render() {
    const {
      mode,
      overlay,
      poi,
      routeResult,
    } = this.props;

    let bottomContent = (<MainView />);
    if (routeResult && routeResult.routes.length) {
      bottomContent = (<RouteView />);
    }
    if (poi) {
      bottomContent = (<POIView />);
    }
    if (mode == 'profile') {
      bottomContent = (<ProfileView />);
    };

    return (
      <Container>
        <Header>
          <DefaultHeader />
        </Header>
        <View style={styles.mapContainer}>
          <Map style={styles.map} />
          <View style={styles.mapButtons}>
            <MapButtons />
          </View>
        </View>
        <View style={styles.bottomview}>
          {bottomContent}
        </View>
        { overlay == 'search' && <SearchOverlay />}
        { overlay == 'pois' && <POIsOverlay />}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
    overlay: state.overlay,
    poi: state.map.poi,
    routeResult: state.map.route,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
