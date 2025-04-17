import React from 'react';

const FAQ = () => {

  return (
    <div className='bg-blue-300'>
      <h2 className="text-2xl text-center font-bold my-4 md:my-10">What Our Customers Say</h2>
      <div className='mb-4 px-4'>
        <blockquote className="bg-white p-1 md:h-40 md:text-xl rounded-lg shadow mb-1">
          <p>"Absolutely the best soap I’ve used! Just a little goes a long way. Leaves everything sparkling clean and smells amazing!"</p>
        </blockquote>
        <footer className="text-sm md:text-xl mt-2">– Grace E., Abuja
        </footer>
      </div>
      <div className='mb-4 px-4'>
        <blockquote className="bg-white p-1 md:h-40 md:text-xl rounded-lg shadow">
          <p>"I love that it's gentle on my hands, yet powerful enough to clean greasy pots. Wenwaw is now my go-to liquid soap!"</p>
        </blockquote>
        <footer className="text-sm md:text-xl mt-2">– Ifeanyi A., Lagos</footer>
      </div>
    </div>

  );
};

export default FAQ;
