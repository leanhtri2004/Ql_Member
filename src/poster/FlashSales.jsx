
import { FaRegHeart, FaShoppingCart, FaStar, FaRegStar } from 'react-icons/fa';

import sale from "../assets/img/sale.png";
import sale1 from "../assets/img/sale1.png";
import sale2 from "../assets/img/sale2.png";
import sale3 from "../assets/img/sale3.png";
import sale4 from "../assets/img/sale4.png";
import sale5 from "../assets/img/sale5.png";
import { Button } from 'antd';
import {useCart} from '../qlmuaban/CartContext.jsx';
import { Link } from 'react-router-dom';
const products = [
  { id: 1, img: sale, title: "HAVIT HV-G92 Gamepad", discount: "-40%", newPrice: "$120", oldPrice: "$160", reviews: 88, rating: 4 },
  { id: 2, img: sale1, title: "AK-900 Wired Keyboard", discount: "-35%", newPrice: "$960", oldPrice: "$1160", reviews: 75, rating: 5 },
  { id: 3, img: sale2, title: "IPS LCD Gaming Monitor", discount: "-30%", newPrice: "$370", oldPrice: "$400", reviews: 99, rating: 5 },
  { id: 4, img: sale3, title: "S-Series Comfort Chair", discount: "-25%", newPrice: "$375", oldPrice: "$400", reviews: 99, rating: 4.5 },
  { id: 5, img: sale4, title: "The north coat", discount: "-25%", newPrice: "$260", oldPrice: "$360", reviews: 65, rating: 5 },
  { id: 6, img: sale5, title: "Gucci duffle bag", discount: "-25%", newPrice: "$960", oldPrice: "$1160", reviews: 99, rating: 4 },
];

export const FlashSales = () => {
  const { addToCart } = useCart();
  return (
    <section className="bg-white font-sans p-8 md:p-12">
      {/* Phần Tiêu Đề */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <p className="text-red-500 font-semibold">Today's</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
          Flash Sales
        </h1>
      </div>

      {/* Lưới sản phẩm */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {products.map((item) => (
          // 'group' rất quan trọng để kích hoạt hiệu ứng hover lên các element con
          <div key={item.id} className="group flex flex-col">
            <div className="relative overflow-hidden bg-gray-100 rounded-md">
              {/* Discount Badge */}
              <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded">
                {item.discount}
              </div>

              {/* Product Image */}
              <img src={item.img} alt={item.title} className="w-full h-auto object-cover aspect-square p-6 md:p-10" />

              {/* Overlay with Add To Cart button - xuất hiện khi hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button onClick={()=>addToCart(item)}  className="bg-white text-black font-bold py-2 px-6 rounded hover:bg-red-500 transition-colors hover:text-white">
                  Add To Cart
                </button>
              </div>

              {/* Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors hover:text-red-600 ">
                  <FaRegHeart />
                </button>
                <button onClick={()=>addToCart(item)} className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 transition-colors hover:text-red-600 hover:animate-bounce">
                  <FaShoppingCart />
                </button>
              </div>
            </div>

            {/* Product Info */}
            <div className="mt-4">

              <Link to={`/product/${item.id}`}>
              <h6 className="font-semibold text-gray-800 truncate">{item.title}</h6>
              </Link>
              <div className="mt-2 flex items-center gap-3">
                <span className="text-red-500 font-bold">{item.newPrice}</span>
                <span className="text-gray-400 line-through">{item.oldPrice}</span>
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
      {/* <div className="mt-12 text-center">
        <Button type="dashed"  className="bg-red-500 text-white font-semibold py-3 px-12 rounded-md hover:bg-red-600 hover:text-white transition-colors">
          View All Products
        </Button >
      </div> */}
      <div className="mt-12 text-center">
        {/* 2. Thay <Button> bằng <Link> và trỏ "to" đến trang sản phẩm */}
        <Link
          to="/products"
          className="bg-red-500 text-white font-semibold py-3 px-12 rounded-md hover:bg-red-600 transition-colors"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
};