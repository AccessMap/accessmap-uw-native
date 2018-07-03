import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Slider,
  View,
} from 'react-native';
import {
  Body,
  Button,
  CheckBox,
  Content,
  Icon,
  ListItem,
  Text,
} from 'native-base';

import styles from '../styles';
import * as AppActions from '../actions';

type Props = {};
class RouteView extends Component<Props> {
  render() {
    const {
      actions,
      uphill,
      downhill,
      avoidStairs,
      avoidCurbs,
      fromView,
    } = this.props;

    return (
      <View style={styles.bottomview}>
        <Button
          transparent
          onPress={actions.setModeMain}
        >
         <Icon name='arrow-back' />
        </Button>
        <Content>
          <ListItem>
            <Body>
              <Slider
                minimumValue={0.03}
                maximumValue={0.15}
                step={0.005}
                value={uphill}
                onValueChange={(value) => actions.setUphill(value)}
              />
              <Text>{`Maximum uphill incline: ${(uphill * 100).toFixed(1)}`}%</Text>
            </Body>
          </ListItem>
          <ListItem>
            <Body>
              <Slider
                minimumValue={0.03}
                maximumValue={0.15}
                step={0.005}
                value={-downhill}
                onValueChange={(value) => actions.setDownhill(-value)}
              />
              <Text>{`Maximum downhill incline: ${(downhill * 100).toFixed(1)}%`}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={avoidStairs}
              onPress={() => {
                if (avoidStairs) {
                  actions.setAvoidStairsOff();
                } else {
                  actions.setAvoidStairsOn();
                }
              }}
            />
            <Body>
              <Text>Avoid stairs</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={avoidCurbs}
              onPress={() => {
                if (avoidCurbs) {
                  actions.setAvoidCurbsOff();
                } else {
                  actions.setAvoidCurbsOn();
                }
              }}
            />
            <Body>
              <Text>Avoid raised curbs</Text>
            </Body>
          </ListItem>
        </Content>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    uphill,
    downhill,
    avoidStairs,
    avoidCurbs,
  } = state.profile;
  return {
    uphill,
    downhill,
    avoidStairs,
    avoidCurbs,
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RouteView);
