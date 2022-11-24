const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;

dotenv.config(); 

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => {
  connect();
  console.log(`Example app listening on port ${port}`);
});
