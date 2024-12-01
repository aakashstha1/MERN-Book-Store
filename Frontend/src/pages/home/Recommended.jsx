import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BookCard from "../books/BookCard";
import { useFetchAllBooksQuery } from "../../redux/features/books/bookApi";

function Recommended() {
  const { data: books = [] } = useFetchAllBooksQuery();

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Recommended For You</h2>
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
        {books.length > 0 ? (
          books.slice(8, 16).map((product) => (
            <SwiperSlide key={product._id}>
              <BookCard product={product} />
            </SwiperSlide>
          ))
        ) : (
          <div>No recommended books found.</div>
        )}
      </Swiper>
    </div>
  );
}

export default Recommended;
