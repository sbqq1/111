import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';

 {/* 🔹 卡片區塊   */}
interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-[#111111] rounded-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl group-hover:shadow-purple-500/20">
        <div className="relative w-full h-64 overflow-hidden flex items-center justify-center">
          <img 
            src={product.images[0]} 
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition duration-300"
          />
          {product.isHot && (
            <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full">
              熱銷
            </div>
          )}
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
          <p className="text-gray-400 mb-4">{product.description}</p>
          <ul className="text-sm text-gray-400 mb-6">
            {product.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="mb-1">• {feature}</li>
            ))}
          </ul>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-purple-500">¥{product.price}</span>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
              立即購買
            </button>
          </div>
        </div>
        
      </div>
    </Link>
    
  );
}