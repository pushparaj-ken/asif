/**
 * @swagger
 * tags:
 *   name: Gallery
 *   description: Gallery  Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createGallerySubCategory:
 *       type: object
 *       required:
 *         - name
 *         - orderby
 *         - categoryId
 *       properties:
 *         name:
 *           type: string
 *           example: title
 *         orderby:
 *           type: number
 *           example: 1
 *         categoryId:
 *           type: number
 *           example: 1
 */

/**
 * @swagger
 * /api/admin/gallery/subcategory/add:
 *   post:
 *     summary: Add Gallery SubCategory
 *     tags: [Gallery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createGallerySubCategory'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/gallery/subcategory/update/{id}:
 *   put:
 *     summary: Update Gallery SubCategory
 *     tags: [Gallery]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Gallery Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createGallerySubCategory'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/gallery/subcategory/delete/{id}:
 *   delete:
 *     summary: Delete Gallery SubCategory
 *     tags: [Gallery]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Gallery Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/gallery/subcategory/list:
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