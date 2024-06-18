/**
 * @swagger
 * tags:
 *   name: Role
 *   description: Role Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createRole:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           example: Super Admin
 *     updateRole:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *           example: Super Admin
 */

/**
 * @swagger
 * /api/admin/role/add:
 *   post:
 *     summary: Add Role
 *     tags: [Role]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createRole'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/role/update/{id}:
 *   put:
 *     summary: Update Role
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Role Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateRole'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/role/delete/{id}:
 *   delete:
 *     summary: Delete Role
 *     tags: [Role]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Role Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/role/list:
 *   get:
 *     summary: List Role
 *     tags: [Role]
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