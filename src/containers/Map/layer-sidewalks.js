import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

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
          style={{
            lineColor: 'green',
            lineWidth: 3,
          }}
        />
      </MapboxGL.VectorSource>
    );
  }
}
