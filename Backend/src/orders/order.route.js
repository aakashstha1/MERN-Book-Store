const express = require("express");
const router = express.Router();
const Order = require("./order.model");

const { createAOrder, getOrderByEmail } = require("./order.controller");

//Create an Order
router.post("/", createAOrder);

//Get orders by user email  
router.get("/email/:email", getOrderByEmail);

// //Get a single book
// router.get("/:id", getSingleBook);

// //Update a book
// router.put("/edit/:id", updateBook);

// //Delete a book
// router.delete("/:id", deleteBook);

module.exports = router;
