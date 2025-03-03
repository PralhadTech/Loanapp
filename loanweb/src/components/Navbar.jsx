import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoansOpen, setIsLoansOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-lg fixed w-full z-50 transition-all duration-500">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold tracking-wide hover:text-yellow-400 transition-all duration-300 ease-in-out">
          LoanApp
        </h1>
        <div className="hidden md:flex space-x-6 items-center text-lg">
          <a
            href="#home"
            className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out"
          >
            Home
          </a>
          <div className="relative">
            <button
              onClick={() => setIsLoansOpen(!isLoansOpen)}
              className="text-white flex items-center space-x-1 hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
              <span>Loans</span>
              <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {isLoansOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute left-0 mt-2 w-44 bg-white shadow-lg rounded-lg p-2 overflow-hidden transition-all duration-300"
                >
                  <a
                    href="#track"
                    className="block px-4 py-2 text-gray-800 hover:bg-yellow-400 transition-all duration-300 ease-in-out"
                  >
                    Track
                  </a>
                  <a
                    href="#pay"
                    className="block px-4 py-2 text-gray-800 hover:bg-yellow-400 transition-all duration-300 ease-in-out"
                  >
                    Pay
                  </a>
                  <a
                    href="#calculator"
                    className="block px-4 py-2 text-gray-800 hover:bg-yellow-400 transition-all duration-300 ease-in-out"
                  >
                    Calculator
                  </a>
                  <a
                    href="#invest"
                    className="block px-4 py-2 text-gray-800 hover:bg-yellow-400 transition-all duration-300 ease-in-out"
                  >
                    Invest
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <a
            href="#services"
            className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out"
          >
            Services
          </a>
          <a
            href="#about"
            className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out"
          >
            Contact
          </a>
        </div>
        <button
          className="md:hidden text-white hover:text-yellow-400 transition-all duration-300 ease-in-out"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-gradient-to-b from-blue-700 to-purple-700 p-4 space-y-4 text-center transition-all duration-300"
          >
            <a
              href="#home"
              className="text-white block hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
              Home
            </a>
            <button
              onClick={() => setIsLoansOpen(!isLoansOpen)}
              className="text-white flex justify-center items-center space-x-1 w-full hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
              <span>Loans</span>
              <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {isLoansOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col space-y-2 pl-4"
                >
                  <a
                    href="#track"
                    className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out"
                  >
                    Track
                  </a>
                  <a
                    href="#pay"
                    className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out"
                  >
                    Pay
                  </a>
                  <a
                    href="#calculator"
                    className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out"
                  >
                    Calculator
                  </a>
                  <a
                    href="#invest"
                    className="text-white hover:text-yellow-400 transition-all duration-300 ease-in-out"
                  >
                    Invest
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
            <a
              href="#services"
              className="text-white block hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-white block hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-white block hover:text-yellow-400 transition-all duration-300 ease-in-out"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
