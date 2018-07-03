import {
  OVERLAY_OFF,
  OVERLAY_SEARCH,
} from '../actions';

import { defaultOverlay as defaults } from './defaults';

export default (state = defaults, action) => {
  switch (action.type) {
    case OVERLAY_OFF:
      return null;
    case OVERLAY_SEARCH:
      return 'search';
    default:
      return state;
  }
};
