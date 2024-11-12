import express from 'express';
const router = express.Router();
import Controller from "./general.controller";

import multer from "multer";

const upload = multer();

router.get('/list', Controller.Details);

export default router;