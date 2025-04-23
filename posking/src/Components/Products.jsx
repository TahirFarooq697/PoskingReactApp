
import React from "react";
import { products } from "../constants/Products.jsx";
import Card from "./Card.jsx";

export default function Products() {
  return (
    <div className=" p-6 min-h-screen bg-white">
       <div className="border-b border-gray-300 pb-4 mb-6">
       <h2 className="text-xl font-semibold p-3 font-sans text-gray-900 mb-3">Top Products</h2>
        </div>
       
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
      </div>
    </div>
  );
}
