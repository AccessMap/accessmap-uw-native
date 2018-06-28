import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

type Props = {};
export default class LayerCrossings extends Component<Props> {
  render() {
    return (
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
    );
  }
}
