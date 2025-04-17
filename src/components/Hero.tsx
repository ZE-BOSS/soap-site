import React, { useState, useEffect } from 'react';
import Button from './Button';

const images = [
  "/assets/wenwaw1.png", 
  "/assets/wenwaw2.png", 
  "/assets/wenwaw3.png"
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // const prevSlide = () => {
  //   setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  // };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <div className="grid grid-cols-2 items-center overflow-hidden">
          <img src={images[currentIndex]} alt={`Wenwaw Liquid Soap ${currentIndex + 1}`} className="h-full w-full transition-all duration-700 ease-in-out" />
          <div className='h-full flex flex-col justify-center object-cover items-center w-full bg-blue-50 py-6'>
            <div className='mx-2 md:mx-5 md:space-y-10'>
              <h2 className="text-xl md:text-6xl font-bold mb-4">Experience the Wenwaw Difference</h2>
              <ul className="list-none text-xs ml-3 md:ml-20 md:text-2xl md:space-y-4">
                <li>✔️ Sparkling Clean Results</li>
                <li>✔️ Multipurpose Use</li>
                <li>✔️ Economical And Long lasting</li>
                <li>✔️ Natural inspired Formula</li>
                <li>✔️ Tested Quality Assurance</li>
              </ul>
              <div className="flex gap-2 md:gap-4 mt-4">
                <Button className='text-xs bg-blue-400 rounded-xl text-white md:w-60 md:py-3'>Order Now</Button>
                <Button className='text-xs border border-blue-400 bg-white text-black rounded-xl md:w-60 md:py-3'>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
