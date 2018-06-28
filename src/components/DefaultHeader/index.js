import React, { Component } from 'react';
import {
  Body,
  Left,
  Title,
} from 'native-base';

type Props = {};
export default class DefaultHeader extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Left>
          {this.props.left}
        </Left>
        <Body>
          <Title>AccessMap UW</Title>
        </Body>
      </React.Fragment>
    );
  }
}
