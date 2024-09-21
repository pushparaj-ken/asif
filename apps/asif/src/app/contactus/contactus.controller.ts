import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';
import { APIResponseService } from '@asif/services'
const responseService = new APIResponseService();

export class Controller {
  async Add(req: any, res: any, next: any) {
    const data = req.body;
    try {
      const Create = await prisma.contactUs.create({ data: data })
      return await responseService.apiSuccessResponse(res, null);
    } catch (error) {
      next(error);
    }
  }

  async Upadte(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Update = await prisma.contactUs.update({ data, where })
        return await responseService.apiSuccessResponse(res, null);
      } else {
        return await responseService.apiFailResponse(res, 'Id is Required');
      }

    } catch (error) {
      next(error)
    }
  }

  async Delete(req: any, res: any, next: any) {
    const data = { status: 1 };
    const params = req.params;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Update = await prisma.contactUs.update({ data, where })
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
      const { id, slug, name, skip, take, cursor, orderBy, order, status } = req.query;
      let where: any = {}
      if (slug) {
        where.slug = slug
      }
      if (status) {
        where.status = parseInt(status)
      }
      if (name) {
        where.name = { contains: name.toString() }
      }
      const List = await prisma.contactUs.findMany({
        skip: skip ? parseInt(skip) : undefined,
        take: take ? parseInt(take) : undefined,
        cursor: cursor ? { id: parseInt(cursor) } : undefined,
        where,
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