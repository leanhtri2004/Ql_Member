import React, { createContext, useContext, useState } from 'react';

// 1. Tạo Context (Giỏ hàng ảo)
const CartContext = createContext();

// 2. Tạo một "hook" tùy chỉnh để dễ dàng sử dụng context
export const useCart = () => {
  return useContext(CartContext);
};

// 3. Tạo "Provider" (Nhà cung cấp)
// Đây là component sẽ bao bọc toàn bộ ứng dụng của bạn
export const CartProvider = ({ children }) => {
  // State chứa các sản phẩm trong giỏ hàng
  const [cartItems, setCartItems] = useState([]);

  // Hàm để thêm sản phẩm vào giỏ
  const addToCart = (product) => {
    setCartItems(prevItems => {
      // Kiểm tra xem sản phẩm đã có trong giỏ chưa
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // Nếu đã có, chỉ tăng số lượng
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // Nếu chưa có, thêm sản phẩm mới vào giỏ với số lượng là 1
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
    alert(`${product.title} đã được thêm vào giỏ hàng!`);
  };

  // Bạn có thể thêm các hàm khác ở đây, ví dụ: removeFromCart, updateQuantity...

  // Cung cấp state và hàm cho các component con
  const value = {
    cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};