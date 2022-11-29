import { Router } from "express";
import authRouter from './authRoute.js';
import tweetRouter from './tweetRoute.js';

const router = Router();
router.use([authRouter, tweetRouter]);

export default router; 