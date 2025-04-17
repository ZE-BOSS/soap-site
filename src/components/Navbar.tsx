import React from 'react';
import Logo from "../assets/logo.jpg"

const Navbar = () => {
    return (
      <nav className="flex justify-between items-center px-6 py-4 border-b">
        <div className="text-xl flex justify-center items-center gap-2 font-bold">
            <img
                src={Logo}
                alt={`Wenwaw Logo`}
                className="h-10 transition-all w-10 duration-700 ease-in-out object-fill"
            />
            <div>
              <p className='text-2xl md:text-4xl text-blue-900 font-bold'>wenwaw</p>
              <p className='text-xs md:text-lg text-gray-900 font-semibold'>One drop, pure magic</p>
            </div> 
        </div>
      </nav>
    );
};

export default Navbar;