import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';
import { APIResponseService } from '@asif/services'
const responseService = new APIResponseService();

export class Controller {

  async Add(req: any, res: any, next: any) {
    const data = req.body;
    const files = req.files;
    try {
      const Create = await prisma.gallery.create({ data: data })
      return await responseService.apiSuccessResponse(res, null);
    } catch (error) {
      next(error);
    }
  }

  async Upadte(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    const files = req.files;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Update = await prisma.gallery.update({ data, where })
        return await responseService.apiSuccessResponse(res, null);
      } else {
        return await responseService.apiFailResponse(res, 'Id is Required');
      }

    } catch (error) {
      next(error)
    }
  }

  async Delete(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Detele = await prisma.gallery.delete({ where })
        return await responseService.apiSuccessResponse(res, null);
      } else {
        return await responseService.apiFailResponse(res, 'Id is Required');
      }
    } catch (error) {
      next(error)
    }
  }

  async Details(req: any, res: any, next: any) {
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


}


const controller = new Controller();
export default controller;