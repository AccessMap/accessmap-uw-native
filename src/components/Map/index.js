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
          zoomLevel={15}
          centerCoordinate={[-122.306411, 47.654572]}
          style={styles.map}
          styleURL='mapbox://styles/mapbox/streets-v8'
        >
          <MapboxGL.VectorSource
            id='sidewalks'
            url='mapbox://accessmap.c3443oh6'
          >
            <MapboxGL.LineLayer
              id='sidewalks'
              sourceLayerID='sidewalks-afk40t'
              style={{
                lineColor: 'green',
                lineWidth: 3,
              }}
            />
          </MapboxGL.VectorSource>
        </MapboxGL.MapView>
      </View>
    );
  }
}
