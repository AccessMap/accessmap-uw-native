import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import styles from './map-styles';

type Props = {};
export default class LayerFootways extends Component<Props> {
  render() {
    return (
      <MapboxGL.VectorSource
        id='footways'
        url='mapbox://accessmap.ctv6lc9a'
      >
        <MapboxGL.LineLayer
          id='footways-outline'
          sourceLayerID='footways-bbud6k'
          style={styles.sidewalksOutline}
        />
        <MapboxGL.LineLayer
          id='footways'
          sourceLayerID='footways-bbud6k'
          style={styles.sidewalks}
        />
      </MapboxGL.VectorSource>
    );
  }
}
