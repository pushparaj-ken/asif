import express from 'express';
const router = express.Router();
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";
import { CreateDto } from "./dto/category.dto";
import Controller from "./category.controller";

import multer from "multer";

const upload = multer();

router.post('/add',  middleware, upload.fields([{ name: 'categoryImage', maxCount: 10 }]), Controller.Add);

router.put('/update/:id',  middleware, upload.fields([{ name: 'categoryImage', maxCount: 10 }]), Controller.Upadte);

router.delete('/delete/:id', middleware, Controller.Delete);

router.get('/list', middleware, Controller.Details);

export default router;