import express from 'express';
const router = express.Router();
import { CreateAdminUsersDto } from './dto/adminusers.dto';
import AdminUsersController from "./adminusers.controller";
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";


router.post('/add', validationMiddleware(CreateAdminUsersDto), middleware, AdminUsersController.AddAdminUsers);

router.put('/update/:id', validationMiddleware(CreateAdminUsersDto), middleware, AdminUsersController.UpadteAdminUsers);

router.delete('/delete/:id', middleware, AdminUsersController.DeleteAdminUsers);

router.get('/list', middleware, AdminUsersController.AdminUsersDetails);

export default router;

