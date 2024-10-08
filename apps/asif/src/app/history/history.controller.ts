import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';
import { upload } from "@asif/services";
const foldername = "History";
import { APIResponseService } from '@asif/services'
const responseService = new APIResponseService();

export class Controller {

  async Add(req: any, res: any, next: any) {
    const data = req.body;
    const files = req.files;
    try {
      if (files.image_one) {
        let { buffer, originalname } = files.image_one[0];
        let image = await upload(buffer, originalname, foldername);
        console.log(image.Location);
        data.image_one = image.Location;
      } else {
        data.image_one = data.image_one;
      }

      if (files.image_two) {
        let { buffer, originalname } = files.image_two[0];
        let image = await upload(buffer, originalname, foldername);
        console.log(image.Location);
        data.image_two = image.Location;
      } else {
        data.image_two = data.image_two;
      }

      if (files.image_three) {
        let { buffer, originalname } = files.image_three[0];
        let image = await upload(buffer, originalname, foldername);
        console.log(image.Location);
        data.image_three = image.Location;
      } else {
        data.image_three = data.image_three;
      }

      const Create = await prisma.history.create({ data: data })
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
        if (files.image_one) {
          let { buffer, originalname } = files.image_one[0];
          let image = await upload(buffer, originalname, foldername);
          console.log(image.Location);
          data.image_one = image.Location;
        } else {
          data.image_one = data.image_one;
        }

        if (files.image_two) {
          let { buffer, originalname } = files.image_two[0];
          let image = await upload(buffer, originalname, foldername);
          console.log(image.Location);
          data.image_two = image.Location;
        } else {
          data.image_two = data.image_two;
        }

        if (files.image_three) {
          let { buffer, originalname } = files.image_three[0];
          let image = await upload(buffer, originalname, foldername);
          console.log(image.Location);
          data.image_three = image.Location;
        } else {
          data.image_three = data.image_three;
        }
        const Update = await prisma.history.update({ data, where })
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
        const Detele = await prisma.history.delete({ where })
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
      const List = await prisma.history.findMany({
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

  async AddHistoryList(req: any, res: any, next: any) {
    const data = req.body;

    try {
      const Create = await prisma.historyAccordian.create({ data: data })
      return await responseService.apiSuccessResponse(res, null);
    } catch (error) {
      next(error);
    }
  }

  async UpadteHistoryList(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Update = await prisma.historyAccordian.update({ data: data, where })
        return await responseService.apiSuccessResponse(res, null);
      } else {
        return await responseService.apiFailResponse(res, 'Id is Required');
      }

    } catch (error) {
      next(error)
    }
  }

  async DeleteHistoryList(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Detele = await prisma.historyAccordian.delete({ where })
        return await responseService.apiSuccessResponse(res, null);
      } else {
        return await responseService.apiFailResponse(res, 'Id is Required');
      }
    } catch (error) {
      next(error)
    }
  }

  async DetailsHistoryList(req: any, res: any, next: any) {
    try {
      const { id, slug, name, skip, take, cursor, orderBy, order } = req.query;
      let where: any = {}
      if (slug) {
        where.slug = slug
      }
      if (name) {
        where.name = { contains: name.toString() }
      }

      const List = await prisma.historyAccordian.findMany({
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