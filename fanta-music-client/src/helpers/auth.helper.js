import axios from 'axios';
import { checkStatus } from './checkStatus';
import { browserHistory } from 'react-router';

const ROOT_URL = '/api/v1/account';

export function loginAccount(username, password) {

  return axios({
    method: 'POST',
    url: `${ROOT_URL}/signIn`,
    data: {
      username,
      password
    }
  }).then(checkStatus)
    .then(response => {
      console.log(response);
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
  }).catch(err => {
      throw err;
  });
}
