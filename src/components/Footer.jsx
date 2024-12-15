import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-gray-200 text-slate-700 h-[8vh] flex justify-around items-center ">
      <p>© 2021 Datos Biblio Inc. All rights reserved</p>
      <div className="flex space-x-4">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className=" text-2xl" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className=" text-2xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className=" text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
