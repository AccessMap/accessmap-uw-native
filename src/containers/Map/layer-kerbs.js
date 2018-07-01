import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

type Props = {};
export default class LayerKerbs extends Component<Props> {
  render() {
    return (
      <MapboxGL.VectorSource
        id='kerbs'
        url='mapbox://accessmap.8oollirk'
      >
        <MapboxGL.CircleLayer
          id='kerbs'
          sourceLayerID='kerbs-dek2u2'
          style={{
            circleColor: 'green',
            circleRadius: 3,
          }}
        />
      </MapboxGL.VectorSource>
    );
  }
}
