import { S3Client, PutObjectCommand, PutObjectCommandInput } from "@aws-sdk/client-s3";
import Sharp from "sharp";
import { ImageExtensions } from "@asif/services";
import { v4 as uuidv4 } from 'uuid';


// Amazon SES configuration
const config = {
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY!
  }
};

const s3Client = new S3Client(config);

export async function upload(file: string, fileName: string, foldername: string): Promise<any> {
  try {
    const epochtimeseconds = uuidv4();
    fileName = fileName.replace(".", `${epochtimeseconds}.`);
    const splitFileName = fileName.split(".");
    const extensionOfFile = splitFileName[1];

    let params: PutObjectCommandInput = {
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: `${foldername}/${fileName}`,
      Body: '',
    };

    if (ImageExtensions.includes(extensionOfFile)) {
      try {
        const buffer = await Sharp(file)
          .webp({ quality: 20 })
          .resize(null, null, { fit: Sharp.fit.inside, withoutEnlargement: true })
          .toBuffer();
        params.Body = buffer;
      } catch (error) {
        throw new Error(`Image processing error: ${error}`);
      }
    } else {
      params.Body = file;
    }

    try {
      await s3Client.send(new PutObjectCommand(params));
      const fileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${params.Key}`;
      console.log("🚀 ~ upload ~ fileUrl:", fileUrl)
      return { Location: fileUrl };
    } catch (error) {
      throw new Error(`S3 upload error: ${error}`);
    }
  } catch (error) {
    throw new Error(error);
  }
}


export async function uploadImages(file: string, fileName: string, Username: string, fieldname: string): Promise<any> {
  const splitFileName1 = fileName.split(".");
  const extensionOfFile1 = splitFileName1[1];
  const epochtimeseconds = uuidv4();
  fileName = `${Username}_${fieldname}_${epochtimeseconds}.${extensionOfFile1}`;

  let params: PutObjectCommandInput = {
    Bucket: process.env.AWS_S3_BUCKET_NAME!,
    Key: fileName,
    Body: '',
  };

  if (ImageExtensions.includes(extensionOfFile1)) {
    try {
      const buffer = await Sharp(file)
        .webp({ quality: 20 })
        .resize(null, null, { fit: Sharp.fit.inside, withoutEnlargement: true })
        .toBuffer();
      params.Body = buffer;
    } catch (error) {
      throw new Error(`Image processing error: ${error}`);
    }
  } else {
    params.Body = file;
  }

  try {
    await s3Client.send(new PutObjectCommand(params));
    const fileUrl = `https://${process.env.AWS_S3_BUCKET_NAME}.s3.${process.env.AWS_S3_REGION}.amazonaws.com/${params.Key}`;
    return { Location: fileUrl };
  } catch (error) {
    throw new Error(`S3 upload error: ${error}`);
  }
}


export async function uploadArray(files: any[], foldername: string): Promise<boolean> {
  const uploadPromises = files.map(async (file) => {
    const params: PutObjectCommandInput = {
      Bucket: process.env.AWS_S3_BUCKET_NAME!,
      Key: `${foldername}/${file.originalname}`,
      Body: '',
    };

    try {
      const buffer = await Sharp(file)
        .webp({ quality: 20 })
        .resize(null, null, { fit: Sharp.fit.inside, withoutEnlargement: true })
        .toBuffer();
      params.Body = buffer;
    } catch (error) {
      throw new Error(`Image processing error: ${error}`);
    }

    try {
      await s3Client.send(new PutObjectCommand(params));
    } catch (error) {
      throw new Error(`S3 upload error: ${error}`);
    }
  });

  try {
    await Promise.all(uploadPromises);
    return true;
  } catch (error) {
    throw new Error(`Failed to upload one or more files: ${error}`);
  }
}