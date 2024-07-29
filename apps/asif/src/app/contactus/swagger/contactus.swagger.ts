/**
 * @swagger
 * tags:
 *   name: ContactUs
 *   description: ContactUs Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createContactUs:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - phonenumber
 *         - subject
 *         - message
 *       properties:
 *         name:
 *           type: string
 *           example: name
 *         email:
 *           type: string
 *           example: email
 *         phonenumber:
 *           type: string
 *           example: phonenumber
 *         subject:
 *           type: string
 *           example: subject
 *         message:
 *           type: string
 *           example: message
 */

/**
 * @swagger
 * /api/admin/contactus/add:
 *   post:
 *     summary: Add ContactUs
 *     tags: [ContactUs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createContactUs'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/contactus/update/{id}:
 *   put:
 *     summary: Update ContactUs
 *     tags: [ContactUs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ContactUs Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createContactUs'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/contactus/delete/{id}:
 *   delete:
 *     summary: Delete ContactUs
 *     tags: [ContactUs]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ContactUs Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/contactus/list:
 *   get:
 *     summary: List ContactUs
 *     tags: [ContactUs]
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
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by status
 *     responses:
 *       200:
 *         description: Success
 */