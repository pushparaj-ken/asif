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
 * /api/users/contactus/add:
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
