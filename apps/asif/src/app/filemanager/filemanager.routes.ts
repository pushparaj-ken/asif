import express from 'express';
const router = express.Router();
import Controller from "./filemanager.controller";
import { middleware } from "@asif/middleware";
import multer from "multer";

const upload = multer();

router.get('/list', middleware, Controller.listAllObjects);

router.post('/createfolder', middleware, Controller.CreateFolder);

router.delete('/deletefolder', middleware, Controller.DeleteFolder);

router.delete('/deletefile', middleware, Controller.DeleteFile);

router.post('/commonupload', middleware, upload.fields([{ name: 'image', maxCount: 10 }]), Controller.CommonUpload);

export default router;

