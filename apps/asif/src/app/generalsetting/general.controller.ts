import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';
import { upload } from "@asif/services";
const foldername = "generalSetting";
import { APIResponseService } from '@asif/services'
const responseService = new APIResponseService();

export class Controller {

  async Add(req: any, res: any, next: any) {
    const data = req.body;
    const files = req.files;
    try {
      if (files.logo) {
        let { buffer, originalname } = files.logo[0];
        let image = await upload(buffer, originalname, foldername);
        console.log(image.Location);
        data.logo = image.Location;
      } else {
        data.logo = data.logo;
      }


      const Create = await prisma.generalSetting.create({ data: data })
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
        if (files.logo) {
          let { buffer, originalname } = files.logo[0];
          let image = await upload(buffer, originalname, foldername);
          console.log(image.Location);
          data.logo = image.Location;
        } else {
          data.logo = data.logo;
        }

        const Update = await prisma.generalSetting.update({ data, where })
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
        const Detele = await prisma.generalSetting.delete({ where })
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