const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 3000

app.listen(port, () => {
    console.log(`Application started and Listening on http://localhost:${ port }`);
});

app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/app.html");
});
