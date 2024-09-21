import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';
import { APIResponseService } from '@asif/services'
const responseService = new APIResponseService();

export class GallerytController {

  async GalleryDetails(req: any, res: any, next: any) {
    try {
      const { id, slug, name, skip, take, cursor, orderBy, subcategoryId, galleryType, order } = req.query;
      let where: any = {}
      if (slug) {
        where.slug = slug
      }
      if (name) {
        where.name = { contains: name.toString() }
      }
      if (subcategoryId) {
        where.subcategoryId = parseInt(subcategoryId)
      }

      if (galleryType) {
        where.galleryType = galleryType
      }
      const List = await prisma.gallery.findMany({
        skip: skip ? parseInt(skip) : undefined,
        take: take ? parseInt(take) : undefined,
        cursor: cursor ? { id: parseInt(cursor) } : undefined,
        where,
        include: { gallerysubcategory: true },
        orderBy: orderBy ? { [orderBy.toString()]: order || 'asc' } : undefined,
      });
      if (List.length > 0) {
        return await responseService.apiSuccessResponse(res, List);
      } else {
        return await responseService.apiFailResponse(res, 'No Data Found');
      }

    } catch (error) {
      next(error)
    }
  }

  async GalleryCategory(req: any, res: any, next: any) {
    try {
      const { id, slug, name, skip, take, cursor, orderBy, galleryType, order } = req.query;
      let where: any = {}
      if (slug) {
        where.slug = slug
      }
      if (name) {
        where.name = { contains: name.toString() }
      }
      if (galleryType) {
        where.galleryType = galleryType
      }
      const List = await prisma.galleryCategory.findMany({
        skip: skip ? parseInt(skip) : undefined,
        take: take ? parseInt(take) : undefined,
        cursor: cursor ? { id: parseInt(cursor) } : undefined,
        where,
        orderBy: orderBy ? { [orderBy.toString()]: order || 'asc' } : undefined,
        include: { gallerysubcategory: true }
      });
      if (List.length > 0) {
        return await responseService.apiSuccessResponse(res, List);
      } else {
        return await responseService.apiFailResponse(res, 'No Data Found');
      }

    } catch (error) {
      next(error)
    }

  }

  async GallerySubCategory(req: any, res: any, next: any) {
    try {
      const { id, slug, name, skip, take, cursor, orderBy, categoryId, order } = req.query;
      let where: any = {}
      if (slug) {
        where.slug = slug
      }
      if (name) {
        where.name = { contains: name.toString() }
      }
      if (categoryId) {
        where.categoryId = parseInt(categoryId)
      }
      const List = await prisma.gallerySubcategory.findMany({
        skip: skip ? parseInt(skip) : undefined,
        take: take ? parseInt(take) : undefined,
        cursor: cursor ? { id: parseInt(cursor) } : undefined,
        where,
        orderBy: orderBy ? { [orderBy.toString()]: order || 'asc' } : undefined,
        include: { gallery: true, gallerycategory: true }
      });
      if (List.length > 0) {
        return await responseService.apiSuccessResponse(res, List);
      } else {
        return await responseService.apiFailResponse(res, 'No Data Found');
      }

    } catch (error) {
      next(error)
    }
  }

}


const gallerytController = new GallerytController();
export default gallerytController;