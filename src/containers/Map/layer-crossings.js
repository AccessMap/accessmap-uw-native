import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

type Props = {};
export default class LayerCrossings extends Component<Props> {
  render() {
    return (
      <MapboxGL.VectorSource
        id='crossings'
        url='mapbox://accessmap.3qpntf2g'
      >
        <MapboxGL.LineLayer
          id='crossings'
          sourceLayerID='crossings-c1ktiy'
          style={{
            lineColor: 'red',
            lineWidth: 3,
          }}
        />
      </MapboxGL.VectorSource>
    );
  }
}
