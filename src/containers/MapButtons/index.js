import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  View
} from 'react-native';
import {
  Button,
  Icon,
} from 'native-base';

import * as AppActions from '../../actions';

const BUTTONSIZE = 50;

type Props = {};
class MapButtons extends Component<Props> {
  render() {
    const {
      actions,
    } = this.props;

    return (
      <React.Fragment>
        <Button
          style={{
            height: BUTTONSIZE,
            width: BUTTONSIZE,
            borderRadius: 35,
            marginBottom: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={actions.incrementZoom}
        >
          <Icon name='add' />
        </Button>
        <Button
          style={{
            height: BUTTONSIZE,
            width: BUTTONSIZE,
            borderRadius: 35,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={actions.decrementZoom}
        >
          <Icon name='remove' />
        </Button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(AppActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MapButtons);
