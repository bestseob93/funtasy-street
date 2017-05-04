import express from 'express';

import geolocation from './geolocation';
import account from './account';
import music from './music';

const router = express.Router();

router.use('/account', account);
router.use('/geolocation', geolocation);
router.use('/music', music);

export default router;
