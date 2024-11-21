import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
function BookCard({ product }) {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className=" rounded-lg transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4">
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <img
            src={`${getImgUrl(product?.coverImage)}`}
            alt={product?.title}
            className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
          />
        </div>

        <div>
          <Link to={`/books/${product?._id}`}>
            <h3 className="text-md font-semibold hover:text-blue-600 mb-3">
              {product?.title}
            </h3>
          </Link>
          <p className="text-sm text-gray-600 mb-5">
            {product?.description.length > 80
              ? `${product?.description.slice(0, 80)}...`
              : product?.description}
          </p>
          <p className="font-medium mb-5">
            ${product?.newPrice}{" "}
            <span className="line-through font-normal ml-2">
              ${product?.oldPrice}
            </span>
          </p>
          <button
            onClick={() => handleAddToCart(product)}
            className="btn-cart flex items-center gap-3 "
          >
            <FiShoppingCart className="size-5" />
            <span className="text-sm">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
