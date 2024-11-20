import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-gray-200 py-8">
      <div className="container max-w-screen-xl mx-auto  px-4 grid  md:grid-cols-4 gap-6 ">
        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Policies and Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#privacy-policy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-gray-400">
                Terms and Conditions
              </a>
            </li>
          </ul>
          <div className="mt-6 flex space-x-4">
            <a href="#facebook" className="text-gray-400 hover:text-white">
              <FaFacebook size={24} />
            </a>
            <a href="#twitter" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="#instagram" className="text-gray-400 hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#linkedin" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
        {/* Subscribe Section */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold mb-4">
            Subscribe to our Newsletter
          </h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md border border-gray-700 bg-gray-800 text-gray-200 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary text-white py-2 px-4 rounded-r-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Book Store.
        <br /> All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
