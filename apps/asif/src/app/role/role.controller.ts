import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';

export class RoleController {
  async AddRole(req: any, res: any, next: any) {
    const data = req.body;
    try {
      const Create = await prisma.role.create({ data: data })
      res.status(200).json({
        success: true,
        code: 200,
        status: "Data Saved Success",
      });
    } catch (error) {
      next(error);
    }
  }

  async UpadteRole(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Role = await prisma.role.update({ data, where })
        res.status(200).json({
          success: true,
          code: 200,
          status: "Data Update Success",
        });
      } else {
        return next(new Error('Id is Required to Update Role'))
      }

    } catch (error) {
      next(error)
    }
  }

  async DeleteRole(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Detele = await prisma.role.delete({ where })
        res.status(200).json({
          success: true,
          code: 200,
          status: "Data Deleted Success",
        });
      } else {
        return next(new Error('Id is Required to Delete Role'))
      }
    } catch (error) {
      next(error)
    }
  }

  async RoleDetails(req: any, res: any, next: any) {
    try {
      const { id, slug, name, skip, take, cursor, orderBy } = req.query;
      let where: any = {}
      if (slug) {
        where.slug = slug
      }
      if (name) {
        where.name = { contains: name.toString() }
      }
      const List = await prisma.role.findMany({
        skip: skip ? parseInt(skip) : undefined,
        take: take ? parseInt(take) : undefined,
        cursor: cursor ? { id: parseInt(cursor) } : undefined,
        where,
        orderBy: orderBy ? { [orderBy.toString()]: 'asc' } : undefined,
      });
      if (List.length > 0) {
        res.status(200).json({
          success: true,
          code: 200,
          status: "Data Reterived Success",
          Data: List
        });
      } else {
        return next(new Error('No Data Found'))
      }

    } catch (error) {
      next(error)
    }
  }
}


const roleController = new RoleController();
export default roleController;