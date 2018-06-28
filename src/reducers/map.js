import {
  MAP_CLICK,
} from '../actions';

import { defaultMap as defaults } from './defaults';

export default (state = defaults, action) => {
  switch (action.type) {
    case MAP_CLICK:
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
    default:
      return state;
  }
};
