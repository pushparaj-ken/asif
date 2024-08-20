import { S3Client } from "@aws-sdk/client-s3";

export const s3 = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
  }
});

interface FileObject {
  [key: string]: FileObject | string[];
}

export function processObjects(objects: { Key: string }[]): FileObject[] {
  const result: FileObject = {};

  objects.forEach(obj => {
    const parts = obj.Key.split('/').filter(part => part.length > 0);
    let currentLevel: FileObject = result;

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        if (!currentLevel['files']) {
          currentLevel['files'] = [];
        }
        (currentLevel['files'] as string[]).push(part);
      } else {
        if (!currentLevel[part]) {
          currentLevel[part] = {};
        }
        currentLevel = currentLevel[part] as FileObject;
      }
    });
  });

  return convertToDesiredFormat(result);
}

function convertToDesiredFormat(fileObject: FileObject): any[] {
  return Object.entries(fileObject).map(([key, value]) => {
    if (key === 'files') {

      const filteredFiles = (value as string[]).filter(
        (file) => !['empty.txt'].includes(file)
      );
      const filteredFilesnew = (filteredFiles as string[]).filter(file => {

        return file.includes('.') && !file.endsWith('/');
      });
      return filteredFilesnew.length > 0 ? filteredFilesnew : undefined;
    } else {

      const folderContent = convertToDesiredFormat(value as FileObject);
      return { [key]: folderContent.length > 0 ? folderContent.flat() : [] };
    }
  }).filter(item => item !== undefined);
}
