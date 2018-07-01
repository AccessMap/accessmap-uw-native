import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';


const styles = MapboxGL.StyleSheet.create({
  sidewalks: {
    lineWidth: MapboxGL.StyleSheet.camera({
      12: 1,
      22: 10,
    }, MapboxGL.InterpolationMode.Exponential),
    lineColor: MapboxGL.StyleSheet.source([
      [-1000, 'red'],
      [-83, 'red'],
      [-50, 'yellow'],
      [0, 'lime'],
      [50, 'yellow'],
      [83, 'red'],
      [1000, 'red'],
    ], 'incline', MapboxGL.InterpolationMode.Exponential),
  },
});

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
        />
      </MapboxGL.VectorSource>
    );
  }
}
