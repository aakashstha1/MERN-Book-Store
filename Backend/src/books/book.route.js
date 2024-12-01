const express = require("express");
const router = express.Router();
const Book = require("./book.model");

const {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
} = require("./book.controller");

//Post a book
router.post("/create-book", postABook);

//Get all books
router.get("/", getAllBooks);

//Get a single book
router.get("/:id", getSingleBook);

//Update a book
router.put("/edit/:id", updateBook);

//Delete a book
router.delete("/:id", deleteBook);

module.exports = router;
