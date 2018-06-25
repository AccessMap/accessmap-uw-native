import React, { Component } from 'react';
import {
  Input,
  Item,
} from 'native-base';

type Props = {};
export default class SearchGeocoder extends Component<Props> {
  render() {
    return (
      <Item rounded>
        <Input placeholder='Search address' />
      </Item>
    );
  }
}
