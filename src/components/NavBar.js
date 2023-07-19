import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <Link to="/" className="text-white font-semibold text-xl">Your Name</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
