import express from 'express';
const router = express.Router();
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";
import { CreateDto } from "./dto/history.dto";
import { CreateHistoryListDto } from "./dto/historylist.dto";
import Controller from "./history.controller";

import multer from "multer";

const upload = multer();
router.post('/add', middleware, upload.fields([{ name: 'image_one', maxCount: 10 }, { name: 'image_two', maxCount: 10 }, { name: 'image_three', maxCount: 10 }]), Controller.Add);

router.put('/update/:id', middleware, upload.fields([{ name: 'image_one', maxCount: 10 }, { name: 'image_two', maxCount: 10 }, { name: 'image_three', maxCount: 10 }]), Controller.Upadte);

router.delete('/delete/:id', middleware, Controller.Delete);

router.get('/list', middleware, Controller.Details);

router.post('/accordian/add', validationMiddleware(CreateHistoryListDto), middleware, Controller.AddHistoryList);

router.put('/accordian/update/:id', validationMiddleware(CreateHistoryListDto), middleware, Controller.UpadteHistoryList);

router.delete('/accordian/delete/:id', middleware, Controller.DeleteHistoryList);

router.get('/accordian/list', middleware, Controller.DetailsHistoryList);

export default router;