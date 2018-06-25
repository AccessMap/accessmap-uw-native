import config from '../../../config';
import styles from '../../styles';

import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken(config.mapboxAccessToken);

type Props = {};
export default class Map extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          centerCoordinate={[-122.306411, 47.654572]}
          zoomLevel={14}
          style={styles.map}
          styleURL='mapbox://styles/mapbox/streets-v8'
        />
      </View>
    );
  }
}
