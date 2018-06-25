import React, { Component } from 'react';
import {
  Body,
  Title,
} from 'native-base';

type Props = {};
export default class DefaultHeader extends Component<Props> {
  render() {
    return (
      <Body>
        <Title>AccessMap UW</Title>
      </Body>
    );
  }
}
