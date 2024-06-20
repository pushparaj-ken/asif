import express, { Request, Response, NextFunction } from 'express';
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import { errorHandler } from "@asif/utils";
import { setupSwagger } from '@asif/services';
import AuthAdmin from "./app/auth/auth.routes";
import RoleAdmin from "./app/role/role.routes";
import UserAdmin from "./app/adminusers/adminusers.routes";
import BannerAdmin from "./app/banner/banner.routes";

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

setupSwagger(app);

app.use(cors({
  origin: ['http://localhost:3000', 'http://admin.getstek.com', 'http://getstek.com']
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.use('/api/admin', AuthAdmin);
app.use('/api/admin/role', RoleAdmin)
app.use('/api/admin/user', UserAdmin)
app.use('/api/admin/banner', BannerAdmin)

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  errorHandler(err, req, res, next);
});

app.use(function (req: Request, res: Response, next: NextFunction) {
  return res.status(404).json({
    success: false,
    code: 404,
    message: 'Not Found',
    timestamp: new Date()
  });
});


app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err); // Log the error for debugging
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    code: statusCode,
    message: err.message || 'Internal Server Error',
    timestamp: new Date()
  });
});


app.listen(port, () => {
  console.log(`http://localhost:${port}/api/admin`)
});


module.exports = app;
