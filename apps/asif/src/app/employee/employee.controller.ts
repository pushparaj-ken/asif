import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import _ from 'lodash';
import { upload } from "@asif/services";
const foldername = "Employee";

export class Controller {

  async Add(req: any, res: any, next: any) {
    const data = req.body;
    const files = req.files;
    try {
      if (files.image) {
        let { buffer, originalname } = files.image[0];
        let image = await upload(buffer, originalname, foldername);
        console.log(image.Location);
        data.image = image.Location;
      } else {
        data.image = data.image;
      }
      data.orderby = parseInt(data.orderby);
      const Create = await prisma.employee.create({ data: data })
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
        if (files.image) {
          let { buffer, originalname } = files.image[0];
          let image = await upload(buffer, originalname, foldername);
          console.log(image.Location);
          data.image = image.Location;
        } else {
          data.image = data.image;
        }
        data.orderby = parseInt(data.orderby);
        const Upadte = await prisma.employee.update({ data, where })
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
        const Detele = await prisma.employee.delete({ where })
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
      const { id, slug, name, skip, take, cursor, orderBy, order } = req.query;
      let where: any = {}
      if (slug) {
        where.slug = slug
      }
      if (name) {
        where.name = { contains: name.toString() }
      }

      const List = await prisma.employee.findMany({
        skip: skip ? parseInt(skip) : undefined,
        take: take ? parseInt(take) : undefined,
        cursor: cursor ? { id: parseInt(cursor) } : undefined,
        where,
        orderBy: orderBy ? { [orderBy.toString()]: order || 'asc' } : undefined,
        include: { partenaires_image: true }
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

  async AddPartenairesImage(req: any, res: any, next: any) {
    const data = req.body;
    const files = req.files;

    try {
      data.employeeId = parseInt(data.employeeId);
      if (files.image) {
        let { buffer, originalname } = files.image[0];
        let image = await upload(buffer, originalname, foldername);
        data.image = image.Location;
      } else {
        data.image = data.image;
      }
      data.orderby = parseInt(data.orderby);
      const Create = await prisma.partenairesImage.create({ data: data })
      res.status(200).json({
        success: true,
        code: 200,
        status: "Data Saved Success",
      });
    } catch (error) {
      console.log("🚀 ~ Controller ~ AddPartenairesImage ~ error:", error.stack)
      next(error);
    }
  }

  async UpadtePartenairesImage(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    const files = req.files;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        data.employeeId = parseInt(data.employeeId);
        if (files.image) {
          let { buffer, originalname } = files.image[0];
          let image = await upload(buffer, originalname, foldername);
          data.image = image.Location;
        } else {
          data.image = data.image;
        }
        data.orderby = parseInt(data.orderby);
        const where = { slug: params.id }
        const Update = await prisma.partenairesImage.update({ data: data, where })
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

  async DeletePartenairesImage(req: any, res: any, next: any) {
    const data = req.body;
    const params = req.params;
    try {
      if (params.id !== '' && params.id !== null && params.id !== undefined) {
        const where = { slug: params.id }
        const Detele = await prisma.partenairesImage.delete({ where })
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


}


const controller = new Controller();
export default controller;