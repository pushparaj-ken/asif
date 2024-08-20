import express from 'express';
const router = express.Router();
import Controller from "./coursepurchase.controller";
import { middleware } from "@asif/middleware";


router.post('/add', middleware, Controller.Add);

router.put('/update/:id', middleware, Controller.Upadte);

router.delete('/delete/:id', middleware, Controller.Delete);

router.get('/list', middleware, Controller.Details);

export default router;

