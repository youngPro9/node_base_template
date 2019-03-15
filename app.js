const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

const port = 3000;

app.listen(port, "0.0.0.0", () => {
    console.log("Server is running on port " + port);
});