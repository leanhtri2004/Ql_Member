
import React, { useState } from 'react'; // Import thêm useState
import { useParams } from 'react-router-dom';
import { allProducts } from '../data/products'; // Import dữ liệu tập trung
import { useCart } from '../qlmuaban/CartContext'; // Import giỏ hàng
import { FaStar } from 'react-icons/fa';

export const ProductDetailPage = () => {
  // 1. Lấy ID từ URL
  const { id } = useParams();
  const { addToCart } = useCart();

  // 2. State cho bộ chọn số lượng
  const [quantity, setQuantity] = useState(1);

  // 3. Tìm sản phẩm trong danh sách dựa trên ID
  const product = allProducts.find(p => p.id === parseInt(id));

  // 4. Hàm xử lý tăng/giảm số lượng
  const handleQuantityChange = (amount) => {
    setQuantity(prev => Math.max(1, prev + amount)); // Đảm bảo số lượng không dưới 1
  };

  // 5. Hàm giả lập cho Buy Now (bạn có thể thay bằng logic thật)
  const handleBuyNow = () => {
    // Logic của bạn cho việc "Mua ngay"
    // Ví dụ: có thể thêm vào giỏ hàng VÀ chuyển hướng đến trang checkout
    console.log(`Mua ngay: ${quantity} x ${product.title}`);
    // history.push('/checkout'); // Nếu bạn dùng react-router-dom v5
    // navigate('/checkout'); // Nếu bạn dùng v6
  };

  // Nếu không tìm thấy sản phẩm
  if (!product) {
    return (
      <div className="container mx-auto p-16 text-center text-xl">
        Không tìm thấy sản phẩm
      </div>
    );
  }

  return (
    
    <section className="w-full bg-gray-100 py-16 md:py-24">

      {/* 2. LỚP THẺ: Đây là "card" màu trắng, nổi lên trên nền.
          Nó chứa toàn bộ nội dung trang chi tiết của bạn. */}
      <div className="container mx-auto max-w-6xl bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* 3. NỘI DUNG BÊN TRONG: 
            Cấu trúc flex và 2 cột của bạn được giữ nguyên. 
            Tôi đã điều chỉnh padding cho hợp lý với "card" mới. */}
        <div className="flex flex-col lg:flex-row">

          {/* Cột trái: Hình ảnh (Thêm padding vào đây) */}
          <div className="lg:w-1/2 flex items-center justify-center p-8 md:p-12">
            <div className="bg-gray-50 rounded-xl shadow-sm p-4 aspect-square flex items-center justify-center">
              <img
                src={product.img}
                alt={product.title}
                className="max-h-[450px] object-contain"
              />
            </div>
          </div>

          {/* Cột phải: Thông tin (Thêm padding vào đây) */}
          <div className="lg:w-1/2 flex flex-col justify-center p-8 md:p-12">
            
            {/* Toàn bộ nội dung cột phải của bạn được giữ nguyên */}
            <span className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-2">
              {product.category || "Category"}
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            <div className="flex items-baseline gap-3 mb-4">
              <span className="text-4xl text-red-500 font-bold">{product.newPrice}</span>
              <span className="text-2xl text-gray-400 line-through">{product.oldPrice}</span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
              <a href="#reviews" className="ml-2 text-sm text-gray-500 hover:underline">
                ({product.reviews} Reviews)
              </a>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description || "Mô tả sản phẩm đang được cập nhật..."}
            </p>

            <hr className="my-6 border-gray-200" />

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <span className="font-semibold text-gray-700">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100 rounded-l-md"
                  >
                    -
                  </button>
                  <span className="px-6 py-2 font-semibold text-gray-800 text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="px-4 py-2 text-lg text-gray-600 hover:bg-gray-100 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => addToCart(product)}
                className="flex-1 bg-white text-red-500 border-2 border-red-500 font-semibold py-3 px-8 rounded-md hover:bg-red-50 transition-colors"
              >
                Add To Cart
              </button>
              
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-red-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-red-600 transition-colors"
              >
                Buy Now
              </button>
            </div>
          </div>
          {/* Hết Cột phải */}

        </div>
      </div>
    </section>
  );
};