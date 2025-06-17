const express = require('express');
const app = express();
const { userModel, todoModel } = require('./db');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { todoRouter } = require('./routes/todo');
const { userRouter } = require('./routes/user');

mongoose.connect(process.env.MONGO_URL);
app.use(express.json());

app.use('/user', userRouter);
app.use('/todo', todoRouter);

app.listen(3000, () => console.log("Server start"));

