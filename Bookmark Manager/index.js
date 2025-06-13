const express = require('express');
const app = express();

app.use(express.json());

const bookmarks = [];

app.post('/', (req, res) => {
    const url = req.body.url
    const category = req.body.category

    bookmarks.push({
        url: url,
        category: category
    });

    console.log(bookmarks);

    res.json({
        message: "Bookmark added"
    })
});



app.listen(3000, () => console.log("Server Started"));

