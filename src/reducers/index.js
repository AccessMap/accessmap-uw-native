import { combineReducers } from 'redux';

import map from './map';
import mode from './mode';

export default combineReducers({
  map,
  mode,
});
