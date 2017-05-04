import { fetchSearchResults } from 'helpers/search.helper';

export const REQUEST_SEARCH_RESULTS = "REQUEST_SEARCH_RESULTS";
export const REQUEST_STREAM_URL = "REQUEST_STREAM_URL";

export const requestSearchResults = (searchResult) => ({
    type: REQUEST_SEARCH_RESULTS,
    payload: {
      promise: fetchSearchResults(searchResult)
    }
});

export const requestStreamUrl = (streamUrl) => ({
    type: REQUEST_STREAM_URL,
    stream_url: streamUrl
});

const requests = {
    fetching: false,
    fetched: false,
    error: null
};

const searchResults = {
  result: []
};

const initialState = {
  request: { ...requests },
  searchResults: { ...searchResults },
  streamUrl: ''
};

const pending = {fetching: true, fetched: false, error: null};
const fulfilled = {fetching: false, fetched: true, error: null};
const rejected = {fetching: false, fetched: false};

export default function reducer(state = initialState, action) {
  const payload = action.payload;
  console.log('페이로드');
  console.log(payload);
  switch(action.type) {
    case `${REQUEST_SEARCH_RESULTS}_PENDING`:
      return {
        ...state,
        request: { ...pending }
      };

    case `${REQUEST_SEARCH_RESULTS}_FULFILLED`:
      return {
        searchResults: {
          result: payload.data.results
        },
        request: { ...fulfilled }
      };

    case `${REQUEST_SEARCH_RESULTS}_REJECTED`:
      return {
        ...state,
        request: { ...rejected, error: payload }
      };
    case `${REQUEST_STREAM_URL}`:
      return {
        ...state,
        streamUrl: action.stream_url
      };
    default:
      return state;
  }
}
