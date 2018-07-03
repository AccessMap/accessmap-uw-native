import React, { Component } from 'react';
import {
  Input,
  Item,
} from 'native-base';
import Geocoder from 'react-native-geocoder';

type Props = {};
export default class SearchGeocoder extends Component<Props> {
  handleChange = (text, cb) => {
    if (!cb || !text.length) return;
    Geocoder.geocodeAddress(text)
      .then((res) => {
        cb(res);
      });
  }

  blur = () => {
    this._input._root.blur()
  }

  render() {
    const {
      onFocus,
      onGeocode,
      ...rest,
    } = this.props;

    return (
      <Item rounded>
        <Input
          {...rest}
          ref={c => this._input = c}
          placeholder='Search address'
          onFocus={onFocus}
          onChangeText={(t) => this.handleChange(t, onGeocode)}
        />
      </Item>
    );
  }
}
