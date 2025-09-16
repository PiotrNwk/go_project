import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md rounded-lg px-6 py-3 flex items-center justify-between mb-4">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-700">Chlooopie.</div>

      {/* Links */}
      <ul className="flex gap-6"> {/* ✅ gap ensures spacing */}
        <li>
          <a
            href="#home"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition-colors">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
