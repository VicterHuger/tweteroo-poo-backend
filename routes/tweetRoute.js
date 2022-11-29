import { Router } from 'express';
import TweetController from '../controllers/TweetController.js';

const router = Router();

router.post('/tweets', TweetController.create);
router.get('/tweets/:username', TweetController.getTweetsByUser);
router.get('/tweets', TweetController.getTweets);

export default router;