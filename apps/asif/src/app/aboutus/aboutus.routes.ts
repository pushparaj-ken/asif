import express from 'express';
const router = express.Router();
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";
import { CreateDto } from "./dto/aboutus.dto";
import Controller from "./aboutus.controller";

import multer from "multer";

const upload = multer();

router.post('/add',  middleware, upload.fields([{ name: 'imageOne', maxCount: 10 },{ name: 'imageTwo', maxCount: 10 },{ name: 'imageThree', maxCount: 10 }]), Controller.Add);

router.put('/update/:id',  middleware, upload.fields([{ name: 'imageOne', maxCount: 10 },{ name: 'imageTwo', maxCount: 10 },{ name: 'imageThree', maxCount: 10 }]), Controller.Upadte);

router.delete('/delete/:id', middleware, Controller.Delete);

router.get('/list', middleware, Controller.Details);

export default router;