/**
 * @swagger
 * tags:
 *   name: Tab
 *   description: Tab Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createTab:
 *       type: object
 *       required:
 *         - name
 *         - orderby
 *       properties:
 *         name:
 *           type: string
 *           example: Tab 1
 *         orderby:
 *           type: number
 *           example: 1
 *     updateTab:
 *       type: object
 *       required:
 *         - name
 *         - orderby
 *       properties:
 *         name:
 *           type: string
 *           example: Tab 2
 *         orderby:
 *           type: number
 *           example: 1
 */

/**
 * @swagger
 * /api/admin/tab/add:
 *   post:
 *     summary: Add Tab
 *     tags: [Tab]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createTab'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/tab/update/{id}:
 *   put:
 *     summary: Update Tab
 *     tags: [Tab]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Tab Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateTab'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/tab/delete/{id}:
 *   delete:
 *     summary: Delete Tab
 *     tags: [Tab]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Tab Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/tab/list:
 *   get:
 *     summary: List Tab
 *     tags: [Tab]
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