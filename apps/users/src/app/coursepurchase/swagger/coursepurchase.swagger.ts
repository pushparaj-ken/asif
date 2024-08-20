/**
 * @swagger
 * tags:
 *   name: Course Purchase
 *   description: Course Purchase Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createCoursePurchase:
 *       type: object
 *       required:
 *         - name
 *         - dob
 *         - phone
 *         - city
 *         - activity
 *       properties:
 *         name:
 *           type: string
 *           example: name
 *         dob:
 *           type: string
 *           example: "2024-07-08"
 *         phone:
 *           type: string
 *           example: phonenumber
 *         city:
 *           type: string
 *           example: subject
 *         activity:
 *           type: string
 *           example: message
 */

/**
 * @swagger
 * /api/users/cpurchase/add:
 *   post:
 *     summary: Add Course Purchase
 *     tags: [Course Purchase]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createCoursePurchase'
 *     responses:
 *       200:
 *         description: Success
 */

