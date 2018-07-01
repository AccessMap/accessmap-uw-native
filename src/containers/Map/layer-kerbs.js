import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

const styles = MapboxGL.StyleSheet.create({
  sidewalks: {
    circleRadius: MapboxGL.StyleSheet.camera({
      12: 2,
      22: 7,
    }, MapboxGL.InterpolationMode.Exponential),
    circleColor: MapboxGL.StyleSheet.source([
      ['raised', 'red'],
      ['lowered', 'lime'],
    ], 'kerb', MapboxGL.InterpolationMode.Categorical),
  },
});


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
