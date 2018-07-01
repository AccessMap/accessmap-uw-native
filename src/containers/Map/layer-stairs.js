import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

type Props = {};
export default class LayerStairs extends Component<Props> {
  render() {
    return (
      <MapboxGL.VectorSource
        id='stairs'
        url='mapbox://accessmap.4nm23ibk'
      >
        <MapboxGL.LineLayer
          id='stairs'
          sourceLayerID='stairs-adwbrt'
          style={{
            lineColor: 'gray',
            lineWidth: 3,
            lineDasharray: [0.2, 0.2]
          }}
        />
      </MapboxGL.VectorSource>
    );
  }
}
