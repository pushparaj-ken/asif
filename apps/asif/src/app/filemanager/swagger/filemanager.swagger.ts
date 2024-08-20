/**
 * @swagger
 * tags:
 *   name: File Manager
 *   description: File Manager Management
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     createFileManager:
 *       type: object
 *       required:
 *         - foldername
 *       properties:
 *         foldername:
 *           type: string
 *           example: sample
 *     commonimageFilemanager:
 *       type: object
 *       required:
 *         - image
 *       properties:
 *         image:
 *           type: string
 *           format: binary
 *         foldername:
 *           type: string
 *           example: sample
 *     deletefolder:
 *       type: object
 *       required:
 *         - foldername
 *       properties:
 *         foldername:
 *           type: string
 *           example: sample
 *     deletefile:
 *       type: object
 *       required:
 *         - filekey
 *       properties:
 *         filekey:
 *           type: string
 *           example: "/065eec1b0f-a95f-4243-8370-a7cbfef63276.png"
 */

/**
 * @swagger
 * /api/admin/filemanager/createfolder:
 *   post:
 *     summary: Add File Manager
 *     tags: [File Manager]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createFileManager'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/filemanager/deletefolder:
 *   delete:
 *     summary: Add File Manager
 *     tags: [File Manager]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/deletefolder'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/filemanager/deletefile:
 *   delete:
 *     summary: Add File Manager
 *     tags: [File Manager]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/deletefile'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/filemanager/commonupload:
 *   post:
 *     summary: Add File Manager
 *     tags: [File Manager]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/commonimageFilemanager'
 *     responses:
 *       200:
 *         description: Success
 */

/**
 * @swagger
 * /api/admin/filemanager/list:
 *   get:
 *     summary: List File Manager
 *     tags: [File Manager]
 *     responses:
 *       200:
 *         description: Success
 */