/**
 * @swagger
 * tags:
 *   name: Category
 *   description: Category Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createCategory:
 *       type: object
 *       required:
 *         - name
 *         - categoryImage
 *         - tabId
 *         - orderby
 *       properties:
 *         name:
 *           type: string
 *           example: title
 *         categoryImage:
 *           type: string
 *           format: binary
 *         tabId:
 *           type: string
 *           example: Tab Name
 *         orderby:
 *           type: number
 *           example: 1
 */

/**
 * @swagger
 * /api/admin/category/add:
 *   post:
 *     summary: Add 
 *     tags: [Category]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createCategory'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/category/update/{id}:
 *   put:
 *     summary: Update 
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createCategory'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/category/delete/{id}:
 *   delete:
 *     summary: Delete 
 *     tags: [Category]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Category Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/category/list:
 *   get:
 *     summary: List 
 *     tags: [Category]
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
 *         description: Filter by name
 *       - in: query
 *         name: tabId
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by tabId
 *     responses:
 *       200:
 *         description: Success
 */
