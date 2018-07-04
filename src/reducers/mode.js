import {
  DIRECTIONS_MODE_ON,
  DIRECTIONS_MODE_OFF,
  ROUTE_RECEIVED,
  GEOCODED_ORIGIN,
  GEOCODED_DESTINATION,
  SET_MODE_MAIN,
  SET_MODE_PROFILE,
  SET_PROFILE_PARAMS,
} from '../actions';

import { defaultMode as defaults } from './defaults';

export default (state = defaults, action) => {
  switch (action.type) {
    case SET_MODE_MAIN:
    case SET_PROFILE_PARAMS:
      return 'main';
    case SET_MODE_PROFILE:
      return 'profile';
    case DIRECTIONS_MODE_ON:
      return 'tripplanning';
    case DIRECTIONS_MODE_OFF:
      return 'main';
    case ROUTE_RECEIVED:
      return 'directions';
    case GEOCODED_ORIGIN:
    case GEOCODED_DESTINATION:
      return 'tripplanning';
    default:
      return state;
  }
};
