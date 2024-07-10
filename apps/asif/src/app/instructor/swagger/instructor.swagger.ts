/**
 * @swagger
 * tags:
 *   name: Instructor
 *   description: Instructor Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createInstructor:
 *       type: object
 *       required:
 *         - name
 *         - instructorImage
 *         - instructorSectionId
 *         - position
 *         - email
 *         - phone
 *         - address
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           example: name
 *         instructorImage:
 *           type: string
 *           format: binary
 *         instructorSectionId:
 *           type: number
 *           example: 1
 *         position:
 *           type: string
 *           example: position
 *         email:
 *           type: string
 *           example: email
 *         phone:
 *           type: string
 *           example: phone
 *         address:
 *           type: string
 *           example: address
 *         description:
 *           type: string
 *           example: description
 */

/**
 * @swagger
 * /api/admin/instructor/add:
 *   post:
 *     summary: Add Instructor
 *     tags: [Instructor]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createInstructor'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/instructor/update/{id}:
 *   put:
 *     summary: Update Instructor
 *     tags: [Instructor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Instructor Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createInstructor'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/instructor/delete/{id}:
 *   delete:
 *     summary: Delete Instructor
 *     tags: [Instructor]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Instructor Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/instructor/list:
 *   get:
 *     summary: List Instructor
 *     tags: [Instructor]
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