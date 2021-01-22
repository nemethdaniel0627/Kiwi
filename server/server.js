const path = require('path');
const axios = require('axios');
const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.get("/pelda", (req,res) => {
  console.log("get");
  res.json({greet: "Anyád"});
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
