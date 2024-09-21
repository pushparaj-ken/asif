import bcrypt from "bcryptjs";
import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';
import { APIResponseService } from '@asif/services'
const responseService = new APIResponseService();

export class Controller {
  async Add(req: any, res: any, next: any) {
    const data = req.body;
    try {
      const passwordencrypt = await bcrypt.hash(data.password, 10);
      data.password = passwordencrypt
      const Create = await prisma.adminUser.create({ data: data })
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
        const Update = await prisma.adminUser.update({ data, where })
        return await responseService.apiSuccessResponse(res, null);
      } else {
        return next(new Error('Id is Required to Update Role'))
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
        const Detele = await prisma.adminUser.delete({ where })
        return await responseService.apiSuccessResponse(res, null);
      } else {
        return next(new Error('Id is Required to Delete Role'))
      }
    } catch (error) {
      next(error)
    }
  }

  async Details(req: any, res: any, next: any) {
    try {
      const { email, slug, roleId, skip, take, cursor, orderBy, order } = req.query;
      let where: any = {}
      if (email) {
        where.email = email
      }
      if (slug) {
        where.slug = slug
      }
      if (roleId) {
        where.roleId = parseInt(roleId)
      }
      const List = await prisma.adminUser.findMany({
        skip: skip ? parseInt(skip) : undefined,
        take: take ? parseInt(take) : undefined,
        cursor: cursor ? { id: parseInt(cursor) } : undefined,
        where,
        orderBy: orderBy ? { [orderBy.toString()]: order || 'asc' } : undefined,
        include: { role: true }
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