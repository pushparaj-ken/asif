/**
 * @swagger
 * tags:
 *   name: General Setting
 *   description: General Setting Management
 */


/**
 * @swagger
 * /api/users/general/list:
 *   get:
 *     summary: List General Setting
 *     tags: [General Setting]
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