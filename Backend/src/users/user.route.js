const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.SECRET_KEY;
const User = require("./user.model");

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await User.findOne({ username });
    if (!admin) {
      res.status(404).send({ message: "Admin not found!" });
    }
    if (admin.password !== admin.password) {
      res.status(401).send({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      JWT_KEY,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      message: "Authentication Succesfull",
      token: token,
      user: {
        username: admin.username,
        role: admin.role,
      },
    });
  } catch (error) {
    console.log("Failed to login as admin", error);
    res.status(401).send({ message: "Failed to login as admin" });
  }
});

module.exports = router;
