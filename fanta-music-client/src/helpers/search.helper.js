//import async from 'async';
import axios from 'axios';
import { checkStatus } from './checkStatus';


const ROOT_URL = '/api/v1/music';

export function fetchSearchResults(searchResult) {
  return axios({
    method: 'GET',
    url: `${ROOT_URL}/search/${searchResult}`
  }).then(checkStatus)
    .then(response => {
      return response;
  }).catch(err => {
      throw err;
  });
  /* async series 코드 테스트하기 */
  // return async.series([
  //   /* SEARCH TRACK, type = track */
  //   axios({
  //     method: 'get',
  //     url: `${ROOT_SPOTIFY}/search/?q=${searchResult}&type=track`
  //   }).then(checkStatus)
  //     .then(response => {
  //       console.log('type: track, response');
  //       console.log(response);
  //   }).catch(err => {
  //       throw err;
  //   }),
  //   axios({
  //     method: 'get',
  //     url: `${ROOT_SPOTIFY}/search/?q=${searchResult}&type=album`
  //   }).then(checkStatus)
  //     .then(response => {
  //       console.log('type: album, response');
  //       console.log(response);
  //   }).catch(err => {
  //       throw err;
  //   }),
  //   axios({
  //     method: 'get',
  //     url: `${ROOT_SPOTIFY}/search/?q=${searchResult}&type=artist`
  //   }).then(checkStatus)
  //     .then(response => {
  //       console.log('type: artist, response');
  //       console.log(response);
  //   }).catch(err => {
  //       throw err;
  //   }),
  // ], err => {
  //   if(err) throw err;
  // });
}
