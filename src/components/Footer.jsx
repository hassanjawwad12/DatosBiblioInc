import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

const Footer = () => {
  return (
    <div className="w-full bg-gray-200 text-slate-700 h-[8vh] flex justify-around items-center ">
      <p>© 2021 Datos Biblio Inc. All rights reserved</p>
      <div className="flex space-x-4">
        <a
           href="https://wa.me/923244787538"
           target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className=" text-2xl" />
        </a>

        <Tooltip title="coming soon" arrow>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className=" text-2xl" />
          </a>
        </Tooltip>
        <Tooltip title="coming soon" arrow>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className=" text-2xl" />
          </a>
        </Tooltip>
      </div>
    </div>
  );
};

export default Footer;
