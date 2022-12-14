require("dotenv").config()

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());

const posts = [
    {
        username : "Bharat",
        title : "Post 1"
    },
    {
        username : "Kyle",
        title : "Post 2"
    },
]

function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];

    if(token === null) return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function(err , user){
    console.log("🚀 ~ file: server.js:28 ~ jwt.verify ~ user", user);

        if(err) return res.sendStatus(403);

        req.user = user;

        next();

    });
}

app.get("/posts", authenticateToken, (req, res) => {

    res.json(posts.filter(post => post.username === req.user.name));
})



app.listen(8015);

