import express from 'express';
const router = express.Router();
import Controller from "./subscription.controller";


router.post('/add', Controller.Add);

export default router;

