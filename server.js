const express = require('express');
const mysql = require('mysql');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


app.get("/", (req,res) => {
  res.send("Hello");
})

const port = 5000;

app.listen(process.env.PORT || port, () => console.log(`Server running on port ${port}`));