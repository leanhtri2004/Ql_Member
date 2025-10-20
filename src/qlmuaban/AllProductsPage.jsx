import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../qlmuaban/CartContext.jsx'; // Import CartContext
import { allProducts } from '../data/products'; // Import danh sách TẤT CẢ sản phẩm
import { FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

export const AllProductsPage = () => {
  const { addToCart } = useCart();

  return (
    <section className="bg-white font-sans p-8 md:p-12">
      {/* Phần Tiêu Đề */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800 text-center">
          All Products
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Browse our entire collection of available products.
        </p>
      </div>

      {/* Lưới sản phẩm - Sử dụng allProducts */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {/* Lặp qua allProducts thay vì 'products' */}
        {allProducts.map((item) => (
          <div key={item.id} className="group flex flex-col">
            <div className="relative overflow-hidden bg-gray-100 rounded-md">
              
              {/* Chỉ hiển thị discount badge nếu có */}
              {item.discount && (
                <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">
                  {item.discount}
                </div>
              )}

              <img src={item.img} alt={item.title} className="w-full h-auto object-cover aspect-square p-6 md:p-10" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button 
                  onClick={() => addToCart(item)} 
                  className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-red-500 transition-colors hover:text-white"
                >
                  Add To Cart
                </button>
              </div>

              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors hover:text-red-600 ">
                  <FaRegHeart />
                </button>
                <button 
                  onClick={() => addToCart(item)} 
                  className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors hover:text-red-600 hover:animate-bounce"
                >
                  <FaShoppingCart />
                </button>
              </div>
            </div>

            {/* Thông tin sản phẩm */}
            <div className="mt-4">
              {/* Link đến trang chi tiết */}
              <Link to={`/product/${item.id}`}>
                <h6 className="font-semibold text-gray-800 truncate">{item.title}</h6>
              </Link>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-red-500 font-bold">{item.newPrice}</span>
                <span className="text-gray-400 line-through">{item.oldPrice}</span>
              </div>
              <div className="mt-2 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
                <span className="ml-2 text-sm text-gray-500">({item.reviews})</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};