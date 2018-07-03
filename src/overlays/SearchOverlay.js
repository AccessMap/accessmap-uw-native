import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { View } from 'react-native';
import {
  Button,
  Container,
  Header,
  Icon,
  Spinner,
  Text,
} from 'native-base';

import styles from '../styles';
import * as AppActions from '../actions';

import DefaultHeader from '../components/DefaultHeader';
import GeocoderList from '../components/GeocoderList';
import SearchGeocoder from '../components/SearchGeocoder';


const BOUNDS = [-122.320741, 47.643214, -122.290601, 47.666229];

type Props = {};
class SearchOverlay extends Component<Props> {
  constructor() {
    super();
    this.state = {
      geocoderResults: [],
    };
  }

  handleGeocoder = (results) => {
    this.props.actions.geocodingEnded();
    const inBounds = results.filter(d => {
      if (d.position.lng < BOUNDS[0]) return false;
      if (d.position.lng > BOUNDS[2]) return false;
      if (d.position.lat < BOUNDS[1]) return false;
      if (d.position.lat > BOUNDS[3]) return false;
      return true;
    });
    this.setState({geocoderResults: inBounds})
  }

  render() {
    const {
      actions,
      geocoding,
    } = this.props;

    const {
      geocoderResults,
    } = this.state;

    let content;
    if (geocoding) {
      content = (<Spinner />);
    } else {
      if (geocoderResults.length) {
        content = (
          <GeocoderList
            results={geocoderResults}
            onPressItem={(item) => {
              actions.overlayOff();
              actions.geocodedPOI(item.title, item.lng, item.lat);
            }}
          />
        );
      } else {
        content = (
          <View style={{ alignItems: 'center', justify: 'center' }}>
            <Text>Enter a search term until a result is found</Text>
          </View>
        );
      }
    }

    return (
      <Container style={styles.temporary}>
        <Header>
          <DefaultHeader
            left={(
              <Button
                transparent
                onPress={actions.overlayOff}
              >
               <Icon name='arrow-back' />
              </Button>
            )}
          />
        </Header>
        <SearchGeocoder
          ref={'searchGeocoder'}
          autoFocus
          onGeocode={this.handleGeocoder}
          onChange={actions.geocoding}
        />
        {content}
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  geocoding: state.statuses.geocoding,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchOverlay);
