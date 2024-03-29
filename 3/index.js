import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/Database.js';
import router from './routes/index.js';
import Users from './models/UserModel.js';
import Books from './models/BookModel.js';

dotenv.config();

const app = express();

try {
  await db.authenticate();
  console.log('Database Connected....');
  await Users.sync();
  await Books.sync();
} catch (error) {
  console.error(error);
}

app.use(cors({ credential: true, origin: '*' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server running at port 5000'));
