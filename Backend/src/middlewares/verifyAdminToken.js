const jwt = require("jsonwebtoken");
const JWT_KEY = process.env.SECRET_KEY;

const verifyAdminToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided" });
  }
  jwt.verify(token, JWT_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid credentials" });
    }
    req.user = user;
    next();
  });
};

module.exports = verifyAdminToken;
