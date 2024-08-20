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
}


const controller = new Controller();
export default controller;