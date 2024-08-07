/**
 * @swagger
 * tags:
 *   name: Planning
 *   description: Planning Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createPlanning:
 *       type: object
 *       required:
 *         - plan_title
 *         - course_id
 *         - orderby
 *       properties:
 *         plan_title:
 *           type: string
 *           example: name
 *         course_id:
 *           type: number
 *           example: 1
 *         orderby:
 *           type: number
 *           example: 1
 */

/**
 * @swagger
 * /api/admin/planning/add:
 *   post:
 *     summary: Add Planning
 *     tags: [Planning]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createPlanning'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/planning/update/{id}:
 *   put:
 *     summary: Update Planning
 *     tags: [Planning]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Planning Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createPlanning'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/planning/delete/{id}:
 *   delete:
 *     summary: Delete Planning
 *     tags: [Planning]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Planning Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/planning/list:
 *   get:
 *     summary: List Planning
 *     tags: [Planning]
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