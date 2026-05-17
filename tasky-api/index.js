import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks';
import './db';
// other imports
import cors from 'cors';
import usersRouter from './api/users';

dotenv.config();

const errHandler = (err, req, res, next) => {
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).json({ error: 'Something went wrong!' });
  }
  res.status(500).json({ error: err.message });
};

const app = express();

const port = process.env.PORT;

// Enable CORS for all requests
app.use(cors());


app.use(express.static('public'));

app.use(express.json());

app.use('/api/tasks', tasksRouter);
//Users router
app.use('/api/users', usersRouter);



app.use(errHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
