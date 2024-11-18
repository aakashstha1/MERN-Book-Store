import React, { useEffect, useState } from "react";
import BookCard from "../books/BookCard";

const category = [
  "Choose a genere",
  "Business",
  "Horror",
  "Science",
  "Fiction",
  "Adventure",
];
function TopSellers() {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Choose a genere");

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const filteredBooks =
    selectedCategory === "Choose a genere"
      ? books
      : books.filter(
          (book) => book.category === selectedCategory.toLowerCase()
        );

  console.log(filteredBooks);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Seller</h2>
      {/* Category  */}
      <div className="mb-8 flex items-center">
        <select
          onChange={(e) => {
            setSelectedCategory(e.target.value);
          }}
          id="category"
          name="category"
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
        >
          {category.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      {filteredBooks.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
}

export default TopSellers;
