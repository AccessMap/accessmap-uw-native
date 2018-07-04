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
  constructor(props) {
    super()
    this.state = {
      uphill: props.uphill,
      downhill: props.downhill,
      avoidStairs: props.avoidStairs,
      avoidCurbs: props.avoidCurbs,
    };
  }

  setUphill = (incline) => { this.setState({ uphill: incline }) };
  setDownhill = (incline) => { this.setState({ downhill: incline }) };
  setAvoidStairs = (value) => { this.setState({ avoidStairs: value }) };
  setAvoidCurbs = (value) => { this.setState({ avoidCurbs: value }) };
  saveParams = () => { this.props.actions.setProfileParams({ ...this.state }) };

  render() {
    const {
      actions,
    } = this.props;

    const {
      uphill,
      downhill,
      avoidStairs,
      avoidCurbs,
    } = this.state;

    return (
      <View style={styles.bottomview}>
        <View style={{ flexDirection: 'row' }}>
          <Button
            transparent
            onPress={actions.setModeMain}
          >
           <Icon name='arrow-back' />
          </Button>
          <Button onPress={this.saveParams}>
            <Text>Save</Text>
          </Button>
        </View>
        <Content>
          <ListItem>
            <Body>
              <Slider
                minimumValue={0.03}
                maximumValue={0.15}
                step={0.005}
                value={uphill}
                onValueChange={(value) => this.setUphill(value)}
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
                onValueChange={(value) => this.setDownhill(-value)}
              />
              <Text>{`Maximum downhill incline: ${(downhill * 100).toFixed(1)}%`}</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox
              checked={avoidStairs}
              onPress={() => {
                if (avoidStairs) {
                  this.setAvoidStairs(false);
                } else {
                  this.setAvoidStairs(true);
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
                  this.setAvoidCurbs(false);
                } else {
                  this.setAvoidCurbs(true);
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
