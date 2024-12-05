const Order = require("./order.model");

//Create an order
const createAOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create an order" });
  }
};

//Get orders by user email
const getOrderByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const orders = await Order.find({ email }).sort({ createdAt: -1 });
    if (!orders) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.status(200).json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to fetch order" });
  }
};

// //Get single book
// const getSingleBook = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const book = await Book.findById(id);
//     if (!book) {
//       res.status(404).send({ message: "Book not found!" });
//     }
//     res.status(200).send(book);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Failed to fetch book" });
//   }
// };

// //Update a book
// const updateBook = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
//       new: true,
//     });
//     if (!updatedBook) {
//       res.status(404).send({ message: "Book not found!" });
//     }
//     res.status(200).send({
//       message: "Book updated successfully",
//       book: updatedBook,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Failed to update a book" });
//   }
// };

// //Detete a book
// const deleteBook = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deletedBook = await Book.findByIdAndDelete(id);
//     if (!deletedBook) {
//       res.status(404).send({ message: "Book not found!" });
//     }
//     res.status(200).send({
//       message: "Book deleted successfully",
//       book: deletedBook,
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ message: "Failed to delete a book" });
//   }
// };

module.exports = {
  createAOrder,
  getOrderByEmail,
  //   getSingleBook,
  //   updateBook,
  //   deleteBook,
};
