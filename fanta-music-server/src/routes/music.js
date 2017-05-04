import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import request from 'request-promise';

const router = express.Router();

const SC_URL = process.env.ROOT_SC;
const SC_ID = process.env.SC_ID;

router.get('/search/:searchResult', (req, res) => {
  let trackResult = req.params.searchResult;
  console.log(req.params);
  console.log(req.headers);
  console.log(req.get('content-type'));
  console.log('test');
  console.log(trackResult);

  const reqOptions = {
    method: 'GET',
    json: true,
    uri: `${SC_URL}/tracks`,
    qs: {
      q: trackResult,
      client_id: SC_ID,
      limit: 20,
      linked_partitioning: 10
    },
    headers: { 'content-type': 'application/json; charset=utf-8' }
  };
  console.log(reqOptions);

  request(reqOptions)
    .then(results => {
      console.log(results);
      return res.status(200).json({
        success: true,
        results
      });
    })
    .catch(err => {
      if(err) {
        console.log('errrr');
        console.log(err.stack);
      }
    });
});

export default router;
