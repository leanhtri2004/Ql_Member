import React from 'react'

import { FaRegHeart, FaShoppingCart, FaStar, FaRegStar } from 'react-icons/fa';
import { Button, DatePicker, Space } from 'antd';
import food_dog from "../assets/img/food_dog.png";
import Canon_camera from "../assets/img/Canon_camera.png";
import latop from "../assets/img/latop.png";
import curology from "../assets/img/curology.png";
import Car from "../assets/img/Car.png";
import Shoes_Sense from "../assets/img/Shoes_Sense.png";
import GP11 from "../assets/img/GP11.png";
import jacket from "../assets/img/jacket.png";
import { HomeOutlined, SettingFilled } from '@ant-design/icons';
const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);
const products = [
  { id: 1, img: food_dog, title: "HAVIT HV-G92 Gamepad",status: "new", newPrice: "$120",  reviews: 88, rating: 4 },
  { id: 2, img: Canon_camera, title: "AK-900 Wired Keyboard", status: "new",  newPrice: "$960",  reviews: 75, rating: 5 },
  { id: 3, img: latop, title: "IPS LCD Gaming Monitor",  status: "new", newPrice: "$370", reviews: 99, rating: 5 },
  { id: 4, img: curology, title: "S-Series Comfort Chair", status: "new", newPrice: "$375",  reviews: 99, rating: 4.5 },
  { id: 5, img: Car, title: "The north coat",  status: "new",       newPrice: "$260", reviews: 65, rating: 5 },
  { id: 6, img: Shoes_Sense, title: "Gucci duffle bag", status: "new",      newPrice: "$960",  reviews: 99, rating: 4 },
  { id: 7, img: GP11, title: "Gucci duffle bag",   status: "new",    newPrice: "$960",  reviews: 99, rating: 4 },
  { id: 8, img: jacket, title: "Gucci duffle bag",      status: "new", newPrice: "$960",  reviews: 99, rating: 4 },



];
export const OurProduct = () => {
  return (
    <section className="bg-white font-sans p-8 md:p-12">
      {/* Phần Tiêu Đề */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <p className="text-red-500 font-semibold">Our products</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
          Explore Our Products
        </h1>
      </div>
       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
              {products.map((item) => (
                // 'group' rất quan trọng để kích hoạt hiệu ứng hover lên các element con
                <div key={item.id} className="group flex flex-col">
                  <div className="relative overflow-hidden bg-gray-100 rounded-md">
                    {/* Discount Badge */}
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded">
                      {item.status}
                    </div>
      
                    {/* Product Image */}
                    <img src={item.img} alt={item.title} className="w-full h-auto object-cover aspect-square p-6 md:p-10" />
      
                    {/* Overlay with Add To Cart button - xuất hiện khi hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-red-500 transition-colors hover:text-white">
                        Add To Cart
                      </Button>
                    </div>
      
                    {/* Icons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      <button  className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors hover:text-red-600 ">
                        <FaRegHeart />
                      </button>
                      <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors hover:text-red-600 ">
                         <EyeIcon />
                      </button>
                    </div>
                  </div>
      
                  {/* Product Info */}
                  <div className="mt-4">
                    <h6 className="font-semibold text-gray-800 truncate">{item.title}</h6>
                    <div className="mt-2 flex items-center gap-3">
                      <span className="text-red-500 font-bold">{item.newPrice}</span>
                      {/* <span className="text-gray-400 line-through">{item.oldPrice}</span> */}
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      {/* Hiển thị sao dựa trên rating */}
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className={i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">({item.reviews})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Nút View All */}
      <div className="mt-12 text-center">
        <Button type="dashed"   className="bg-red-500 text-white font-semibold py-3 px-12 rounded-md hover:bg-red-600 hover:text-white transition-colors">
          View All Products
        </Button>
      </div>
     
    </section>
  )
}
export default OurProduct;