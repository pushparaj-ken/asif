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
 *     createGalleryCategory:
 *       type: object
 *       required:
 *         - name
 *         - galleryType
 *         - orderby
 *       properties:
 *         name:
 *           type: string
 *           example: title
 *         galleryType:
 *           type: string
 *           example: title
 *         orderby:
 *           type: number
 *           example: 1
 */

/**
 * @swagger
 * /api/admin/gallery/category/add:
 *   post:
 *     summary: Add Gallery Category
 *     tags: [Gallery]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createGalleryCategory'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/gallery/category/update/{id}:
 *   put:
 *     summary: Update Gallery Category
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
 *             $ref: '#/components/schemas/createGalleryCategory'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/gallery/category/delete/{id}:
 *   delete:
 *     summary: Delete Gallery Category
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
 * /api/admin/gallery/category/list:
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
 *         name: galleryType
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter by galleryType
 *     responses:
 *       200:
 *         description: Success
 */