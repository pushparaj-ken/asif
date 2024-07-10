/**
 * @swagger
 * tags:
 *   name: Course
 *   description: Course Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createCourse:
 *       type: object
 *       required:
 *         - name
 *         - courseImage
 *         - coursethumbImage
 *         - courseTiming
 *         - benefits
 *         - button_name
 *         - button_link
 *         - categoryId
 *         - orderby
 *       properties:
 *         name:
 *           type: string
 *           example: title
 *         courseImage:
 *           type: string
 *           format: binary
 *         coursethumbImage:
 *           type: string
 *           format: binary
 *         courseTiming:
 *           type: string
 *           example: courseTiming
 *         benefits:
 *           type: string
 *           example: benefits
 *         button_name:
 *           type: string
 *           example: button_name
 *         button_link:
 *           type: string
 *           example: button_link
 *         categoryId:
 *           type: string
 *           example: Category Name
 *         orderby:
 *           type: number
 *           example: 1
 */

/**
 * @swagger
 * /api/admin/course/add:
 *   post:
 *     summary: Add 
 *     tags: [Course]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createCourse'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/course/update/{id}:
 *   put:
 *     summary: Update 
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Course Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createCourse'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/course/delete/{id}:
 *   delete:
 *     summary: Delete 
 *     tags: [Course]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Course Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/course/list:
 *   get:
 *     summary: List 
 *     tags: [Course]
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
