import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

type Props = {};
export default class DefaultHeader extends Component<Props> {
  render() {
    const {
      color,
      coordinate,
      id,
      label,
    } = this.props;

    const styles = StyleSheet.create({
      annotationContainer: {
        width: 30,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
      },
      annotationFill: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: color || 'orange',
        transform: [{ scale: 0.6 }],
      },
      annotationLabel: {
        position: 'absolute',
      },
    });

    return (
      <MapboxGL.PointAnnotation
        id={id}
        coordinate={coordinate}
      >

        <View style={styles.annotationContainer}>
          <View style={styles.annotationFill} />
          <Text style={styles.annotationLabel}>{label}</Text>
        </View>
      </MapboxGL.PointAnnotation>
    );
  }
}
