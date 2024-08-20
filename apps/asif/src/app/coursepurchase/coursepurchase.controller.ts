import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';

export class Controller {
  async Add(req: any, res: any, next: any) {
    const data = req.body;
    try {
      if (data.dob !== '' && data.dob !== null && data.dob !== undefined) {
        data.dob = new Date(data.dob);
      }
      const Create = await prisma.coursePurchase.create({ data: data })
      res.status(200).json({
        success: true,
        code: 200,
        status: "Data Saved Success",
      });
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
        if (data.dob !== '' && data.dob !== null && data.dob !== undefined) {
          data.dob = new Date(data.dob);
        }
        const Update = await prisma.coursePurchase.update({ data, where })
        res.status(200).json({
          success: true,
          code: 200,
          status: "Data Update Success",
        });
      } else {
        return next(new Error('Id is Required to Update '))
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
        const Update = await prisma.coursePurchase.update({ data, where })
        res.status(200).json({
          success: true,
          code: 200,
          status: "Data Deleted Success",
        });
      } else {
        return next(new Error('Id is Required to Delete '))
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
      const List = await prisma.coursePurchase.findMany({
        skip: skip ? parseInt(skip) : undefined,
        take: take ? parseInt(take) : undefined,
        cursor: cursor ? { id: parseInt(cursor) } : undefined,
        where,
        orderBy: orderBy ? { [orderBy.toString()]: order || 'asc' } : undefined,
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


const controller = new Controller();
export default controller;