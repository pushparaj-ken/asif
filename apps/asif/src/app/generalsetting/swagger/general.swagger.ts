/**
 * @swagger
 * tags:
 *   name: General Setting
 *   description: General Setting Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createGeneralSetting:
 *       type: object
 *       required:
 *         - emailaddress
 *         - logo
 *         - phonenumber
 *         - address
 *         - facebook
 *         - instagram
 *         - skype
 *         - youtube
 *         - pinterest
 *         - twitter
 *       properties:
 *         emailaddress:
 *           type: string
 *           example: emailaddress
 *         logo:
 *           type: string
 *           format: binary
 *         phonenumber:
 *           type: string
 *           example: phonenumber
 *         address:
 *           type: string
 *           example: address
 *         facebook:
 *           type: string
 *           example: emailaddress
 *         instagram:
 *           type: string
 *           example: instagram
 *         skype:
 *           type: string
 *           example: skype
 *         youtube:
 *           type: string
 *           example: emailaddress
 *         pinterest:
 *           type: string
 *           example: pinterest
 *         twitter:
 *           type: string
 *           example: twitter
 */

/**
 * @swagger
 * /api/admin/general/add:
 *   post:
 *     summary: Add General Setting
 *     tags: [General Setting]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createGeneralSetting'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/general/update/{id}:
 *   put:
 *     summary: Update General Setting
 *     tags: [General Setting]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: General Setting Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createGeneralSetting'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/general/delete/{id}:
 *   delete:
 *     summary: Delete General Setting
 *     tags: [General Setting]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: General Setting Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/general/list:
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