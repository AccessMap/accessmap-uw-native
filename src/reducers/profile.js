import { combineReducers } from 'redux';
import {
  SET_PROFILE_PARAMS,
  SET_UPHILL,
  SET_DOWNHILL,
  SET_IDEAL,
  SET_AVOID_STAIRS_ON,
  SET_AVOID_STAIRS_OFF,
  SET_AVOID_CURBS_ON,
  SET_AVOID_CURBS_OFF,
} from '../actions';

import { defaultProfile as defaults } from './defaults';

export default (state = defaults, action) => {
  switch (action.type) {
    case SET_PROFILE_PARAMS:
      return { ...state, ...action.payload };
    case SET_UPHILL:
      return { ...state, uphill: action.payload };
    case SET_DOWNHILL:
      return { ...state, downhill: action.payload };
    case SET_IDEAL:
      return { ...state, ideal: action.payload };
    case SET_AVOID_STAIRS_ON:
      return { ...state, avoidStairs: true };
    case SET_AVOID_STAIRS_OFF:
      return { ...state, avoidStairs: false };
    case SET_AVOID_CURBS_ON:
      return { ...state, avoidCurbs: true };
    case SET_AVOID_CURBS_OFF:
      return { ...state, avoidCurbs: false };
    default:
      return state;
  }
};
