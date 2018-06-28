import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  StyleSheet,
  View
} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import config from '../../../config';
import styles from '../../styles';
import * as AppActions from '../../actions';
import LayerSidewalks from './layer-sidewalks';
import LayerCrossings from './layer-crossings';
import LayerRoute from './layer-route';
import Waypoint from '../../components/Waypoint';

MapboxGL.setAccessToken(config.mapboxAccessToken);

type Props = {};
class Map extends Component<Props> {
  render() {
    const {
      actions,
      lng,
      lat,
      poi,
      origin,
      destination,
      route,
    } = this.props;

    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          zoomLevel={14}
          centerCoordinate={[lng, lat]}
          style={styles.map}
          styleURL='mapbox://styles/accessmap/cjglbmftk00202tqmpidtfxk3'
          onPress={(e) => {
            const coords = e.geometry.coordinates;
            actions.pressMap(coords[0], coords[1]);
          }}
        >
          <LayerSidewalks />
          <LayerCrossings />
          { origin && (
              <Waypoint
                id='waypoint-origin'
                key='waypoint-origin'
                coordinate={[origin.lng, origin.lat]}
                color='purple'
              />
            )
          }
          { destination && (
              <Waypoint
                id='waypoint-destination'
                key='waypoint-destination'
                coordinate={[destination.lng, destination.lat]}
                color='orange'
              />
            )
          }
          { poi && (
              <MapboxGL.PointAnnotation
                id='poiAnnotation'
                coordinate={[poi.lng, poi.lat]}
              />
            )
          }
          { route && (
            <LayerRoute
              route={route}
            />
            )
          }
        </MapboxGL.MapView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const routeResult = state.map.route;
  return {
    lng: state.map.lng,
    lat: state.map.lat,
    poi: state.map.poi,
    origin: state.map.origin,
    destination: state.map.destination,
    route: routeResult && routeResult.routes && routeResult.routes[0],
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
