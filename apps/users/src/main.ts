import express, { Request, Response, NextFunction } from 'express';
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import { errorHandler } from "@asif/utils";
import { setupSwaggerUsers } from '@asif/services';
import dotenv from 'dotenv';
dotenv.config();

import IndexRouter from "./app/index/index.routes";
import SubscriptionRouter from "./app/subscription/subscription.routes";
import ContactUsRouter from "./app/contactus/contactus.routes";

const port = process.env.PORT_USER ? Number(process.env.PORT_USER) : 3000;

const app = express();

setupSwaggerUsers(app);

app.use(cors({
  origin: ['http://localhost:3000', 'http://admin.getstek.com', 'http://getstek.com', 'https://admin.getstek.com', 'https://getstek.com']
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});


app.use('/api/users/index', IndexRouter);
app.use('/api/users/subscription', SubscriptionRouter)
app.use('/api/users/contactus', ContactUsRouter)


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
  console.log(`http://localhost:${port}/api/users`)
});


module.exports = app;
