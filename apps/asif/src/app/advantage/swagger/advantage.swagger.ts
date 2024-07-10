/**
 * @swagger
 * tags:
 *   name: Advantage
 *   description: Advantage Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createAdvantage:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - homeadvantageId
 *       properties:
 *         name:
 *           type: string
 *           example: name
 *         description:
 *           type: string
 *           example: description
 *         homeadvantageId:
 *           type: number
 *           example: 1
 */

/**
 * @swagger
 * /api/admin/advantage/add:
 *   post:
 *     summary: Add Advantage
 *     tags: [Advantage]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createAdvantage'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/advantage/update/{id}:
 *   put:
 *     summary: Update Advantage
 *     tags: [Advantage]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Advantage Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createAdvantage'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/advantage/delete/{id}:
 *   delete:
 *     summary: Delete Advantage
 *     tags: [Advantage]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Advantage Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/advantage/list:
 *   get:
 *     summary: List Advantage
 *     tags: [Advantage]
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