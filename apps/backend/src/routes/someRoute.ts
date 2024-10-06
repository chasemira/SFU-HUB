import express from 'express';
import someController from '../controllers/someController.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/:someId', someController.getSome);

export default router;
