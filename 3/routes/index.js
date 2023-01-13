import express from 'express';
import {
  getUserById,
  getUsers, login, Register, 
} from '../controllers/Users.js';
import verifyToken from '../middleware/verifyToken.js';
import { deleteBook, getBookById, getBooks, inputBook, updateBook, } from '../controllers/Books.js';

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.get('/users/:id', verifyToken, getUserById);
router.post('/register', Register);
router.post('/login', login);

router.post('/books', verifyToken, inputBook);
router.get('/books', verifyToken, getBooks);
router.get('/books/:id', verifyToken, getBookById);
router.patch('/updateBook/:id', verifyToken, updateBook);
router.delete('/deleteBook/:id', verifyToken, deleteBook);

export default router;
