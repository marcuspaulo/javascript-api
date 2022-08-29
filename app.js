const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Application started on port 3000");
});

app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/repo", (req, res) => {
    res.end('Repo: ' + req.query.name);
});