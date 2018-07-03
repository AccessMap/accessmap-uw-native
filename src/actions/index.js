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

export const GEOCODING = 'GEOCODING';
export const GEOCODING_ENDED = 'GEOCODING_ENDED';
export const GEOCODED_POI = 'GEOCODED_POI';
export const GEOCODED_ORIGIN = 'GEOCODED_ORIGIN';
export const GEOCODED_DESTINATION = 'GEOCODED_DESTINATION';

export const SET_MODE_MAIN = 'SET_MODE_MAIN';
export const SET_MODE_PROFILE = 'SET_MODE_PROFILE';

export const OVERLAY_OFF = 'OVERLAY_OFF';
export const OVERLAY_SEARCH = 'OVERLAY_SEARCH';

export const CLEAR_POI = 'CLEAR_POI';

export const SET_UPHILL = 'SET_UPHILL';
export const SET_DOWNHILL = 'SET_DOWNHILL';
export const SET_AVOID_STAIRS_ON = 'SET_AVOID_STAIRS_ON';
export const SET_AVOID_STAIRS_OFF = 'SET_AVOID_STAIRS_OFF';
export const SET_AVOID_CURBS_ON = 'SET_AVOID_CURBS_ON';
export const SET_AVOID_CURBS_OFF = 'SET_AVOID_CURBS_OFF';

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
  const { profile } = getState();
  destination && requestRoute(poi, destination, profile, dispatch);
};

export const pressDirectionsToHere = (poi) => (dispatch, getState) => {
  dispatch({
    type: PRESS_DIRECTIONS_TO_HERE,
    payload: { poi },
  });

  const { origin } = getState().map;
  const { profile } = getState();
  origin && requestRoute(origin, poi, profile, dispatch);
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

const requestRoute = (origin, destination, profile, dispatch) => {
  dispatch(routeRequested(origin, destination));

  const routeParams = {
    origin: `${origin.lat},${origin.lng}`,
    destination: `${destination.lat},${destination.lng}`,
    incline_max: profile.uphill,
    incline_min: profile.downhill,
  };

  const avoid = [];
  if (profile.avoidCurbs) {
    avoid.push('curbs');
  }
  if (profile.avoidStairs) {
    avoid.push('stairs');
  }
  routeParams.avoid = avoid.join('|');

  const esc = encodeURIComponent;
  const urlQuery = Object.keys(routeParams)
    .map(k => `${esc(k)}=${esc(routeParams[k])}`)
    .join('&');

  const query = `https://uw.accessmap.io/api/v2/route.json?${urlQuery}`;

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
export const geocoding = () => ({ type: GEOCODING });

export const geocodingEnded = () => ({ type: GEOCODING_ENDED });

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
export const setModeMain = () => ({ type: SET_MODE_MAIN });

export const setModeProfile = () => ({ type: SET_MODE_PROFILE });

// Toggle overlays
export const overlayOff = () => ({
  type: OVERLAY_OFF,
});

export const overlaySearch = () => ({
  type: OVERLAY_SEARCH,
});

// Waypoints
export const clearPOI = () => ({
  type: CLEAR_POI,
});


// User profile
export const setUphill = (incline) => ({ type: SET_UPHILL, payload: incline  });
export const setDownhill = (incline) => ({ type: SET_DOWNHILL, payload: incline });
export const setAvoidStairsOn = () => ({ type: SET_AVOID_STAIRS_ON });
export const setAvoidStairsOff = () => ({ type: SET_AVOID_STAIRS_OFF });
export const setAvoidCurbsOn = () => ({ type: SET_AVOID_CURBS_ON });
export const setAvoidCurbsOff = () => ({ type: SET_AVOID_CURBS_OFF });
