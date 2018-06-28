import {
  MAP_CLICK,
} from '../actions';

import { defaultMap as defaults } from './defaults';

export default (state = defaults, action) => {
  switch (action.type) {
    case MAP_CLICK:
      return {
        ...state,
        lng: action.payload.lng,
        lat: action.payload.lat,
      };
    default:
      return state;
  }
};
