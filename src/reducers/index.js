import { combineReducers } from 'redux';

import map from './map';
import mode from './mode';
import overlay from './overlay';
import statuses from './statuses';

export default combineReducers({
  map,
  mode,
  overlay,
  statuses,
});
