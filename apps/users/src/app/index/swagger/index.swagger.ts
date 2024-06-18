/**
 * @swagger
 * tags:
 *   name: Banner
 *   description: Banner Management
 */

/**
 * @swagger
 * /api/users/index/list:
 *   get:
 *     summary: List 
 *     tags: [Banner]
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