import express from 'express';
const router = express.Router();
import GallerytController from "./gallery.controller";

router.get('/list', GallerytController.GalleryDetails);

router.get('/category/list', GallerytController.GalleryCategory);

router.get('/subcategory/list', GallerytController.GallerySubCategory);

export default router;

