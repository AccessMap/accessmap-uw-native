import MapboxGL from '@mapbox/react-native-mapbox-gl';

OUTLINE_WIDTH = 2

export default MapboxGL.StyleSheet.create({
  sidewalks: {
    lineWidth: MapboxGL.StyleSheet.camera({
      12: 0.8,
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
  sidewalksOutline: {
    lineGapWidth: MapboxGL.StyleSheet.camera({
      12: 0.8 + ((OUTLINE_WIDTH / 10) / 2),
      22: 10 + (OUTLINE_WIDTH / 2),
    }, MapboxGL.InterpolationMode.Exponential),
    lineWidth: MapboxGL.StyleSheet.camera({
      12: OUTLINE_WIDTH / 10,
      22: OUTLINE_WIDTH,
    }, MapboxGL.InterpolationMode.Exponential),
    lineColor: '#AAAAAA',
    lineBlur: 0.5,
  },
});
