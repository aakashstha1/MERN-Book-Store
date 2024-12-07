const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const connectDB = require("./db/conn");
const PORT = process.env.PORT || 5000;

//Routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const userRoutes = require("./src/users/user.route");
const adminRoutes = require("./src/stats/admin.stats");
//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

//Connection to MongoDB
connectDB();

//API's endpoint
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/admin", adminRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
