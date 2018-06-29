import React, { Component } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem && this.props.onPressItem(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this._onPress}>
        <View>
          <Text>
            {this.props.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

type Props = {};
export default class GeocoderList extends Component<Props> {
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={() => {
        if (this.props.onPressItem) this.props.onPressItem(item);
      }}
      title={item.title}
    />
  );

  render() {
    const {
      results,
    } = this.props;

    if (!results) return null;

    const listData = results.map((d, i) => {
      return {
        id: `geocoder-item-${i}`,
        title: d.formattedAddress,
        lng: d.position.lng,
        lat: d.position.lat,
      };
    });

    return (
      <View style={styles.container}>
        <FlatList
          data={listData}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  button: {
    alignItems: 'flex-start',
    backgroundColor: '#EEEEEE',
    padding: 8,
  },
});
