import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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

import styles from '../styles';
import * as AppActions from '../actions';

import DefaultHeader from '../components/DefaultHeader';
import Map from '../components/Map';
import SearchGeocoder from '../components/SearchGeocoder';

type Props = {};
class App extends Component<Props> {
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
    const {
      poi,
    } = this.props;

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
          { poi ?
            <Text>{`${poi.lat}, ${poi.lng}`}</Text> :
            <SearchGeocoder ref={'searchGeocoder'} onFocus={this.startSearch} />
          }
          { this.state.searchView ?
            null :
            poi ?
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Button
                iconLeft
                style={{ flex: 1 }}
                onPress={() => console.log('press!')}
              >
                <Text>Directions from here</Text>
              </Button>
              <Button
                iconRight
                style={{ flex: 1, marginLeft: 8 }}
                onPress={() => console.log('press!')}
              >
                <Text>Directions to here</Text>
              </Button>
            </View> :
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

          }
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    poi: state.map.poi,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
