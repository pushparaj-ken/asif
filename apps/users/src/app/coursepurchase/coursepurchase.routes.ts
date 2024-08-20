import express from 'express';
const router = express.Router();
import Controller from "./coursepurchase.controller";


router.post('/add', Controller.Add);

export default router;

