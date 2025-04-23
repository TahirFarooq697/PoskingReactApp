import React from "react";
const Card = ({ product }) => {
    
  
    return (
      <div className=" px-4 py-8 rounded-lg shadow-lg max-w-sm">

<div className="flex items-center space-x-2 mb-5 group">
<img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-lg transform group-hover:rotate-3 transition-transform duration-300
group-hover:scale-95"/>
          
        </div>
        


        <h2 className="text-xl font-medium text-gray-500 hover:text-[#F23E14]">{product.name}</h2>
        
        {/* Rating */}
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-yellow-600">⭐⭐⭐⭐⭐</span>
          
        </div>
        
        {/* Price */}
        <div className="mt-4 flex items-baseline space-x-2">
          <span className="text-2xl font-bold text-gray-500 ">${product.price}</span>
          <span className="text-sm text-red-400 line-through">${product.originalPrice}</span>
        </div>
        
        
       
      </div>
    );
  };
  export default Card;