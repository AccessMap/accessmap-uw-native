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

MapboxGL.setAccessToken(config.mapboxAccessToken);

type Props = {};
class Map extends Component<Props> {
  render() {
    const {
      actions,
      lng,
      lat,
      poi,
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
            actions.mapClick(coords[0], coords[1]);
          }}
        >
          <LayerSidewalks />
          <LayerCrossings />
          { poi && (
              <MapboxGL.PointAnnotation
                id='poiAnnotation'
                coordinate={[poi.lng, poi.lat]}
              />
            )
          }
        </MapboxGL.MapView>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    lng: state.map.lng,
    lat: state.map.lat,
    poi: state.map.poi,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
