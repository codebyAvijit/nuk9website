// Footer.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white w-[90%] m-auto text-gray-500 py-10">
      <div className="container flex justify-around mx-auto px-4">
        {/* First Section */}
        <div className="flex w-[40%] flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex mb-[150px]items-center md:mb-0">
            {/* Replace 'logo.png' with your logo */}
            <img
              src="/assets/Img/logo1.webp"
              alt="Logo"
              className="w-10 h-10 mr-2"
            />
            <div>
              <h3 className="text-xl font-bold">Nuk9</h3>
              <p className="text-xl mt-5">
                At NUK 9 Deliveries are always a Top Priority Our Expertise
                guarantees 100% improvement on the client's Process, Security
                and Practices (PSP). Our Track record of extensive and exclusive
                20+ years hands-on expertise in the field of IT.
              </p>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="text-center flex flex-col items-center md:text-left">
          <h4 className="text-lg font-bold mb-2">Quick Links</h4>
          <ul className="text-xl custom-list-style">
            <li className="mb-1 mt-[20px]  hover:text-red-600">
              <a href="#">Home</a>
            </li>
            <li className="mb-1  hover:text-red-500">
              <a href="#">About Us</a>
            </li>
            <li className="mb-1  hover:text-red-500">
              <a href="#">Services</a>
            </li>
            <li className="mb-1 hover:text-red-500">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Third Section */}
        <div className="flex flex-col items-center md:text-left mb-8">
          <h4 className="text-lg text-center font-bold mb-2">Services</h4>
          <ul className="text-xl custom-list-style">
            <li className="mb-1 mt-[20px] hover:text-red-500">
              <a href="#">Service 1</a>
            </li>
            <li className="mb-1 hover:text-red-500">
              <a href="#">Service 2</a>
            </li>
            <li className="mb-1 hover:text-red-500">
              <a href="#">Service 3</a>
            </li>
          </ul>
        </div>

        {/* Fourth Section */}
        <div>
          <h4 className="text-lg font-bold mb-2">Follow Us</h4>
          <p className="text-xl mb-4 mt-[20px]">
            Connect with us on social media to stay updated.
          </p>
          <div className="flex items-center space-x-10">
            {/* Replace social media URLs with your actual social media handles */}
            <a
              href="https://www.facebook.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="x"
                className="text-black"
                style={{ fontSize: "25px" }}
              />
            </a>
            <a
              href="https://www.twitter.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="x"
                className="text-black"
                style={{ fontSize: "25px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="x"
                className="text-black"
                style={{ fontSize: "25px" }}
              />
            </a>
            <a
              href="https://www.instagram.com/yourcompany"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="x"
                className="text-black"
                style={{ fontSize: "25px" }}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-4xl">
        <p>
          &copy;NUK 9 Information Security Auditors LLP<sup>TM</sup>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
