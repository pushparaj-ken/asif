/**
 * @swagger
 * tags:
 *   name: History
 *   description: History Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createHistory:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - image_one
 *         - image_two
 *         - image_three
 *       properties:
 *         title:
 *           type: string
 *           example: title
 *         description:
 *           type: string
 *           example: shortDescription
 *         image_one:
 *           type: string
 *           format: binary
 *         image_two:
 *           type: string
 *           format: binary
 *         image_three:
 *           type: string
 *           format: binary
 *     updateHistory:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - image_one
 *         - image_two
 *         - image_three
 *       properties:
 *         title:
 *           type: string
 *           example: title
 *         description:
 *           type: string
 *           example: shortDescription
 *         image_one:
 *           type: string
 *           format: binary
 *         image_two:
 *           type: string
 *           format: binary
 *         image_three:
 *           type: string
 *           format: binary
 */

/**
 * @swagger
 * /api/admin/history/add:
 *   post:
 *     summary: Add 
 *     tags: [History]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createHistory'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/history/update/{id}:
 *   put:
 *     summary: Update 
 *     tags: [History]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: History Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/updateHistory'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/history/delete/{id}:
 *   delete:
 *     summary: Delete 
 *     tags: [History]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: History Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/history/list:
 *   get:
 *     summary: List 
 *     tags: [History]
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
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     createHistoryList:
 *       type: object
 *       required:
 *         - orderby
 *         - title
 *         - description
 *       properties:
 *         orderby:
 *           type: number
 *           example: 1
 *         title:
 *           type: string
 *           example: "title"
 *         description:
 *           type: string
 *           example: "description"
 *     updateHistoryList:
 *       type: object
 *       required:
 *         - orderby
 *         - title
 *         - description
 *       properties:
 *         orderby:
 *           type: number
 *           example: 1
 *         title:
 *           type: string
 *           example: "title"
 *         description:
 *           type: string
 *           example: "description"
 */

/**
 * @swagger
 * /api/admin/history/accordian/add:
 *   post:
 *     summary: Add 
 *     tags: [History]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createHistoryList'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/history/accordian/update/{id}:
 *   put:
 *     summary: Update 
 *     tags: [History]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: HistoryList Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateHistoryList'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/history/accordian/delete/{id}:
 *   delete:
 *     summary: Delete 
 *     tags: [History]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: HistoryList Slug
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/history/accordian/list:
 *   get:
 *     summary: List 
 *     tags: [History]
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
 *     responses:
 *       200:
 *         description: Success
 */