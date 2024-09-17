import express from 'express';
const router = express.Router();
import IndexController from "./index.controller";

router.get('/list', IndexController.IndexDetails);

router.get('/tab', IndexController.Tab);

router.get('/category', IndexController.Category);

router.get('/course', IndexController.Course);

router.get('/aboutus', IndexController.Aboutus);

router.get('/callaction', IndexController.CallToAction);

router.get('/homeadvantage', IndexController.HomeAdvantage);

router.get('/advantagelist', IndexController.AdvantageList);

router.get('/coursecount', IndexController.CourseCount);

router.get('/instructorsection', IndexController.InstructorSection);

router.get('/instructor', IndexController.Instructor);

router.get('/newsletter', IndexController.NewsLetter);

router.post('/sendmail', IndexController.SendMail);

router.get('/history', IndexController.History);

router.get('/accordian', IndexController.Accordian);

router.get('/employee', IndexController.Employee);

router.get('/news', IndexController.NewsDetails);

router.get('/course-button', IndexController.CourseButton);

router.get('/custom-page', IndexController.CustomPage);

export default router;

