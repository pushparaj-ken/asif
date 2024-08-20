/**
 * @swagger
 * tags:
 *   name: Course Purchase
 *   description: Course Purchase Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createCoursePurchase:
 *       type: object
 *       required:
 *         - name
 *         - dob
 *         - phone
 *         - city
 *         - activity
 *       properties:
 *         name:
 *           type: string
 *           example: name
 *         dob:
 *           type: string
 *           example: "2024-07-08"
 *         phone:
 *           type: string
 *           example: phonenumber
 *         city:
 *           type: string
 *           example: subject
 *         activity:
 *           type: string
 *           example: message
 */

/**
 * @swagger
 * /api/admin/cpurchase/add:
 *   post:
 *     summary: Add Course Purchase
 *     tags: [Course Purchase]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createCoursePurchase'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/cpurchase/update/{id}:
 *   put:
 *     summary: Update Course Purchase
 *     tags: [Course Purchase]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Course Purchage Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createCoursePurchase'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/cpurchase/delete/{id}:
 *   delete:
 *     summary: Delete Course Purchase
 *     tags: [Course Purchase]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ContactUs Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/cpurchase/list:
 *   get:
 *     summary: List Course Purchase
 *     tags: [Course Purchase]
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