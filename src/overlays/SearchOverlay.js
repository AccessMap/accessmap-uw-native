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

type Props = {};
class SearchOverlay extends Component<Props> {
  constructor() {
    super();
    this.state = {
      geocoderResults: [],
    };
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
          onGeocode={(r) => this.setState({geocoderResults: r})}
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
