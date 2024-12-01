import React, { useState } from "react";
import BookCard from "../books/BookCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useFetchAllBooksQuery } from "../../redux/features/books/bookApi";

const category = [
  "Choose a genere",
  "Business",
  "Horror",
  "Fiction",
  "Adventure",
];
function TopSellers() {
  const [selectedCategory, setSelectedCategory] = useState("Choose a genere");
  const { data } = useFetchAllBooksQuery();
  const books = data || [];
  // console.log("Fetched books array:", books);

  const filteredBooks =
    Array.isArray(books) && books.length > 0
      ? selectedCategory === "Choose a genere"
        ? books
        : books.filter(
            (book) =>
              book.category?.toLowerCase() === selectedCategory.toLowerCase()
          )
      : [];

  // console.log("filteredBooks", filteredBooks);

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
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {filteredBooks.length > 0 &&
          filteredBooks.map((product) => (
            <SwiperSlide key={product._id}>
              <BookCard product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}

export default TopSellers;
