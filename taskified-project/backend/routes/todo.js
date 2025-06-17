const { Router } = require('express');
const todoRouter = Router();
const { todoModel } = require('../../db');
const e = require('express');

todoRouter.post('/create', async (req, res) => {
    const { title, description, category, done } = req.body;

    const todo = await todoModel.create({
        title,
        description,
        category,
        done
    });

    console.log(todo);

    if(todo) {
        res.json({
            message: "Todo created"
        })
    } else {
        res.status(403).json({
            message: "Invalid credentials"
        })
    }
});

todoRouter.get('/', (req, res) => {

});

module.exports = {
    todoRouter,
}

