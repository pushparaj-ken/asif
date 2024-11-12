import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';
import { upload } from "@asif/services";
const foldername = "generalSetting";
import { APIResponseService } from '@asif/services'
const responseService = new APIResponseService();

export class Controller {

  async Details(req: any, res: any, next: any) {
    try {
      const { id, slug, name, skip, take, cursor, orderBy, tabId, order } = req.query;
      let where: any = {}
      if (slug) {
        where.slug = slug
      }
      if (name) {
        where.name = { contains: name.toString() }
      }
      if (tabId) {
        where.tabId = parseInt(tabId)
      }
      const List = await prisma.generalSetting.findMany({
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