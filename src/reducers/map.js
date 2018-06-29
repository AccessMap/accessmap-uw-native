import {
  MOVE_MAP,
  PRESS_MAP,
  PRESS_DIRECTIONS_FROM_HERE,
  PRESS_DIRECTIONS_TO_HERE,
  ROUTE_RECEIVED,
} from '../actions';

import { defaultMap as defaults } from './defaults';

export default (state = defaults, action) => {
  switch (action.type) {
    case MOVE_MAP:
      return {
        ...state,
        lng: action.payload.lng,
        lat: action.payload.lat,
      }
    case PRESS_MAP:
      if (state.poi !== null) {
        return {
          ...state,
          poi: null,
        };
      }
      return {
        ...state,
        poi: {
          lng: action.payload.lng,
          lat: action.payload.lat,
        },
      };
    case PRESS_DIRECTIONS_FROM_HERE:
      return {
        ...state,
        origin: action.payload.poi,
        poi: null,
      }
    case PRESS_DIRECTIONS_TO_HERE:
      return {
        ...state,
        destination: action.payload.poi,
        poi: null,
      }
    case ROUTE_RECEIVED:
      return {
        ...state,
        route: action.payload,
      }
    default:
      return state;
  }
};
