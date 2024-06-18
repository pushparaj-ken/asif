/**
 * @swagger
 * tags:
 *   name: Admin Users
 *   description: AdminUsers Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createAdminUsers:
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
 *           example: 3
 *     updateAdminUsers:
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
 *           example: 3
 */

/**
 * @swagger
 * /api/admin/user/add:
 *   post:
 *     summary: Add AdminUsers
 *     tags: [Admin Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createAdminUsers'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/user/update/{id}:
 *   put:
 *     summary: Update AdminUsers
 *     tags: [Admin Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Admin Users Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateAdminUsers'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/user/delete/{id}:
 *   delete:
 *     summary: Delete AdminUsers
 *     tags: [Admin Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Admin Users Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/user/list:
 *   get:
 *     summary: List AdminUsers
 *     tags: [Admin Users]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by email
 *       - in: query
 *         name: roleId
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by roleId
 *     responses:
 *       200:
 *         description: Success
 */