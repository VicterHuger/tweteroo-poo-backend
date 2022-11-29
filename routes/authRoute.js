import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const router = Router();

router.post('/sign-up', AuthController.signUp);

export default router;