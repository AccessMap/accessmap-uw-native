import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

type Props = {};
export default class LayerSidewalks extends Component<Props> {
  render() {
    return (
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
    );
  }
}
