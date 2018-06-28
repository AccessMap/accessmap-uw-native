import styles from './styles';

import React, { Component } from 'react';
import {
  TextInput,
  View,
} from 'react-native';
import {
  Button,
  Container,
  Header,
  Icon,
  Input,
  Item,
  Text,
} from 'native-base';

import DefaultHeader from './components/DefaultHeader';
import Map from './components/Map';
import SearchGeocoder from './components/SearchGeocoder';

type Props = {};
export default class App extends Component<Props> {
  constructor() {
    super();
    this.state = {
      searchView: false,
    };

    this.startSearch = this.startSearch.bind(this);
    this.endSearch = this.endSearch.bind(this);
  }

  startSearch() {
    this.setState({searchView: true });
  }

  endSearch() {
    this.setState({searchView: false});
  }

  render() {
    return (
      <Container>
        <Header>
          <DefaultHeader
            left={this.state.searchView ?
             (<Button
                transparent
                onPress={() => { this.endSearch(); this.refs.searchGeocoder.blur(); }}
              >
               <Icon name='arrow-back' />
              </Button>
             ) : null
            }
          />
        </Header>
        { this.state.searchView ? null : <Map /> }
        <View style={styles.bottomview}>
          <SearchGeocoder ref={'searchGeocoder'} onFocus={this.startSearch} />
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
      </Container>
    );
  }
}
