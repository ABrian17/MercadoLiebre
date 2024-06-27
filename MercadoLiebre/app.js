const express = require("express");

const path = require("path");

const app = express();

app.use(express.static("./public"));


app.get("/", (req, res) => {
    res.sendFile(path.resolve("views/home.html"));
})
app.get("/login", (req, res) => {
    res.sendFile(path.resolve("views/login.html"));
})
app.get("/register", (req, res) => {
    res.sendFile(path.resolve("views/register.html"));
})

app.listen(3030, (err) => {
    err ?
        console.error("se rompio todo papu")
        :
        console.log("sv andando en el puerto 3030");
});