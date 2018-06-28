// action types
export const MAP_CLICK = 'MAP_CLICK';

// action creators
export const mapClick = (lng, lat) => ({
  type: MAP_CLICK,
  payload: { lng, lat },
});
