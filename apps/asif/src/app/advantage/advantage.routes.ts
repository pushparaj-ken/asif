import express from 'express';
const router = express.Router();
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";
import { CreateDto } from "./dto/advantage.dto";
import Controller from "./advantage.controller";


router.post('/add', middleware, validationMiddleware(CreateDto), Controller.Add);

router.put('/update/:id', middleware, validationMiddleware(CreateDto), Controller.Upadte);

router.delete('/delete/:id', middleware, Controller.Delete);

router.get('/list', middleware, Controller.Details);

export default router;