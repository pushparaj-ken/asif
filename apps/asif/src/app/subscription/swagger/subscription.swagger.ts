/**
 * @swagger
 * tags:
 *   name: Subscription
 *   description: Subscription Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createSubscription:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           example: email
 */

/**
 * @swagger
 * /api/admin/subscription/add:
 *   post:
 *     summary: Add Subscription
 *     tags: [Subscription]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSubscription'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/subscription/update/{id}:
 *   put:
 *     summary: Update Subscription
 *     tags: [Subscription]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Subscription Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createSubscription'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/subscription/delete/{id}:
 *   delete:
 *     summary: Delete Subscription
 *     tags: [Subscription]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Subscription Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/subscription/list:
 *   get:
 *     summary: List Subscription
 *     tags: [Subscription]
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
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by status
 *     responses:
 *       200:
 *         description: Success
 */