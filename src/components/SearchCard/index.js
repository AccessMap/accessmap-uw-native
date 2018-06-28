import styles from '../../styles';
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  Button,
  Card,
  CardItem,
  Icon,
  Text,
} from 'native-base';
import SearchGeocoder from '../SearchGeocoder';

type Props = {};
export default class SearchCard extends Component<Props> {
  render() {
    return (
      <View style={styles.bottomview}>
        <SearchGeocoder />
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Button
            iconLeft
            style={{ flex: 1 }}
            onPress={() => console.log('press!')}
          >
            <Icon name='trending-up' />
            <Text>Get Directions</Text>
          </Button>
          <Button
            iconRight
            style={{ flex: 1, marginLeft: 8 }}
          >
            <Icon name='settings' style={{marginLeft: 8}} />
            <Text>Change Profile</Text>
          </Button>
        </View>
      </View>
    );
  }
}
