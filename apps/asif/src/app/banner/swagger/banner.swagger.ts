/**
 * @swagger
 * tags:
 *   name: Banner
 *   description: Banner Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createBanner:
 *       type: object
 *       required:
 *         - title
 *         - shortDescription
 *         - buttonName
 *         - link
 *       properties:
 *         title:
 *           type: string
 *           example: title
 *         shortDescription:
 *           type: string
 *           example: shortDescription
 *         buttonName:
 *           type: string
 *           example: buttonName
 *         link:
 *           type: string
 *           example: link
 *         youtubelink:
 *           type: string
 *           example: link
 *         count:
 *           type: string
 *           example: count
 *         count_title:
 *           type: string
 *           example: count_title
 *     updateBanner:
 *       type: object
 *       required:
 *         - title
 *         - shortDescription
 *         - buttonName
 *         - link
 *       properties:
 *         title:
 *           type: string
 *           example: title
 *         shortDescription:
 *           type: string
 *           example: shortDescription
 *         buttonName:
 *           type: string
 *           example: buttonName
 *         link:
 *           type: string
 *           example: link
 *         youtubelink:
 *           type: string
 *           example: link
 */

/**
 * @swagger
 * /api/admin/banner/add:
 *   post:
 *     summary: Add 
 *     tags: [Banner]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createBanner'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/banner/update/{id}:
 *   put:
 *     summary: Update 
 *     tags: [Banner]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Banner Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/updateBanner'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/banner/delete/{id}:
 *   delete:
 *     summary: Delete 
 *     tags: [Banner]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Banner Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/banner/list:
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

/**
 * @swagger
 * components:
 *   schemas:
 *     createBannerImage:
 *       type: object
 *       required:
 *         - bannerId
 *         - url
 *       properties:
 *         bannerId:
 *           type: number
 *           example: 1
 *         image:
 *           type: string
 *           format: binary
 *           example: "image"
 *     updateBannerImage:
 *       type: object
 *       required:
 *         - bannerId
 *         - url
 *       properties:
 *         bannerId:
 *           type: number
 *           example: 1
 *         image:
 *           type: string
 *           format: binary
 *           example: "image"
 */

/**
 * @swagger
 * /api/admin/banner/image/add:
 *   post:
 *     summary: Add 
 *     tags: [Banner]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createBannerImage'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/banner/image/update/{id}:
 *   put:
 *     summary: Update 
 *     tags: [Banner]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: BannerImage Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/updateBannerImage'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/banner/image/delete/{id}:
 *   delete:
 *     summary: Delete 
 *     tags: [Banner]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: BannerImage Slug
 *     responses:
 *       200:
 *         description: Success
 */