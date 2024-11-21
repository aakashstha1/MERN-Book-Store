import React, { useEffect, useRef, useState } from "react";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineHeart } from "react-icons/hi";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import avatarImg from "../assets/avatar.png";
import { useSelector } from "react-redux";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Orders",
    href: "/order",
  },
  {
    name: "Cart Page",
    href: "/cart",
  },
  {
    name: "Check Out",
    href: "/checkout",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const user = true;
  // Counter for item in cart
  const cartItems = useSelector((state) => state.cart.cartItems) || [];
  console.log(cartItems);
  // Close dropdown when click outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <header className="max-w-screen-xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        {/* left side */}
        <div className="flex items-center md:gap-16 gap-4">
          <Link to={"/"}>
            <HiMiniBars3CenterLeft className="size-6" />
          </Link>
          {/* Search bar  */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="search here..."
              className="bg-[#EAEAEA] w-full py-1  px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>

        {/* right side  */}
        <div className="relative flex items-center md:space-x-5 space-x-3">
          <div ref={dropdownRef}>
            {user ? (
              <>
                <button onClick={() => setIsOpen(!isOpen)}>
                  <img
                    src={avatarImg}
                    alt=""
                    className={`size-7 rounded-full  ${
                      user ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </button>
                {/*  show dropdown  */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {navigation.map((item) => (
                        <li key={item.name} onClick={() => setIsOpen(false)}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm hover:bg-gray-400"
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to={"/login"}>
                <HiOutlineUser className="size-6" />
              </Link>
            )}
          </div>
          <button className="sm:block hidden">
            <HiOutlineHeart className="size-6" />
          </button>
          <Link
            to={"/cart"}
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md"
          >
            <IoCartOutline className="size-6" />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
