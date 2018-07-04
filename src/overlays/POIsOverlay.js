import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Body,
  Button,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Text,
} from 'native-base';

import pois from '../constants/pois';

import styles from '../styles';
import * as AppActions from '../actions';

import DefaultHeader from '../components/DefaultHeader';


type Props = {};
class SearchOverlay extends Component<Props> {
  render() {
    const {
      actions,
    } = this.props;

    const poiList = pois.specialOlympics.map((d, i) => {
      return (
        <ListItem
          key={`${d.name}-${i}`}
          icon
          onPress={() => actions.setPOI(d.name, d.lng, d.lat)}
        >
          <Left>
            <Icon name={d.icon} />
          </Left>
          <Body>
            <Text>{d.name}</Text>
          </Body>
        </ListItem>
      );
    });

    return (
      <Container style={styles.temporary}>
        <Header style={{ marginBottom: 8 }}>
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
        <Content>
          <List>
            { poiList }
          </List>
        </Content>
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
