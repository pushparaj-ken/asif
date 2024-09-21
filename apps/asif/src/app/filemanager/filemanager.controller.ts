import { PrismaService, Prisma } from '@asif/prisma-client';
const prisma = new PrismaService();
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import { s3, processObjects } from "@asif/services";
import { upload, createFolder, deleteFolder, deleteFile } from "@asif/services";
import { APIResponseService } from '@asif/services'
const responseService = new APIResponseService();

export class Controller {

  async listAllObjects(req, res, next) {
    try {
      const bucketName = process.env.AWS_S3_BUCKET_NAME;
      if (!bucketName) {
        throw new Error('S3 bucket name is not defined in environment variables.');
      }

      let isTruncated = true;
      let continuationToken;
      const objects = [];

      while (isTruncated) {
        const params = {
          Bucket: bucketName,
          ContinuationToken: continuationToken
        };

        const command = new ListObjectsV2Command(params);
        const response = await s3.send(command);

        objects.push(...response.Contents);

        isTruncated = response.IsTruncated;
        continuationToken = response.NextContinuationToken;
      }

      const structuredData = processObjects(objects);

      return await responseService.apiSuccessResponse(res, null);
    } catch (error) {
      console.error('Error listing objects:', error);
      next(error);
    }
  }

  async CreateFolder(req: any, res: any, next: any) {
    const data = req.body;
    try {
      if (data.foldername) {
        const foldername = data.foldername;
        let folder = await createFolder(foldername);
        return await responseService.apiSuccessResponse(res, null);
      } else {
        return await responseService.apiFailResponse(res, 'Id is Required');
      }
    } catch (error) {
      next(error);
    }
  }

  async DeleteFolder(req: any, res: any, next: any) {
    const data = req.body;
    try {
      if (data.foldername) {
        const foldername = data.foldername;
        let folder = await deleteFolder(foldername);
        return await responseService.apiSuccessResponse(res, null);
      } else {
        return await responseService.apiFailResponse(res, 'Id is Required');
      }
    } catch (error) {
      next(error);
    }
  }


  async DeleteFile(req: any, res: any, next: any) {
    const data = req.body;
    try {
      if (data.filekey) {
        const filekey = data.filekey;
        let folder = await deleteFile(filekey);
        return await responseService.apiSuccessResponse(res, null);
      } else {
        return await responseService.apiFailResponse(res, 'Id is Required');
      }
    } catch (error) {
      next(error);
    }
  }

  async CommonUpload(req: any, res: any, next: any) {
    const data = req.body;
    const files = req.files;
    try {
      if (files.image) {
        let { buffer, originalname } = files.image[0];
        let image = await upload(buffer, originalname, data.foldername);
        console.log(image.Location);
        data.image = image.Location;
        return await responseService.apiSuccessResponse(res, null);
      } else {
        return await responseService.apiFailResponse(res, 'Image is Required');
      }
    } catch (error) {
      next(error);
    }
  }

}

const controller = new Controller();
export default controller;
