import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  View,
} from 'react-native';
import {
  Button,
  Icon,
  Input,
  Text,
} from 'native-base';

import styles from '../styles';
import * as AppActions from '../actions';

type Props = {};
class POIView extends Component<Props> {
  render() {
    const {
      actions,
      poi,
    } = this.props;

    return (
      <React.Fragment>
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
        </View>
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
        </View>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  poi: state.map.poi,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(POIView);
