import { combineReducers } from 'redux';

import map from './map';
import mode from './mode';
import overlay from './overlay';
import profile from './profile';
import statuses from './statuses';

export default combineReducers({
  map,
  mode,
  overlay,
  profile,
  statuses,
});
