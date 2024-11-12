/**
 * @swagger
 * tags:
 *   name: Employee
 *   description: Employee Management
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     createEmployee:
 *       type: object
 *       required:
 *         - name
 *         - image
 *         - description
 *         - planing_description
 *         - thumimg
 *         - thumtitle
 *         - thumdescription
 *         - thumbuttonname
 *         - thumbuttonlink
 *         - thumprice
 *         - thumoldprice
 *         - orderby
 *       properties:
 *         name:
 *           type: string
 *           example: title
 *         image:
 *           type: string
 *           format: binary
 *           example: "image"
 *         description:
 *           type: string
 *           example: buttonName
 *         planing_description:
 *           type: string
 *           example: link
 *         thumimg:
 *           type: string
 *           example: thumimg
 *         thumtitle:
 *           type: string
 *           example: thumtitle
 *         thumdescription:
 *           type: string
 *           example: thumdescription
 *         thumbuttonname:
 *           type: string
 *           example: thumbuttonname
 *         thumbuttonlink:
 *           type: string
 *           example: thumbuttonlink
 *         thumprice:
 *           type: string
 *           example: thumprice
 *         thumoldprice:
 *           type: string
 *           example: thumoldprice
 *         orderby:
 *           type: string
 *           example: 1
 *     updateEmployee:
 *       type: object
 *       required:
 *         - name
 *         - image
 *         - description
 *         - planing_description
 *         - thumimg
 *         - thumtitle
 *         - thumdescription
 *         - thumbuttonname
 *         - thumbuttonlink
 *         - thumprice
 *         - thumoldprice
 *         - orderby
 *       properties:
 *         name:
 *           type: string
 *           example: title
 *         image:
 *           type: string
 *           format: binary
 *           example: "image"
 *         description:
 *           type: string
 *           example: buttonName
 *         planing_description:
 *           type: string
 *           example: link
 *         thumimg:
 *           type: string
 *           example: thumimg
 *         thumtitle:
 *           type: string
 *           example: thumtitle
 *         thumdescription:
 *           type: string
 *           example: thumdescription
 *         thumbuttonname:
 *           type: string
 *           example: thumbuttonname
 *         thumbuttonlink:
 *           type: string
 *           example: thumbuttonlink
 *         thumprice:
 *           type: string
 *           example: thumprice
 *         thumoldprice:
 *           type: string
 *           example: thumoldprice
 *         orderby:
 *           type: string
 *           example: 1
 */

/**
 * @swagger
 * /api/admin/employee/add:
 *   post:
 *     summary: Add 
 *     tags: [Employee]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createEmployee'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/employee/update/{id}:
 *   put:
 *     summary: Update 
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Employee Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/updateEmployee'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/employee/delete/{id}:
 *   delete:
 *     summary: Delete 
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Employee Slug
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/employee/list:
 *   get:
 *     summary: List 
 *     tags: [Employee]
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
 *     createEmployeeImage:
 *       type: object
 *       required:
 *         - image
 *         - orderby
 *         - url
 *         - employeeId
 *       properties:
 *         employeeId:
 *           type: number
 *           example: 1
 *         image:
 *           type: string
 *           format: binary
 *           example: "image"
 *         orderby:
 *           type: number
 *           example: 1
 *         url:
 *           type: string
 *           example: "www.google.com"
 *     updateEmployeeImage:
 *       type: object
 *       required:
 *         - image
 *         - orderby
 *         - url
 *         - employeeId
 *       properties:
 *         employeeId:
 *           type: number
 *           example: 1
 *         image:
 *           type: string
 *           format: binary
 *           example: "image"
 *         orderby:
 *           type: number
 *           example: 1
 *         url:
 *           type: string
 *           example: "www.google.com"
 */

/**
 * @swagger
 * /api/admin/employee/partenairesimage/add:
 *   post:
 *     summary: Add 
 *     tags: [Employee]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/createEmployeeImage'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/employee/partenairesimage/update/{id}:
 *   put:
 *     summary: Update 
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: EmployeeImage Slug
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/updateEmployeeImage'
 *     responses:
 *       200:
 *         description: Success
 */


/**
 * @swagger
 * /api/admin/employee/partenairesimage/delete/{id}:
 *   delete:
 *     summary: Delete 
 *     tags: [Employee]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: EmployeeImage Slug
 *     responses:
 *       200:
 *         description: Success
 */