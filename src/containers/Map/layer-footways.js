import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

type Props = {};
export default class LayerFootways extends Component<Props> {
  render() {
    return (
      <MapboxGL.VectorSource
        id='footways'
        url='mapbox://accessmap.ctv6lc9a'
      >
        <MapboxGL.LineLayer
          id='footways'
          sourceLayerID='footways-bbud6k'
          style={{
            lineColor: 'green',
            lineWidth: 3,
          }}
        />
      </MapboxGL.VectorSource>
    );
  }
}
