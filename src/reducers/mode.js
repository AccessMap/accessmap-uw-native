import {
  DIRECTIONS_MODE_ON,
  DIRECTIONS_MODE_OFF,
  ROUTE_RECEIVED,
} from '../actions';

import { defaultMode as defaults } from './defaults';

export default (state = defaults, action) => {
  switch (action.type) {
    case DIRECTIONS_MODE_ON:
      return 'tripplanning';
    case DIRECTIONS_MODE_OFF:
      return 'main';
    case ROUTE_RECEIVED:
      return 'directions';
    default:
      return state;
  }
};
