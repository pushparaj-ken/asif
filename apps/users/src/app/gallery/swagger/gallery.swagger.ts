/**
 * @swagger
 * tags:
 *   name: Gallery
 *   description: Gallery  Management
 */

/**
 * @swagger
 * /api/users/gallery/list:
 *   get:
 *     summary: List Gallery Category
 *     tags: [Gallery]
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
 *         name: subcategoryId
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by subcategory
 *       - in: query
 *         name: galleryType
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by galleryType
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/users/gallery/category/list:
 *   get:
 *     summary: List Gallery Category
 *     tags: [Gallery]
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


/**
 * @swagger
 * /api/users/gallery/subcategory/list:
 *   get:
 *     summary: List Gallery SubCategory
 *     tags: [Gallery]
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
 *         name: categoryId
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by Category
 *     responses:
 *       200:
 *         description: Success
 */