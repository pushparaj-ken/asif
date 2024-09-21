import express from 'express';
const router = express.Router();
import Controller from "./course-button.controller";
import { CreateDto } from './dto/course-button.dto';
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";


router.post('/add', validationMiddleware(CreateDto), middleware, Controller.Add);

router.put('/update/:id', validationMiddleware(CreateDto), middleware, Controller.Upadte);

router.delete('/delete/:id', middleware, Controller.Delete);

router.get('/list', middleware, Controller.Details);

export default router;
