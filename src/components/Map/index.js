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
          <MapboxGL.VectorSource
            id='crossings'
            url='mapbox://accessmap.6iaj8pvi'
          >
            <MapboxGL.LineLayer
              id='crossings'
              sourceLayerID='crossings-cx5a30'
              style={{
                lineColor: 'red',
                lineWidth: 3,
              }}
            />
          </MapboxGL.VectorSource>
          <MapboxGL.VectorSource
            id='elevators'
            url='mapbox://accessmap.07c7jabx'
          >
            <MapboxGL.LineLayer
              id='elevators'
              sourceLayerID='elevator_paths-0idixd'
              style={{
                lineColor: 'black',
                lineWidth: 3,
              }}
            />
          </MapboxGL.VectorSource>
        </MapboxGL.MapView>
      </View>
    );
  }
}
