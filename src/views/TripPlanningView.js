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
import SearchGeocoder from '../components/SearchGeocoder';

type Props = {};
class TripPlanningView extends Component<Props> {
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
        <Map />
        <View style={styles.bottomview}>
          <SearchGeocoder />
          <SearchGeocoder />
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

export default connect(mapStateToProps, mapDispatchToProps)(TripPlanningView);