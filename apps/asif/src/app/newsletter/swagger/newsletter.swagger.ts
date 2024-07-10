/**
 * @swagger
 * tags:
 *   name: NewsLetter
 *   description: NewsLetter Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createNewsLetter:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           example: name
 *         description:
 *           type: string
 *           example: description
 */

/**
 * @swagger
 * /api/admin/newsletter/add:
 *   post:
 *     summary: Add NewsLetter
 *     tags: [NewsLetter]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createNewsLetter'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/newsletter/update/{id}:
 *   put:
 *     summary: Update NewsLetter
 *     tags: [NewsLetter]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: NewsLetter Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createNewsLetter'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/newsletter/delete/{id}:
 *   delete:
 *     summary: Delete NewsLetter
 *     tags: [NewsLetter]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: NewsLetter Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/newsletter/list:
 *   get:
 *     summary: List NewsLetter
 *     tags: [NewsLetter]
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