import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
import S1 from '../assets/s1.jpg';
import S2 from '../assets/s2.jpg';
import S3 from '../assets/s3.jpg';
import S4 from '../assets/s4.jpg';
import S5 from '../assets/s5.jpg';

const images = [S1, S2, S3, S4, S5];

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
      <div className="grid grid-cols-2">
        {/* Text Content */}
        <div className="p-2 md:p-10 lg:p-16 flex flex-col justify-center bg-white max-w-2xl mx-auto space-y-6">
            <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-gray-900">
                Experience the Magic of <br />
                <span className="text-blue-700 drop-shadow-sm">Wenwaw Liquid Soap</span>
            </h1>

            <p className="text-lg text-gray-600">
                One Drop Does The Magic – <span className="text-gray-800 font-medium">Powerful Cleaning, Gentle on Your Hands.</span>
            </p>

            <div className="md:flex gap-4 mt-4">
                <button className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full text-base font-semibold shadow-md transition-all duration-300">
                    Shop Now
                </button>
                <button className="border mt-4 md:mt-0 border-blue-700 text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-full text-base font-semibold transition-all duration-300">
                    Learn More
                </button>
            </div>
        </div>

        {/* Carousel */}
        <div className="relative h-[25rem] md:h-[32rem] w-full overflow-hidden shadow-lg group bg-gradient-to-br from-blue-50 to-white">
            {/* Image Slide */}
            <img
                src={images[currentIndex]}
                alt={`Wenwaw Liquid Soap ${currentIndex + 1}`}
                className="h-full w-full object-cover transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10" />

            {/* Navigation Arrows */}
            {/* <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-700 p-2 rounded-full shadow-lg transition duration-300"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white/90 hover:bg-white text-blue-700 p-2 rounded-full shadow-lg transition duration-300"
            >
                <ChevronRight className="w-6 h-6" />
            </button> */}

            {/* Dots */}
            {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
                {images.map((_, index) => (
                <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                    currentIndex === index ? 'bg-blue-700' : 'bg-white/70'
                    }`}
                ></div>
                ))}
            </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
