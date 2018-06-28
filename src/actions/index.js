// action types
export const PRESS_MAP = 'PRESS_MAP';
export const PRESS_DIRECTIONS_FROM_HERE = 'PRESS_DIRECTIONS_FROM_HERE';
export const PRESS_DIRECTIONS_TO_HERE = 'PRESS_DIRECTIONS_TO_HERE';
export const DIRECTIONS_MODE_ON = 'DIRECTIONS_MODE_ON';
export const DIRECTIONS_MODE_OFF = 'DIRECTIONS_MODE_OFF';

// action creators
export const pressMap = (lng, lat) => ({
  type: PRESS_MAP,
  payload: { lng, lat },
});

export const pressDirectionsFromHere = (poi) => ({
  type: PRESS_DIRECTIONS_FROM_HERE,
  payload: { poi },
});

export const pressDirectionsToHere = (poi) => ({
  type: PRESS_DIRECTIONS_TO_HERE,
  payload: { poi },
});

export const directionsModeOn = () => ({
  type: DIRECTIONS_MODE_ON,
});

export const directionsModeOff = () => ({
  type: DIRECTIONS_MODE_OFF,
});
