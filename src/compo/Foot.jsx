import React from 'react';

const Foot = () => {
    return (
    
        
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto text-center text-gray-600">
        <p>&copy; 2023 BlogName. All rights reserved.</p>
        <div className="mt-4">
          <div  className="inline-block mr-4 hover:text-gray-800">
            About Us
          </div>
          <div  className="inline-block mr-4 hover:text-gray-800">
            Contact Us
          </div>
          <a href="tel:100" className="inline-block mr-4 hover:text-gray-800">
            Call me 
          </a>
          <div className="inline-block hover:text-gray-800">
            Privacy Policy
          </div>
        </div>
      </div>
    </footer>
  );
}


export default Foot;

  

