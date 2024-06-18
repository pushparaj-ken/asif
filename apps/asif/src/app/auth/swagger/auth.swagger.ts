/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     AuthLogin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           example: sadmin@gmail.com
 *         password:
 *           type: string
 *           example: 12345678
 *     AuthRegister:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - roleId
 *       properties:
 *         email:
 *           type: string
 *           example: sadmin@gmail.com
 *         password:
 *           type: string
 *           example: 12345678
 *         roleId:
 *           type: number
 *           example: 1
 */

/**
 * @swagger
 * /api/admin/login:
 *   post:
 *     summary: Login
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthLogin'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/register:
 *   post:
 *     summary: Register
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AuthRegister'
 *     responses:
 *       200:
 *         description: Success
 */