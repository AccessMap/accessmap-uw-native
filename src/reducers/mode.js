import {
  DIRECTIONS_MODE_ON,
  DIRECTIONS_MODE_OFF,
} from '../actions';

import { defaultMode as defaults } from './defaults';

export default (state = defaults, action) => {
  switch (action.type) {
    case DIRECTIONS_MODE_ON:
      return 'directions';
    case DIRECTIONS_MODE_OFF:
      return 'main';
    default:
      return state;
  }
};
