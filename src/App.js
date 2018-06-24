import styles from './styles';

import React, { Component } from 'react';
import Map from './components/Map';
import {
  View
} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}
