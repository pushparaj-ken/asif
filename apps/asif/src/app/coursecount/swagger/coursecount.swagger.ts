/**
 * @swagger
 * tags:
 *   name: CourseCount
 *   description: CourseCount Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createCourseCount:
 *       type: object
 *       required:
 *         - name
 *         - icon_image
 *         - count
 *       properties:
 *         name:
 *           type: string
 *           example: name
 *         icon_image:
 *           type: string
 *           format: binary
 *         count:
 *           type: string
 *           example: description
 */

/**
 * @swagger
 * /api/admin/coursecount/add:
 *   post:
 *     summary: Add CourseCount
 *     tags: [CourseCount]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createCourseCount'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/coursecount/update/{id}:
 *   put:
 *     summary: Update CourseCount
 *     tags: [CourseCount]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: CourseCount Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createCourseCount'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/coursecount/delete/{id}:
 *   delete:
 *     summary: Delete CourseCount
 *     tags: [CourseCount]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: CourseCount Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/coursecount/list:
 *   get:
 *     summary: List CourseCount
 *     tags: [CourseCount]
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