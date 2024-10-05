/**
 * @swagger
 * tags:
 *   name: CallAction
 *   description: CallAction Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createCallAction:
 *       type: object
 *       required:
 *         - name
 *         - subName
 *         - video_link
 *         - backgroundImage
 *         - buttonName
 *       properties:
 *         name:
 *           type: string
 *           example: title
 *         subName:
 *           type: string
 *           example: subName
 *         video_link:
 *           type: string
 *           example: video_link
 *         backgroundImage:
 *           type: string
 *           format: binary
 *         buttonName:
 *           type: string
 *           example: buttonName
 *         phonenumber:
 *           type: string
 *           example: phonenumber
 */

/**
 * @swagger
 * /api/admin/callaction/add:
 *   post:
 *     summary: Add 
 *     tags: [CallAction]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createCallAction'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/callaction/update/{id}:
 *   put:
 *     summary: Update 
 *     tags: [CallAction]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: CallAction Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createCallAction'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/callaction/delete/{id}:
 *   delete:
 *     summary: Delete 
 *     tags: [CallAction]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: CallAction Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/callaction/list:
 *   get:
 *     summary: List 
 *     tags: [CallAction]
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
