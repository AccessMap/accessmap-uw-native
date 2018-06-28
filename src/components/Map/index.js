import config from '../../../config';
import styles from '../../styles';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import LayerSidewalks from './layer-sidewalks';
import LayerCrossings from './layer-crossings';

MapboxGL.setAccessToken(config.mapboxAccessToken);

type Props = {};
export default class Map extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          zoomLevel={15}
          centerCoordinate={[-122.306411, 47.654572]}
          style={styles.map}
          styleURL='mapbox://styles/mapbox/streets-v8'
        >
          <LayerSidewalks />
          <LayerCrossings />
        </MapboxGL.MapView>
      </View>
    );
  }
}
