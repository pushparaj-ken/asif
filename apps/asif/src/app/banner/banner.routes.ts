import express from 'express';
const router = express.Router();
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";
import { CreateDto } from "./dto/banner.dto";
import { CreateImageDto } from "./dto/image.dto";
import Controller from "./banner.controller";

import multer from "multer";

const upload = multer();

router.post('/add', validationMiddleware(CreateDto), middleware, Controller.Add);

router.put('/update/:id', validationMiddleware(CreateDto), middleware, Controller.Upadte);

router.delete('/delete/:id', middleware, Controller.Delete);

router.get('/list', middleware, Controller.Details);

router.post('/image/add', validationMiddleware(CreateDto), middleware, upload.fields([{ name: 'image', maxCount: 10 }]), Controller.AddImage);

router.put('/image/update/:id', validationMiddleware(CreateImageDto), middleware, upload.fields([{ name: 'image', maxCount: 10 }]), Controller.UpadteImage);

router.delete('/image/delete/:id', middleware, Controller.DeleteImage);

export default router;