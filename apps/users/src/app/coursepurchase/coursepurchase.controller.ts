import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';
import { APIResponseService } from '@asif/services'
const responseService = new APIResponseService();

export class Controller {
  async Add(req: any, res: any, next: any) {
    const data = req.body;
    try {
      if (data.dob !== '' && data.dob !== null && data.dob !== undefined) {
        data.dob = new Date(data.dob);
      }
      const Create = await prisma.coursePurchase.create({ data: data })
      return await responseService.apiSuccessResponse(res, null);
    } catch (error) {
      next(error);
    }
  }
}


const controller = new Controller();
export default controller;