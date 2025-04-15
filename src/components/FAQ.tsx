import React from 'react';

const FAQ = () => {

  return (
    <div className='bg-blue-300'>
      <h2 className="text-2xl text-center font-bold my-4 md:my-10">What Our Customers Say</h2>
      <div className='mb-4 px-4'>
        <blockquote className="bg-white p-1 md:h-40 md:text-xl rounded-lg shadow mb-1">
          <p>"Wenwaw leaves my skin feeling clean without any tightness. I'm hooked."</p>
        </blockquote>
        <footer className="text-sm md:text-xl mt-2">– Sarah M.</footer>
      </div>
      <div className='mb-4 px-4'>
        <blockquote className="bg-white p-1 md:h-40 md:text-xl rounded-lg shadow">
          <p>"The lavender scent is so relaxing. My whole family loves this soap."</p>
        </blockquote>
        <footer className="text-sm md:text-xl mt-2">– David T.</footer>
      </div>
    </div>

  );
};

export default FAQ;
