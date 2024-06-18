
import { NextFunction } from 'express';

export function utils(): string {
  return 'utils';
}


export function errorHandler(err: any, req: any, res: any, next: any): string {
  const statusCode = err.statusCode || 500;

  if (statusCode === 401) {
    return res.status(401).json({
      success: false,
      code: 401,
      status: err.message || 'Unauthorized',
      timestamp: new Date()
    });
  }

  if (statusCode === 404) {
    return res.status(404).json({
      success: false,
      code: 404,
      status: err.message || 'NotFoundError: Not Found',
      timestamp: new Date()
    });
  }

  if (statusCode === 200) {
    return res.status(200).json({
      success: true,
      code: 200,
      status: err.message,
      timestamp: new Date()
    });
  }

  res.status(statusCode).json({

    success: false,
    code: statusCode,
    message: err.message || 'Internal Server Error',
    timestamp: new Date()
  });
};


export function catchAsync(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch((err: any) => next(err));
  };
}