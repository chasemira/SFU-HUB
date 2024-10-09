import express from 'express';
import diningController from '../controllers/diningController.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', diningController.getResources);

export default router;