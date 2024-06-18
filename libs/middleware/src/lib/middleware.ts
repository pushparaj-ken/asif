import { Express, NextFunction, Request, Response } from 'express';
import { passport } from './passport';

export async function middleware(req: Request, res: Response, next: NextFunction) {
  passport.authenticate('jwt', { session: false }, async (err: any, user: any, info: any) => {
    try {
      if (err || !user) {
        let error = info.message ? info.message : 'Unauthorized';
        return res.status(401).json({
          success: false,
          code: 401,
          status: error,
          timestamp: new Date()
        });
      }
      req['user'] = user;
      next();
    } catch (error) {
      next(error);
    }
  })(req, res, next);
}
