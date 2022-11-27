const User = require("../models/User.js");
const router = require("express").Router();

//! register
router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(200).json("A new user created successfully.");
  } catch (error) {
    res.status(400).json(error);
  }
});


module.exports = router;
