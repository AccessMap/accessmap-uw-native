import styles from './styles';

import React, { Component } from 'react';
import {
  Container,
  Header,
} from 'native-base';

import DefaultHeader from './components/DefaultHeader';
import Map from './components/Map';
import SearchCard from './components/SearchCard';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Header>
          <DefaultHeader />
        </Header>
        <Map />
        <SearchCard />
      </Container>
    );
  }
}
