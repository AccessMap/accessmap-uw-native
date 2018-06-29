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
import Map from '../containers/Map';
import GeocoderList from '../components/GeocoderList';
import SearchGeocoder from '../components/SearchGeocoder';

type Props = {};
class MainView extends Component<Props> {
  constructor() {
    super();
    this.state = {
      searchView: false,
      geocoderResults: [],
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
      actions,
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
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
             <Button
                transparent
                onPress={actions.clearPOI}
              >
               <Icon name='arrow-back' />
              </Button>
              <Text style={{ alignItems: 'center', justifyContent: 'center' }}>
                {poi.title || `${poi.lat.toFixed(6)}, ${poi.lng.toFixed(6)}`}
              </Text>
            </View> :
            <SearchGeocoder
              ref={'searchGeocoder'}
              onFocus={this.startSearch}
              onGeocode={(r) => this.setState({geocoderResults: r})}
            />
          }
          { this.state.searchView ?
            <GeocoderList
              results={this.state.geocoderResults}
              onPressItem={(item) => {
                this.endSearch();
                actions.geocodedPOI(item.title, item.lng, item.lat);
              }}
            /> :
            poi ?
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Button
                iconLeft
                style={{ flex: 1 }}
                onPress={() => actions.pressDirectionsFromHere(poi)}
              >
                <Text>Directions from here</Text>
              </Button>
              <Button
                iconRight
                style={{ flex: 1, marginLeft: 8 }}
                onPress={() => actions.pressDirectionsToHere(poi)}
              >
                <Text>Directions to here</Text>
              </Button>
            </View> :
            <View style={{ flexDirection: 'row', marginTop: 8 }}>
              <Button
                iconLeft
                style={{ flex: 1 }}
                onPress={() => {}}
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

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
