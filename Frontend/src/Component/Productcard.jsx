// import React from 'react'


// export const Productcard = ({image,name,price,description}) => {
//   return (
//     <div className ="bg-neutral-200 p-4 rounded-lg shadow-md flex justify-between flex-col md:flex-row">
//         <div className='w-full'>
//             <img src={image} alt={name} className='w-full h-56 object-cover rounded-lg mb-2' />
//             <h1 className='text-lg font-bold'>{name}</h1>
//             <h3 className='text-sm opacity-50 line-clamp-2'>{description}</h3>
//         </div>
//         <div className='w-full'>
//             <h1 className='text-lg font-bold my-2'>{price}</h1>
//             <button className='w-full text-white px-4 py-2 rounded-md bg-neutral-900'>Buy Now</button>
//         </div>
//     </div>
//   )
// }

import React from 'react';
import { useState, useEffect } from 'react';

export const Productcard = ({ name, image, price, description }) => {
const [imgIndex,setImgIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setImgIndex(prev => (prev + 1) % image.length);
  }, 1000);

  return () => clearInterval(interval);
}, [image.length]);


  return (
    <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row gap-6 transition-all hover:shadow-2xl">
      {/* Left Side - Image & Info */}
      <div className="w-full md:w-1/2">
        <img 
          src={image[imgIndex]} 
          alt={name} 
          className="w-full h-60 object-cover rounded-xl mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
      </div>

      {/* Right Side - Price & Button */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <h1 className="text-2xl font-bold text-gray-900 my-3">{price}</h1>
        <button className="w-full text-white px-5 py-3 rounded-lg bg-black hover:bg-gray-800 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};