import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

import styles from './map-styles';


type Props = {};
export default class LayerSidewalks extends Component<Props> {
  render() {
    return (
      <MapboxGL.VectorSource
        id='sidewalks'
        url='mapbox://accessmap.aii7dtpk'
      >
        <MapboxGL.LineLayer
          id='sidewalks'
          sourceLayerID='sidewalks-9sqt5n'
          style={styles.sidewalks}
          aboveLayerID='bridge-street'
        />
        <MapboxGL.LineLayer
          id='sidewalks-outline'
          sourceLayerID='sidewalks-9sqt5n'
          style={styles.sidewalksOutline}
          aboveLayerID='bridge-street'
        />
      </MapboxGL.VectorSource>
    );
  }
}
