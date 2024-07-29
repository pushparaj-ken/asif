import express from 'express';
const router = express.Router();
import Controller from "./contactus.controller";


router.post('/add', Controller.Add);

export default router;

