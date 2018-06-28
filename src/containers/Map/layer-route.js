import React, { Component } from 'react';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

type Props = {};
export default class LayerRoute extends Component<Props> {
  render() {
    const {
      route,
    } = this.props;

    return (
      <MapboxGL.ShapeSource
        id='route'
        shape={route.geometry}
      >
        <MapboxGL.LineLayer
          id='route'
          style={{
            lineColor: 'blue',
            lineWidth: 4,
          }}
        />
      </MapboxGL.ShapeSource>
    );
  }
}
