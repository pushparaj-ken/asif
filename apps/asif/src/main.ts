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
import TabAdmin from "./app/tab/tab.routes";
import CategoryAdmin from "./app/category/category.routes";
import CourseAdmin from "./app/course/course.routes";
import AboutusAdmin from "./app/aboutus/aboutus.routes";
import CallActionAdmin from "./app/callaction/callaction.routes";
import HomeadvnAdmin from "./app/homeadvn/homeadvn.routes";
import AdvantageAdmin from "./app/advantage/advantage.routes";
import CourseCountAdmin from "./app/coursecount/coursecount.routes";
import InstructorSectionAdmin from "./app/instructionsection/instructionsection.routes";
import InstructorAdmin from "./app/instructor/instructor.routes";
import NewsLetterAdmin from "./app/newsletter/newsletter.routes";
import HistoryAdmin from "./app/history/history.routes";
import GeneralAdmin from "./app/generalsetting/general.routes";
import SubscriptionAdmin from "./app/subscription/subscription.routes";
import ContactUsAdmin from "./app/contactus/contactus.routes";
import PlanningAdmin from "./app/planning/planning.routes";
import EmployeeAdmin from "./app/employee/employee.routes";
//import FilemanagerAdmin from "./app/filemanager/filemanager.routes";
import NewsAdmin from "./app/news/news.routes";


import dotenv from 'dotenv';
dotenv.config();

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
import bcrypt from "bcryptjs";

app.use('/api/admin', AuthAdmin);
app.use('/api/admin/role', RoleAdmin)
app.use('/api/admin/user', UserAdmin)
app.use('/api/admin/banner', BannerAdmin)
app.use('/api/admin/tab', TabAdmin)
app.use('/api/admin/category', CategoryAdmin)
app.use('/api/admin/course', CourseAdmin)
app.use('/api/admin/aboutus', AboutusAdmin)
app.use('/api/admin/callaction', CallActionAdmin)
app.use('/api/admin/homeadvn', HomeadvnAdmin)
app.use('/api/admin/advantage', AdvantageAdmin)
app.use('/api/admin/coursecount', CourseCountAdmin)
app.use('/api/admin/instructorsection', InstructorSectionAdmin)
app.use('/api/admin/instructor', InstructorAdmin)
app.use('/api/admin/newsletter', NewsLetterAdmin)
app.use('/api/admin/history', HistoryAdmin)
app.use('/api/admin/general', GeneralAdmin)
app.use('/api/admin/subscription', SubscriptionAdmin)
app.use('/api/admin/contactus', ContactUsAdmin)
app.use('/api/admin/planning', PlanningAdmin)
app.use('/api/admin/employee', EmployeeAdmin)
//app.use('/api/admin/filemanager', FilemanagerAdmin)
app.use('/api/admin/news', NewsAdmin)


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
