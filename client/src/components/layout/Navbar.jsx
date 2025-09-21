import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md rounded-lg px-6 py-3 flex items-center justify-between mb-4">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-700">Showcase</div>

      {/* Links */}
      <ul className="flex gap-6">
        <li>
          <a
            href="#home"
            className="text-gray-800 relative after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-800 relative after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-gray-800 relative after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-800 relative after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Button */}
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-800 transition-colors">
        Sign In
      </button>
    </nav>
  );
};

export default Navbar;
