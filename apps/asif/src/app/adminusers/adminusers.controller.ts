import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';

export class AdminUsersController {
  async AddAdminUsers(req: any, res: any, next: any) {
    const data = req.body;
    try {
      const Create = await prisma.adminUser.create({ data: data })
      res.status(200).json({
        success: true,
        code: 200,
        status: "Data Saved Success",
      });
    } catch (error) {
      next(error);
    }
  }

  async UpadteAdminUsers(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Update = await prisma.adminUser.update({ data, where })
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

  async DeleteAdminUsers(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Detele = await prisma.adminUser.delete({ where })
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

  async AdminUsersDetails(req: any, res: any, next: any) {
    try {
      const { email, slug, roleId, skip, take, cursor, orderBy } = req.query;
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
        orderBy: orderBy ? { [orderBy.toString()]: 'asc' } : undefined,
        include: { role: true }
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


const adminUsersController = new AdminUsersController();
export default adminUsersController;