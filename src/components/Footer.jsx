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
    <footer className="bg-black text-white p-8 mt-8">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <h2 className="text-lg font-bold">KoinX™</h2>
        <div className="flex space-x-4 text-blue-400 text-2xl">
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
      <hr className="m-5" />
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h3 className="font-bold text-lg">Crypto Taxes for</h3>
          <ul className="text-sm mt-2 space-y-2">
            <li>Individuals and investors</li>
            <li>Tax Professionals and Accountants</li>
            <li>Exchanges and Web3 projects</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Free Tools</h3>
          <ul className="text-sm mt-2 space-y-2">
            <li>Crypto Prices Live</li>
            <li>Crypto Tax Calculator</li>
            <li>Crypto Tax Saving Speculator</li>
            <li>Crypto Profit Calculator</li>
            <li>Crypto Converter</li>
            <li>Crypto Staking ROI Calculator</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Resource Center</h3>
          <ul className="text-sm mt-2 space-y-2">
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
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="text-sm mt-2 space-y-2">
            <li>About Us</li>
            <li>Backed by</li>
            <li>Media and Press</li>
            <li>
              Careers{" "}
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs">
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
      <div className="text-center text-sm text-gray-400 mt-6">
        © All rights reserved by Simplify Infotech Pvt. Ltd.
      </div>
    </footer>
  );
};

export default Footer;
