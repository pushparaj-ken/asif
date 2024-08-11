import express from 'express';
const router = express.Router();
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";
import { CreateDto } from "./dto/employee.dto";
import { CreateImageDto } from "./dto/employeepart.dto";
import Controller from "./employee.controller";

import multer from "multer";

const upload = multer();

router.post('/add', middleware, upload.fields([{ name: 'image', maxCount: 10 }]), Controller.Add);

router.put('/update/:id', middleware, upload.fields([{ name: 'image', maxCount: 10 }]), Controller.Upadte);

router.delete('/delete/:id', middleware, Controller.Delete);

router.get('/list', middleware, Controller.Details);

router.post('/partenairesimage/add', middleware, upload.fields([{ name: 'image', maxCount: 10 }]), Controller.AddPartenairesImage);

router.put('/partenairesimage/update/:id', middleware, upload.fields([{ name: 'image', maxCount: 10 }]), Controller.UpadtePartenairesImage);

router.delete('/partenairesimage/delete/:id', middleware, Controller.DeletePartenairesImage);

export default router;