import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  View,
} from 'react-native';
import {
  Button,
  Icon,
  Text,
} from 'native-base';

import styles from '../styles';
import * as AppActions from '../actions';

type Props = {};
class RouteView extends Component<Props> {
  render() {
    const {
      actions,
      poi,
      route,
    } = this.props;

    const route0 = route.routes[0];

    const duration = `${Math.round(route0.duration / 60, 0)} minutes`;

    let totalLength = 0;
    let totalHeight = 0;
    let maxHeight = 0;
    let minHeight = 0;
    route0.legs.forEach((leg) => {
      leg.forEach((step) => {
        const incline = step.properties.incline || 0;
        const height = step.properties.length * (incline / 1000);
        totalLength += step.properties.length;
        totalHeight += height;

        maxHeight = Math.max(maxHeight, totalHeight);
        minHeight = Math.min(minHeight, totalHeight);
      });
    });
    const eChange = `Elevation gain: ${Math.round(maxHeight - minHeight, 1)} meter(s)`;

    return (
      <View style={styles.bottomview}>
         <Button
           transparent
           onPress={actions.directionsModeOff}
         >
          <Icon name='arrow-back' />
         </Button>
         <Text>{duration}</Text>
         <Text>{eChange}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    poi: state.map.poi,
    route: state.map.route,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteView);
