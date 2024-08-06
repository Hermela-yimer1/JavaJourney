import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Java Journeys</h1>
        <nav>
          <Link to="/" className="px-3">Home</Link>
          <Link to="/guides" className="px-3">Guides</Link>
          <Link to="/calculator" className="px-3">Calculator</Link>
          <Link to="/forum" className="px-3">Forum</Link>
          <Link to="/blog" className="px-3">Blog</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
