/**
 * @swagger
 * tags:
 *   name: Index
 *   description: Index Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     sendemail:
 *       type: object
 *       required:
 *         - toemail
 *       properties:
 *         toemail:
 *           type: string
 *           example: pushparaj7396@gmail.com
 */

/**
 * @swagger
 * /api/users/index/list:
 *   get:
 *     summary: List 
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by name
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/tab:
 *   get:
 *     summary: List Tab
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by Name
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/category:
 *   get:
 *     summary: List Category
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by name
 *       - in: query
 *         name: tabId
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by tabId
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/course:
 *   get:
 *     summary: List Course
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by name
 *       - in: query
 *         name: CategoryID
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by CategoryID
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/aboutus:
 *   get:
 *     summary: List AboutUs
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by name
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/callaction:
 *   get:
 *     summary: List CallAction 
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by name
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/homeadvantage:
 *   get:
 *     summary: List HomeAdvantage
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by Name
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/advantage:
 *   get:
 *     summary: List Advantage
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by Name
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/coursecount:
 *   get:
 *     summary: List CourseCount
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by Name
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/instructorsection:
 *   get:
 *     summary: List InstructorSection
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by Name
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/instructor:
 *   get:
 *     summary: List Instructor
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by Name
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/newsletter:
 *   get:
 *     summary: List NewsLetter
 *     tags: [Index]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by Name
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/index/sendmail:
 *   post:
 *     summary: Send Email
 *     tags: [Index]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/sendemail'
 *     responses:
 *       200:
 *         description: Success
 */