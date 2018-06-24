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
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <MapboxGL.MapView
          centerCoordinate={[-122.333592, 47.605628]}
          zoomLevel={12}
          style={styles.map}
          styleURL='mapbox://styles/mapbox/streets-v8'
        />
      </View>
    );
  }
}
