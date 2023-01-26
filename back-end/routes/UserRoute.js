import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js";

const router = express.Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       required:
 *         - fname
 *         - lname
 *          - email
 *          - phone
 *          - gender
 *          - lname
 * 
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         fname:
 *           type: string
 *           description: The book title
 *         lname:
 *           type: string
 *           description: The book author
 * 
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */



/**
  * @swagger
  * tags:
  *   name: Users
  *   description: The User managing API
  */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Returns the list of all the Users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of the Users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */
router.get('/users', getUsers);


/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 */

router.get('/users/:id', getUserById);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new book
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Book'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       500:
 *         description: Some server error
 */
router.post('/users', createUser);

router.patch('/users/:id', updateUser);


/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 * 
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */


router.delete('/users/:id', deleteUser);

export default router;