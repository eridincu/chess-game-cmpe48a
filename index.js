const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT | 80;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/frontend"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log("Server started listening...");
});