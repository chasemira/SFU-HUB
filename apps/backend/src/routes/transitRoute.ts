import express from 'express';
import transitController from '../controllers/transitController.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/transit', transitController.getTransit);

export default router;
