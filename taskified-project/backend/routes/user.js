require('dotenv').config();
const { Router } = require('express');
const { userModel } = require('../../db');
const { jwt } = require('jsonwebtoken');
const userRouter = Router();

userRouter.post('/signup', async (req, res) => {
    const { email, password } = req.body

    const user = await userModel.create({
        email,
        password
    });

    console.log(user);

    if(user) {
        res.json({
            message: "signin succeded"
        });
    } else {
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }

});

userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email,
        password
    })

    if(user) {
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: 'Incorrect crednetials'
        })
    }
});

module.exports = {
    userRouter,
}

