import express from 'express';
const router = express.Router();
import AuthController from "./auth.controller";
import { CreateAuthDto } from './dto/auth.dto';
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";

router.post('/login', validationMiddleware(CreateAuthDto), AuthController.LoginDetails);

router.post('/register', validationMiddleware(CreateAuthDto), middleware, AuthController.RegisterDetails);

export default router;

