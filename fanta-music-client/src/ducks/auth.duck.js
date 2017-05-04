import { loginAccount } from 'helpers/auth.helper';

export const AUTH_LOGIN = "AUTH_LOGIN";

export const localLogin = (username, password) => ({
  type: AUTH_LOGIN,
  payload: {
    promise: loginAccount(username, password)
  }
});

const requests = {
    fetching: false,
    fetched: false,
    error: null
};

const initialState = {
  request: { ...requests },
  authStatus: {
    logged: false
  }
};

const pending = {fetching: true, fetched: false, error: null};
const fulfilled = {fetching: false, fetched: true, error: null};
const rejected = {fetching: false, fetched: false};

export default function reducer(state = initialState, action) {
  const payload = action.payload;
  switch(action.type) {
    case `${AUTH_LOGIN}_PENDING`:
      return {
        ...state,
        request: { ...pending }
      };
    case `${AUTH_LOGIN}_FULFILLED`:
      return {
        request: { ...fulfilled },
        authStatus: {
          logged: true
        }
      };
    case `${AUTH_LOGIN}_REJECTED`:
      return {
        request: { ...rejected, error: payload },
        authStatus: {
          logged: false
        }
      };
    default:
      return state;
  }
}
