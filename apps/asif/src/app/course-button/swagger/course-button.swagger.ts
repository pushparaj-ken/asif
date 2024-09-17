/**
 * @swagger
 * tags:
 *   name: Course
 *   description: Button Course Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createButtonCourse:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - course_id
 *         - orderby
 *       properties:
 *         title:
 *           type: string
 *           example: name
 *         description:
 *           type: string
 *           example: name
 *         course_id:
 *           type: number
 *           example: 1
 *         orderby:
 *           type: number
 *           example: 1
 */

/**
 * @swagger
 * /api/admin/course/course-button/add:
 *   post:
 *     summary: Add Button Course
 *     tags: [Course]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createButtonCourse'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/course/course-button/update/{id}:
 *   put:
 *     summary: Update Button Course
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Button Course Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createButtonCourse'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/course/course-button/delete/{id}:
 *   delete:
 *     summary: Delete Button Course
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Button Course Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/course/course-button/list:
 *   get:
 *     summary: List Button Course
 *     tags: [Course]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: course_id
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by course_id
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