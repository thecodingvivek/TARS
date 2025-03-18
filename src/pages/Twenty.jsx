// iPhoneXS.jsx
import React from 'react';
import Button from './Button';

const Twenty = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans w-screen h-screen overflow-hidden">
      <Button />
      <nav className="fixed top-0 w-full bg-black/80 z-10 flex justify-between items-center p-3 px-5">
        <div className="nav-logo">
          <div className='applelogo w-5'></div>
          <img src="/src/assets/apple-logo.png" alt="Apple Logo" className="w-5" />
        </div>
        <ul className="flex space-x-6">
          <li><a href="#" className="text-sm text-white/90 hover:text-white">Mac</a></li>
          <li><a href="#" className="text-sm text-white/90 hover:text-white">iPad</a></li>
          <li><a href="#" className="text-sm text-white/90 hover:text-white">iPhone</a></li>
          <li><a href="#" className="text-sm text-white/90 hover:text-white">Watch</a></li>
          <li><a href="#" className="text-sm text-white/90 hover:text-white">TV</a></li>
          <li><a href="#" className="text-sm text-white/90 hover:text-white">Music</a></li>
          <li><a href="#" className="text-sm text-white/90 hover:text-white">Support</a></li>
        </ul>
        <div className="flex space-x-4">
          <a href="#"><img src="search-icon.png" alt="Search" className="w-5" /></a>
          <a href="#"><img src="cart-icon.png" alt="Cart" className="w-5" /></a>
        </div>
      </nav>

      <main className="relative w-screen flex flex-col items-center justify-center min-h-screen text-center pt-16">

        <div className="hero-text flex flex-col items-center">
          <h1 className="text-5xl font-semibold mb-2">iPhone X<span className="text-2xl align-super">S</span>
          </h1>
          <p className="text-2xl mb-5 opacity-80">Welcome to the big screens.</p>
          <div className="flex gap-5">
            <a href="#" className="text-lg text-blue-500 hover:underline">Learn more &gt;</a>
            <a href="#" className="text-lg text-blue-500 hover:underline">Buy &gt;</a>
          </div>
        </div>
        <div className='iphonexs_bg w-screen h-[400px] bottom-0 left-0 bg-amber-100'>

        </div>
      </main>
    </div>
  );
};

export default Twenty;