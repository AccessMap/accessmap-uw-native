import styles from './styles';

import React, { Component } from 'react';
import Map from './components/Map';
import {
  View,
  Text,
} from 'react-native';
import {
  Body,
  Card,
  CardItem,
  Container,
  Header,
  Title,
} from 'native-base';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>AccessMap UW</Title>
          </Body>
        </Header>
        <Map />
        <Container style={styles.bottomcard}>
          <Card transparent>
            <CardItem>
              <Text>
                content
              </Text>
            </CardItem>
          </Card>
        </Container>
      </Container>
    );
  }
}
