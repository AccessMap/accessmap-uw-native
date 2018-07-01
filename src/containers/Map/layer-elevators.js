import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

type Props = {};
export default class LayerElevators extends Component<Props> {
  render() {
    return (
      <MapboxGL.VectorSource
        id='elevators'
        url='mapbox://accessmap.51ktwqv5'
      >
        <MapboxGL.CircleLayer
          id='elevators'
          sourceLayerID='elevators-49mqjn'
          style={{
            circleColor: 'blue',
            circleRadius: 3,
          }}
        />
      </MapboxGL.VectorSource>
    );
  }
}
