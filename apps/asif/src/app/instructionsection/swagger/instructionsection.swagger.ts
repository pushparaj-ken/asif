/**
 * @swagger
 * tags:
 *   name: InstructorSection
 *   description: InstructorSection Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createInstructorSection:
 *       type: object
 *       required:
 *         - name
 *         - description
 *       properties:
 *         name:
 *           type: string
 *           example: name
 *         description:
 *           type: string
 *           example: description
 */

/**
 * @swagger
 * /api/admin/instructorsection/add:
 *   post:
 *     summary: Add InstructorSection
 *     tags: [InstructorSection]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createInstructorSection'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/instructorsection/update/{id}:
 *   put:
 *     summary: Update InstructorSection
 *     tags: [InstructorSection]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: InstructorSection Slug
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createInstructorSection'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/instructorsection/delete/{id}:
 *   delete:
 *     summary: Delete InstructorSection
 *     tags: [InstructorSection]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: InstructorSection Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/instructorsection/list:
 *   get:
 *     summary: List InstructorSection
 *     tags: [InstructorSection]
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