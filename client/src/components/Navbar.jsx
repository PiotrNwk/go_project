import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-6 text-white">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/view">View Data</Link></li>
        <li><Link to="/insert">Insert Data</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
}