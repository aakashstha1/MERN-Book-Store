const Book = require("./book.model");

//Post a book
const postABook = async (req, res) => {
  try {
    const newBook = new Book(req.body); // Use the Mongoose model to create a new book
    await newBook.save();
    res.status(200).send({
      message: "Book posted successfully",
      book: newBook,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Failed to create book", error });
  }
};

//Get all books
const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

//Get single book
const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).send({ message: "Book not found!" });
    }
    res.status(200).send(book);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to fetch book" });
  }
};

//Update a book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedBook) {
      res.status(404).send({ message: "Book not found!" });
    }
    res.status(200).send({
      message: "Book updated successfully",
      book: updatedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to update a book" });
  }
};

//Detete a book
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).send({ message: "Book not found!" });
    }
    res.status(200).send({
      message: "Book deleted successfully",
      book: deletedBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Failed to delete a book" });
  }
};

module.exports = {
  postABook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};
