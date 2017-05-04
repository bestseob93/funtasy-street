import { fetchGeocode } from 'helpers/geo.helper';

export const REQUEST_GEOCODE = "REQUEST_GEOCODE";

export const requestGeocode = (latlng) => ({
  type: REQUEST_GEOCODE,
  payload: {
    promise: fetchGeocode(latlng)
  }
});

const requests = {
  fetching: false,
  fetched: false,
  error: null
};

const initialState = {
  request: { ...requests },
  currentAddress: ''
};

const pending = {fetching: true, fetched: false, error: null};
const fulfilled = {fetching: false, fetched: true, error: null};
const rejected = {fetching: false, fetched: false};

export default function reducer(state = initialState, action) {
  const payload = action.payload;
  console.log('geo payload');
  console.log(payload);
  switch(action.type) {
    case `${REQUEST_GEOCODE}_PENDING`:
      return {
        ...state,
        request: { ...pending }
      };
    case `${REQUEST_GEOCODE}_FULFILLED`:
      return {
        currentAddress: payload.formatted_address,
        request: { ...fulfilled }
      };
    case `${REQUEST_GEOCODE}_REJECTED`:
      return {
        ...state,
        request: { ...rejected, error: payload }
      };
    default:
      return state;
  }
}
