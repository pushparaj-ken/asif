import express from 'express';
const router = express.Router();
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";
import { CreateDto } from "./dto/news.dto";
import Controller from "./news.controller";

import multer from "multer";

const upload = multer();

router.post('/add', middleware, upload.fields([{ name: 'image', maxCount: 10 }]), Controller.Add);

router.put('/update/:id', middleware, upload.fields([{ name: 'image', maxCount: 10 }]), Controller.Upadte);

router.delete('/delete/:id', middleware, Controller.Delete);

router.get('/list', middleware, Controller.Details);

router.post('/news-section/add', middleware, Controller.NewsSectionAdd);

router.put('/news-section/update/:id', middleware, Controller.NewsSectionUpadte);

router.delete('/news-section/delete/:id', middleware, Controller.NewsSectionDelete);

router.get('/news-section/list', middleware, Controller.NewsSectionDetails);

export default router;