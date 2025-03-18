import React from 'react';

const TwentyTen = () => {
  return (
    <div>
      {/* Logo */}
      <div className="w-24 h-24 mx-auto mt-8 bg-center bg-contain" 
           style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/a/a7/Apple_logo_black.svg')" }}></div>

      {/* Navbar */}
      <nav className="flex justify-around items-center bg-gray-800 py-2">
        <a href="#" className="text-white uppercase text-sm hover:bg-gray-600 px-3 py-2 transition duration-300">Store</a>
        <a href="#" className="text-white uppercase text-sm hover:bg-gray-600 px-3 py-2 transition duration-300">Mac</a>
        <a href="#" className="text-white uppercase text-sm hover:bg-gray-600 px-3 py-2 transition duration-300">iPod</a>
        <a href="#" className="text-white uppercase text-sm hover:bg-gray-600 px-3 py-2 transition duration-300">iPhone</a>
        <a href="#" className="text-white uppercase text-sm hover:bg-gray-600 px-3 py-2 transition duration-300">iPad</a>
        <a href="#" className="text-white uppercase text-sm hover:bg-gray-600 px-3 py-2 transition duration-300">iTunes</a>
        <a href="#" className="text-white uppercase text-sm hover:bg-gray-600 px-3 py-2 transition duration-300">Support</a>
      </nav>

      {/* Tribute Container */}
      <div className="text-center p-8">
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images6.alphacoders.com/352/thumb-1920-352992.jpg" 
            alt="Steve Jobs" 
            className="w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default TwentyTen;