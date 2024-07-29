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
 * /api/users/subscription/add:
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
