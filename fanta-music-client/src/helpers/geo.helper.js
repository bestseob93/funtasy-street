import axios from 'axios';
import { checkStatus } from './checkStatus';

const ROOT_URL = '/api/v1/geolocation';

export function fetchGeocode(latlng) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/reversegeocode/${latlng}`
  }).then(checkStatus)
    .then(response => {
      console.log('geo axios');
      console.log(response);
      return response.data.results.results[0];
    }).catch(err => {
      throw err;
    });
}
