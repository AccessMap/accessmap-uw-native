import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Button,
  Container,
  Header,
  Icon,
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
    } = this.props;

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
          onGeocode={this.handleGeocoder}
          autoFocus
        />
        <GeocoderList
          results={this.state.geocoderResults}
          onPressItem={(item) => {
            actions.overlayOff();
            actions.geocodedPOI(item.title, item.lng, item.lat);
          }}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchOverlay);
