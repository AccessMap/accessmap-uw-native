import React, { Component } from 'react';
import {
  Body,
  Left,
  Right,
  Title,
} from 'native-base';

type Props = {};
export default class DefaultHeader extends Component<Props> {
  render() {
    return (
      <React.Fragment>
        <Left>{this.props.left}</Left>
        <Body style={{ 
          flex: 3,
          justifyContent: 'center', 
          alignItems: 'center', 
        }}>
          <Title>AccessMap UW</Title>
        </Body>
        <Right />
      </React.Fragment>
    );
  }
}
