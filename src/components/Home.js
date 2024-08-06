import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Welcome to Java Journeys</h2>
      <p className="mb-6">Your ultimate guide to mastering the art of coffee brewing!</p>
      <img src="https://images.squarespace-cdn.com/content/v1/6128d52a2b39e616dafae73c/1638407113812-47H1TT72MI4OOHT6V65M/french-press.jpeg" alt="Coffee Brewing" className="w-full max-w-md mx-auto mb-6" />
      <div className="grid gap-4 md:grid-cols-3">
        <Link to="/guides" className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition">
          <img src="https://images.squarespace-cdn.com/content/v1/6128d52a2b39e616dafae73c/1638407113812-47H1TT72MI4OOHT6V65M/french-press.jpeg" alt="Brewing Coffee Guides" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Brewing Guides</h3>
          <p>Explore detailed guides on various brewing methods.</p>
        </Link>
        <Link to="/calculator" className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition">
          <img src="https://as1.ftcdn.net/v2/jpg/03/21/65/66/1000_F_321656629_r9R9lNLA0cq6cu0Fh0eytprzp9gt4Tll.jpg" alt="Coffee Calculator" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Coffee Calculator</h3>
          <p>Calculate the perfect coffee-to-water ratio.</p>
        </Link>
        <Link to="/forum" className="p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition">
          <img src="https://www.adivedanatural.com/cdn/shop/articles/smeeling-coffee-beans_900x_5148e663-e441-4642-af81-ade43296e6b5_800x.jpg?v=1615107959" alt="Community Forum" className="w-full h-48 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community Forum</h3>
          <p>Join discussions and share your coffee experiences.</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
