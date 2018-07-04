import {
  OVERLAY_OFF,
  OVERLAY_SEARCH,
  OVERLAY_POIS,
  SET_POI,
} from '../actions';

import { defaultOverlay as defaults } from './defaults';

export default (state = defaults, action) => {
  switch (action.type) {
    case OVERLAY_OFF:
    case SET_POI:
      return null;
    case OVERLAY_SEARCH:
      return 'search';
    case OVERLAY_POIS:
      return 'pois';
    default:
      return state;
  }
};
