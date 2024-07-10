/**
 * @swagger
 * tags:
 *   name: AboutUs
 *   description: AboutUs Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createAboutUs:
 *       type: object
 *       required:
 *         - name
 *         - imageOne
 *         - imageTwo
 *         - imageThree
 *         - description
 *         - button
 *       properties:
 *         name:
 *           type: string
 *           example: title
 *         imageOne:
 *           type: string
 *           format: binary
 *         imageTwo:
 *           type: string
 *           format: binary
 *         imageThree:
 *           type: string
 *           format: binary
 *         description:
 *           type: string
 *           example: description
 *         button:
 *           type: string
 *           example: button
 */

/**
 * @swagger
 * /api/admin/aboutus/add:
 *   post:
 *     summary: Add 
 *     tags: [AboutUs]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createAboutUs'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/aboutus/update/{id}:
 *   put:
 *     summary: Update 
 *     tags: [AboutUs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: AboutUs Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createAboutUs'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/aboutus/delete/{id}:
 *   delete:
 *     summary: Delete 
 *     tags: [AboutUs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: AboutUs Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/aboutus/list:
 *   get:
 *     summary: List 
 *     tags: [AboutUs]
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
