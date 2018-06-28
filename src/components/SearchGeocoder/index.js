import React, { Component } from 'react';
import {
  Input,
  Item,
} from 'native-base';

type Props = {};
export default class SearchGeocoder extends Component<Props> {
  blur = () => {
    this._input._root.blur()
  }

  render() {
    const {
      onFocus,
    } = this.props;

    return (
      <Item rounded>
        <Input
          ref={c => this._input = c}
          placeholder='Search address'
          onFocus={onFocus}
        />
      </Item>
    );
  }
}
