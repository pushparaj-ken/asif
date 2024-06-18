import express from 'express';
const router = express.Router();
import RoleController from "./role.controller";
import { CreateRoleDto } from './dto/role.dto';
import { validationMiddleware } from '@asif/services';
import { middleware } from "@asif/middleware";


router.post('/add', validationMiddleware(CreateRoleDto), middleware, RoleController.AddRole);

router.put('/update/:id', validationMiddleware(CreateRoleDto), middleware, RoleController.UpadteRole);

router.delete('/delete/:id', middleware, RoleController.DeleteRole);

router.get('/list', middleware, RoleController.RoleDetails);

export default router;

