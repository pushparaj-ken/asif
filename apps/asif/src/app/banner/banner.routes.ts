import express from 'express';
const router = express.Router();
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";
import { CreateBannerDto } from "./dto/banner.dto";
import { CreateBannerImageDto } from "./dto/image.dto";
import BannerController from "./banner.controller";

import multer from "multer";

const upload = multer();

router.post('/add', validationMiddleware(CreateBannerDto), middleware, BannerController.AddBanner);

router.put('/update/:id', validationMiddleware(CreateBannerDto), middleware, BannerController.UpadteBanner);

router.delete('/delete/:id', middleware, BannerController.DeleteBanner);

router.get('/list', middleware, BannerController.BannerDetails);

router.post('/image/add', validationMiddleware(CreateBannerImageDto), middleware, upload.fields([{ name: 'image', maxCount: 10 }]), BannerController.AddBannerImage);

router.put('/image/update/:id', validationMiddleware(CreateBannerImageDto), middleware, upload.fields([{ name: 'image', maxCount: 10 }]), BannerController.UpadteBannerImage);

router.delete('/image/delete/:id', middleware, BannerController.DeleteBannerImage);

export default router;