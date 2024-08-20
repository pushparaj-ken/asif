import express from 'express';
const router = express.Router();
import Controller from "./filemanager.controller";
import { middleware } from "@asif/middleware";
import multer from "multer";

const upload = multer();

router.get('/list', Controller.listAllObjects);

router.post('/createfolder', Controller.CreateFolder);

router.delete('/deletefolder', Controller.DeleteFolder);

router.delete('/deletefile', Controller.DeleteFile);

router.post('/commonupload', upload.fields([{ name: 'image', maxCount: 10 }]), Controller.CommonUpload);

export default router;

