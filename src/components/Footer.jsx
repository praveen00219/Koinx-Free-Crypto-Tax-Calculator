import { useState } from "react";
import { investmentTypeTerm } from "../utils/investTypeTerm";
import FlagSelect from "./FlagSelect";
import ISOCertified from "../assets/footerImg.png";

import {
  FaXTwitter,
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaTelegram,
  FaFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-8 pt-10 pb-6 mt-8">
      <div className="flex justify-between items-center max-w-7xl mx-auto gap-4">
        <h2 className="text-2xl font-bold">KoinX™</h2>
        <div className="flex gap-4 text-blue-400 text-xl">
          <a href="#" aria-label="Twitter">
            <FaXTwitter />
          </a>
          <a href="#" aria-label="YouTube">
            <FaYoutube />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Telegram">
            <FaTelegram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="border-t border-gray-700 my-6"></div>

      <div className="flex lg:flex-row flex-wrap justify-between items-start gap-10 max-w-7xl mx-auto">
        <div>
          <ul className="text-sm space-y-2">
            <li>Individuals and investors</li>
            <li>Tax Professionals and Accountants</li>
            <li>Exchanges and Web3 projects</li>
          </ul>
          <div className="mt-6">
            <img
              src={ISOCertified}
              alt="ISO Certified"
              className="w-24 rounded-full"
            />
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Free Tools</h3>
          <ul className="text-sm space-y-2">
            <li>Crypto Prices Live</li>
            <li>Crypto Tax Calculator</li>
            <li>Crypto Tax Saving Speculator</li>
            <li>Crypto Profit Calculator</li>
            <li>Crypto Converter</li>
            <li>Crypto Staking ROI Calculator</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Resource Center</h3>
          <ul className="text-sm space-y-2">
            <li>Crypto Tax Guides</li>
            <li>Dumb Ways To Lose Money</li>
            <li>Crypto Tax Savings Guide</li>
            <li>Blogs</li>
            <li>Crypto Buying Guides</li>
            <li>Crypto Staking Guides</li>
            <li>Crypto Mining Guides</li>
            <li>Crypto Price Predictions</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-3">Company</h3>
          <ul className="text-sm space-y-2">
            <li>About Us</li>
            <li>Backed by</li>
            <li>Media and Press</li>
            <li>
              Careers{" "}
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs ml-1">
                We're hiring
              </span>
            </li>
            <li>Security</li>
            <li>Refund Policy</li>
            <li>Brand Assets</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 my-6"></div>

      <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto gap-4">
        <p className="text-sm text-gray-400">
          © All rights reserved by Simplify Infotech Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
