import express from 'express';
const router = express.Router();
import IndexController from "./index.controller";

router.get('/list', IndexController.IndexDetails);

export default router;

