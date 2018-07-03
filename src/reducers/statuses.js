import { combineReducers } from 'redux';

import {
  GEOCODING,
  GEOCODING_ENDED,
  GEOCODED_POI,
  GEOCODED_ORIGIN,
  GEOCODED_DESTINATION,
} from '../actions';

import { defaultStatuses as defaults } from './defaults';

const handleGeocoding = (state = defaults.geocoding, action) => {
  switch (action.type) {
    case GEOCODING:
      return true;
    case GEOCODING_ENDED:
    case GEOCODED_POI:
    case GEOCODED_ORIGIN:
    case GEOCODED_DESTINATION:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  geocoding: handleGeocoding,
});
