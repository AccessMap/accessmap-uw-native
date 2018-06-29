// action types
export const MOVE_MAP = 'MOVE_MAP';
export const PRESS_MAP = 'PRESS_MAP';

export const PRESS_DIRECTIONS_FROM_HERE = 'PRESS_DIRECTIONS_FROM_HERE';
export const PRESS_DIRECTIONS_TO_HERE = 'PRESS_DIRECTIONS_TO_HERE';

export const DIRECTIONS_MODE_ON = 'DIRECTIONS_MODE_ON';
export const DIRECTIONS_MODE_OFF = 'DIRECTIONS_MODE_OFF';

export const ROUTE_REQUESTED = 'ROUTE_REQUESTED';
export const ROUTE_RECEIVED = 'ROUTE_RECEIVED';
export const ROUTE_FAILED = 'ROUTE_FAILED';

export const GEOCODED_POI = 'GEOCODED_POI';
export const GEOCODED_ORIGIN = 'GEOCODED_ORIGIN';
export const GEOCODED_DESTINATION = 'GEOCODED_DESTINATION';

export const SET_MODE_MAIN = 'SET_MODE_MAIN';

export const CLEAR_POI = 'CLEAR_POI';

//
// action creators
//

// Map interactions
export const moveMap = (lng, lat, zoom) => ({
  type: MOVE_MAP,
  payload: { lng, lat, zoom },
});

export const pressMap = (lng, lat) => ({
  type: PRESS_MAP,
  payload: { lng, lat },
});

// Main view button presses
export const pressDirectionsFromHere = (poi) => (dispatch, getState) => {
  dispatch({
    type: PRESS_DIRECTIONS_FROM_HERE,
    payload: { poi },
  });

  const { destination } = getState().map;
  destination && requestRoute(poi, destination, dispatch);
};

export const pressDirectionsToHere = (poi) => (dispatch, getState) => {
  dispatch({
    type: PRESS_DIRECTIONS_TO_HERE,
    payload: { poi },
  });

  const { origin } = getState().map;
  origin && requestRoute(origin, poi, dispatch);
};

// Mode toggles
export const directionsModeOn = () => ({
  type: DIRECTIONS_MODE_ON,
});

export const directionsModeOff = () => ({
  type: DIRECTIONS_MODE_OFF,
});

// Routing  status / helpers
export const routeRequested = (origin, destination) => ({
  type: ROUTE_REQUESTED,
  payload: { origin, destination },
});

export const routeReceived = (route) => ({
  type: ROUTE_RECEIVED,
  payload: route,
});

export const routeFailed = (origin, destination, error) => ({
  type: ROUTE_FAILED,
  payload: { origin, destination, error },
});

const requestRoute = (origin, destination, dispatch) => {
  dispatch(routeRequested(origin, destination));

  const routeParams = {
    origin: `${origin.lat},${origin.lng}`,
    destination: `${destination.lat},${destination.lng}`,
  };

  const esc = encodeURIComponent;
  const urlQuery = Object.keys(routeParams)
    .map(k => `${esc(k)}=${esc(routeParams[k])}`)
    .join('&');

  const query = `https://staging.accessmap.io/api/v2/route.json?${urlQuery}`;

  fetch(query)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.status);
    })
    .then(json => dispatch(routeReceived(json)))
    .catch(error => dispatch(routeFailed(origin, destination, error.message)));
};


// Geocoder actions
export const geocodedPOI = (title, lng, lat) => ({
  type: GEOCODED_POI,
  payload: { title, lng, lat },
});

export const geocodedOrigin = (title, lng, lat) => ({
  type: GEOCODED_ORIGIN,
  payload: { title, lng, lat },
});


export const geocodedDestination = (title, lng, lat) => ({
  type: GEOCODED_DESTINATION,
  payload: { title, lng, lat },
});

// Toggle modes
export const setModeMain = () => ({
  type: SET_MODE_MAIN,
});

// Waypoints
export const clearPOI = () => ({
  type: CLEAR_POI,
});

