import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Welcome to our Blog</h1>
        <p className="text-gray-700 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec ante ac eros facilisis bibendum. Praesent sagittis a
          ipsum vel vehicula. Pellentesque blandit nunc vel orci tincidunt, non malesuada metus imperdiet. Fusce eu dolor vitae
          velit commodo luctus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec
          malesuada augue quam, vel sollicitudin eros fringilla in. Morbi et nisi a ipsum tempor bibendum.
        </p>
        <Link to="/blog" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Read the Blog
        </Link>
      </div>
    );
}

export default Home;
