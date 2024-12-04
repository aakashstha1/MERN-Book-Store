const express = require("express");
const router = express.Router();
const Order = require("./order.model");

const { createAOrder } = require("./order.controller");

//Post a book
router.post("/", createAOrder);

// //Get all books
// router.get("/", getAllBooks);

// //Get a single book
// router.get("/:id", getSingleBook);

// //Update a book
// router.put("/edit/:id", updateBook);

// //Delete a book
// router.delete("/:id", deleteBook);

module.exports = router;
