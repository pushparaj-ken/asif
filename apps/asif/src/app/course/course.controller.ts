import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';
import { upload } from "@asif/services";
const foldername = "Course";
import { APIResponseService } from '@asif/services'
const responseService = new APIResponseService();

export class Controller {

  async Add(req: any, res: any, next: any) {
    const data = req.body;
    const files = req.files;
    try {
      data.categoryId = parseInt(data.categoryId);
      data.orderby = parseInt(data.orderby);
      if (data.popular_course != undefined && data.popular_course != null && data.popular_course != '') {
        data.popular_course = data.popular_course === "true" ? true : false
      }
      if (files.courseImage) {
        let { buffer, originalname } = files.courseImage[0];
        let image = await upload(buffer, originalname, foldername);
        console.log(image.Location);
        data.courseImage = image.Location;
      } else {
        data.courseImage = data.courseImage;
      }

      if (files.coursethumbImage) {
        let { buffer, originalname } = files.coursethumbImage[0];
        let image = await upload(buffer, originalname, foldername);
        console.log(image.Location);
        data.coursethumbImage = image.Location;
      } else {
        data.coursethumbImage = data.coursethumbImage;
      }
      const Create = await prisma.course.create({ data: data })
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
        if (data.categoryId != undefined && data.categoryId != null && data.categoryId != '') {
          data.categoryId = parseInt(data.categoryId);
        }
        if (data.orderby != undefined && data.orderby != null && data.orderby != '') {
          data.orderby = parseInt(data.orderby);
        }
        if (data.popular_course != undefined && data.popular_course != null && data.popular_course != '') {
          data.popular_course = data.popular_course === "true" ? true : false
        }
        const where = { slug: params.id }
        if (files.courseImage) {
          let { buffer, originalname } = files.courseImage[0];
          let image = await upload(buffer, originalname, foldername);
          console.log(image.Location);
          data.courseImage = image.Location;
        } else {
          data.courseImage = data.courseImage;
        }

        if (files.coursethumbImage) {
          let { buffer, originalname } = files.coursethumbImage[0];
          let image = await upload(buffer, originalname, foldername);
          console.log(image.Location);
          data.coursethumbImage = image.Location;
        } else {
          data.coursethumbImage = data.coursethumbImage;
        }
        const Update = await prisma.course.update({ data, where })
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
        const Detele = await prisma.course.delete({ where })
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
      const { id, slug, name, skip, take, cursor, orderBy, CategoryID, order, popular_course } = req.query;
      let where: any = {}
      if (slug) {
        where.slug = slug
      }
      if (name) {
        where.name = { contains: name.toString() }
      }
      if (CategoryID) {
        where.category = { id: parseInt(CategoryID) }
      }
      if (popular_course) {
        where.popular_course = popular_course === "true" ? true : false
      }

      console.log("🚀 ~ IndexController ~ Course ~ where:", where)
      const List = await prisma.course.findMany({
        skip: skip ? parseInt(skip) : undefined,
        take: take ? parseInt(take) : undefined,
        cursor: cursor ? { id: parseInt(cursor) } : undefined,
        where,
        orderBy: orderBy ? { [orderBy.toString()]: order || 'asc' } : undefined,
        include: { category: true, planning: true, buttonCourse: true }
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