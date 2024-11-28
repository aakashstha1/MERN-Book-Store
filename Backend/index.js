const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const app = express();
const connectDB = require("./db/conn");
const PORT = process.env.PORT || 5000;
const bookRoutes = require("./src/books/book.route");

//middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173/"],
    credentials: true,
  })
);

//Connection to MongoDB
connectDB();

app.use("/api/books", bookRoutes);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
