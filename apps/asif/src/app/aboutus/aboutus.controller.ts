import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';
import { upload } from "@asif/services";
const foldername = "Course";

export class Controller {

  async Add(req: any, res: any, next: any) {
    const data = req.body;
    const files = req.files;
    try {
      if (files.imageOne) {
        let { buffer, originalname } = files.imageOne[0];
        let image = await upload(buffer, originalname, foldername);
        console.log(image.Location);
        data.imageOne = image.Location;
      } else {
        data.imageOne = data.imageOne;
      }

      if (files.imageTwo) {
        let { buffer, originalname } = files.imageTwo[0];
        let image = await upload(buffer, originalname, foldername);
        console.log(image.Location);
        data.imageTwo = image.Location;
      } else {
        data.imageOne = data.imageOne;
      }

      if (files.imageThree) {
        let { buffer, originalname } = files.imageThree[0];
        let image = await upload(buffer, originalname, foldername);
        console.log(image.Location);
        data.imageThree = image.Location;
      } else {
        data.imageThree = data.imageThree;
      }

      const Create = await prisma.aboutus.create({ data: data })
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
    const files = req.files;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        if (files.imageOne) {
          let { buffer, originalname } = files.imageOne[0];
          let image = await upload(buffer, originalname, foldername);
          console.log(image.Location);
          data.imageOne = image.Location;
        } else {
          data.imageOne = data.imageOne;
        }

        if (files.imageTwo) {
          let { buffer, originalname } = files.imageTwo[0];
          let image = await upload(buffer, originalname, foldername);
          console.log(image.Location);
          data.imageTwo = image.Location;
        } else {
          data.imageTwo = data.imageTwo;
        }

        if (files.imageThree) {
          let { buffer, originalname } = files.imageThree[0];
          let image = await upload(buffer, originalname, foldername);
          console.log(image.Location);
          data.imageThree = image.Location;
        } else {
          data.imageThree = data.imageThree;
        }
        const Update = await prisma.aboutus.update({ data, where })
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

  async Delete(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Detele = await prisma.aboutus.delete({ where })
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
      const List = await prisma.aboutus.findMany({
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