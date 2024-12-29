import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPortrait, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import Logo from "../assets/datologo.png";
import InfoPDF from "../assets/Company.pdf";
import Email from "./Email";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePortfolioDownload = () => {
    const link = document.createElement("a");
    link.href = InfoPDF;
    link.download = "DBI Company Profile.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavLinks = () => (
    <>
      <button
        onClick={handlePortfolioDownload}
        className="flex items-center space-x-2 text-white text-lg hover:text-blue-200 transition-colors py-2 md:py-0"
      >
        <FaPortrait />
        <span>Portfolio</span>
      </button>

      <a
        className="flex items-center space-x-2 text-lg text-white hover:text-blue-200 transition-colors py-2 md:py-0"
        href="https://mail.google.com/mail/?view=cm&fs=1&to=info@datosbiblio.com"
        target="_blank"
        rel="noopener noreferrer"      
        onClick={() => setIsOpen(false)}
      >
        <FaEnvelope />
        <span className="ml-2"> Send an Email</span>
      </a>

      {/* <div
        className="flex items-center space-x-2 text-lg text-white hover:text-blue-200 transition-colors py-2 md:py-0"
        onClick={() => {
          setIsModalOpen(true);
          setIsOpen(false);
        }}
      >
        <FaEnvelope />
        <span>Contact Us</span>
      </div> */}
      {/* <Email open={isModalOpen} handleClose={() => setIsModalOpen(false)} /> */}

      <Link
        to="/testimonials"
        className="flex items-center space-x-2 text-lg text-white hover:text-blue-200 transition-colors py-2 md:py-0"
        onClick={() => setIsOpen(false)}
      >
        <IoMdPeople />
        <span>Clients</span>
      </Link>
    </>
  );

  return (
    <nav className="relative flex items-center justify-between p-4 bg-black shadow-md px-10">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            src={Logo}
            alt="Logo"
            className="h-14 w-auto cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4">
        <NavLinks />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#708090] md:hidden">
          <div className="flex flex-col items-center space-y-2 p-4">
            <NavLinks />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
