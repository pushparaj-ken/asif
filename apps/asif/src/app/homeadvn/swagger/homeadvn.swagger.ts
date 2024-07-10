/**
 * @swagger
 * tags:
 *   name: HomeAdvantage
 *   description: HomeAdvantage Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createHomeAdvantage:
 *       type: object
 *       required:
 *         - name
 *         - image
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           example: name
 *         image:
 *           type: string
 *           format: binary
 *         description:
 *           type: string
 *           example: description
 */

/**
 * @swagger
 * /api/admin/homeadvn/add:
 *   post:
 *     summary: Add HomeAdvantage
 *     tags: [HomeAdvantage]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createHomeAdvantage'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/homeadvn/update/{id}:
 *   put:
 *     summary: Update HomeAdvantage
 *     tags: [HomeAdvantage]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: HomeAdvantage Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createHomeAdvantage'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/homeadvn/delete/{id}:
 *   delete:
 *     summary: Delete HomeAdvantage
 *     tags: [HomeAdvantage]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: HomeAdvantage Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/homeadvn/list:
 *   get:
 *     summary: List HomeAdvantage
 *     tags: [HomeAdvantage]
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