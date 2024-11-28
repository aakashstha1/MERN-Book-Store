const express = require("express");
const router = express.Router();
const Book = require("./book.model");

const { postABook } = require("./book.controller");

//Post a book
router.post("/create-book", postABook);

module.exports = router;
