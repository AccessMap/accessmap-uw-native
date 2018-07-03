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
  render() {
    const {
      actions,
    } = this.props;

    return (
      <React.Fragment>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Button
            iconLeft
            block
            style={{ flex: 1 }}
            onPress={actions.overlaySearch}
          >
            <Icon name='search' />
            <Text>Search for Address</Text>
          </Button>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
          <Button
            iconRight
            block
            style={{ flex: 1 }}
          >
            <Icon name='settings' style={{marginLeft: 8}} />
            <Text>Change Profile</Text>
          </Button>
        </View>
    </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
