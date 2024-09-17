/**
 * @swagger
 * tags:
 *   name: CustomPage
 *   description: CustomPage Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createCustomPage:
 *       type: object
 *       required:
 *         - title
 *         - link
 *         - image
 *       properties:
 *         title:
 *           type: string
 *           example: title
 *         link:
 *           type: string
 *           example: description
 *         image:
 *           type: string
 *           example: button
 */

/**
 * @swagger
 * /api/admin/custom-page/add:
 *   post:
 *     summary: Add 
 *     tags: [CustomPage]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createCustomPage'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/custom-page/update/{id}:
 *   put:
 *     summary: Update 
 *     tags: [CustomPage]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: CustomPage Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createCustomPage'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/custom-page/delete/{id}:
 *   delete:
 *     summary: Delete 
 *     tags: [CustomPage]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: CustomPage Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/custom-page/list:
 *   get:
 *     summary: List 
 *     tags: [CustomPage]
 *     parameters:
 *       - in: query
 *         name: slug
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by slug
 *       - in: query
 *         name: link
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by link
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by name
 *     responses:
 *       200:
 *         description: Success
 */
