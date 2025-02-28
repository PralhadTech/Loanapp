import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-xl font-bold">LoanApp</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-white hover:underline">
            Home
          </a>
          <a href="#services" className="text-white hover:underline">
            Services
          </a>
          <a href="#about" className="text-white hover:underline">
            About
          </a>
          <a href="#contact" className="text-white hover:underline">
            Contact
          </a>
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col bg-blue-700 p-4 space-y-4">
          <a href="#home" className="text-white hover:underline">
            Home
          </a>
          <a href="#services" className="text-white hover:underline">
            Services
          </a>
          <a href="#about" className="text-white hover:underline">
            About
          </a>
          <a href="#contact" className="text-white hover:underline">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
