/**
 * @swagger
 * tags:
 *   name: News
 *   description: News Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createNews:
 *       type: object
 *       required:
 *         - image
 *         - title
 *         - description
 *         - orderby
 *       properties:
 *         title:
 *           type: string
 *           example: title
 *         image:
 *           type: string
 *           format: binary
 *         description:
 *           type: string
 *           example: description
 *         orderby:
 *           type: number
 *           example: 1
 */

/**
 * @swagger
 * /api/admin/news/add:
 *   post:
 *     summary: Add News
 *     tags: [News]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createNews'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/news/update/{id}:
 *   put:
 *     summary: Update News
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: News Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createNews'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/news/delete/{id}:
 *   delete:
 *     summary: Delete News
 *     tags: [News]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: News Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/news/list:
 *   get:
 *     summary: List News
 *     tags: [News]
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