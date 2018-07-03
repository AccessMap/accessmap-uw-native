import { combineReducers } from 'redux';

import map from './map';
import mode from './mode';
import overlay from './overlay';

export default combineReducers({
  map,
  mode,
  overlay,
});
