import sale from "../assets/img/sale.png";
import sale1 from "../assets/img/sale1.png";
import sale2 from "../assets/img/sale2.png";
import sale3 from "../assets/img/sale3.png";
import sale4 from "../assets/img/sale4.png";
import sale5 from "../assets/img/sale5.png";
// ... import thêm ảnh từ OurProduct, BestSellingProduct ...
import food_dog from "../assets/img/food_dog.png";
import Canon_camera from "../assets/img/Canon_camera.png";
import latop from "../assets/img/latop.png";
import curology from "../assets/img/curology.png";
import Car from "../assets/img/Car.png";
import Shoes_Sense from "../assets/img/Shoes_Sense.png";
import GP11 from "../assets/img/GP11.png";
import jacket from "../assets/img/jacket.png";
export const allProducts = [
  // Từ FlashSales
  { id: 1, img: sale, title: "HAVIT HV-G92 Gamepad", discount: "-40%", newPrice: "$120", oldPrice: "$160", reviews: 88, rating: 4, description: "Gamepad chơi game cực nhạy, kết nối không dây..." },
  { id: 2, img: sale1, title: "AK-900 Wired Keyboard", discount: "-35%", newPrice: "$960", oldPrice: "$1160", reviews: 75, rating: 5, description: "Bàn phím cơ có dây, đèn LED RGB..." },
  { id: 3, img: sale2, title: "IPS LCD Gaming Monitor", discount: "-30%", newPrice: "$370", oldPrice: "$400", reviews: 99, rating: 5, description: "Màn hình 27 inch, 144Hz, 1ms..." },
  { id: 4, img: sale3, title: "S-Series Comfort Chair", discount: "-25%", newPrice: "$375", oldPrice: "$400", reviews: 99, rating: 4.5, description: "Ghế công thái học, thoải mái..." },
  { id: 5, img: sale4, title: "The north coat", discount: "-25%", newPrice: "$260", oldPrice: "$360", reviews: 65, rating: 5, description: "Áo khoác giữ ấm, chống nước..." },
  { id: 6, img: sale5, title: "Gucci duffle bag", discount: "-25%", newPrice: "$960", oldPrice: "$1160", reviews: 99, rating: 4, description: "Túi xách du lịch cao cấp..." },
  

        //  {id: 7, name: 'The north coat', price: 260, originalPrice: 360, reviews: 65, image:sale5 },
        //   {id: 8, name: 'Gucci duffle bag', price: 960, originalPrice: 1160, reviews: 99, image:sale4 },
        //   {id: 9, name: 'RGB liquid CPU Cooler', price: 375, originalPrice: 170, reviews: 99, image:best },
        //   {id: 10, name: 'Small BookSelf', price: 370, originalPrice: null, reviews: 99, image:best1 },

   { id: 10, img: food_dog, title: "HAVIT HV-G92 Gamepad",status: "new", newPrice: "$120",  reviews: 88, rating: 4 },
  { id: 11, img: Canon_camera, title: "AK-900 Wired Keyboard", status: "new",  newPrice: "$960",  reviews: 75, rating: 5 },
  { id: 12, img: latop, title: "IPS LCD Gaming Monitor",  status: "new", newPrice: "$370", reviews: 99, rating: 5 },
  { id: 13, img: curology, title: "S-Series Comfort Chair", status: "new", newPrice: "$375",  reviews: 99, rating: 4.5 },
  { id: 14, img: Car, title: "The north coat",  status: "new",       newPrice: "$260", reviews: 65, rating: 5 },
  { id: 15, img: Shoes_Sense, title: "Gucci duffle bag", status: "new",      newPrice: "$960",  reviews: 99, rating: 4 },
  { id: 16, img: GP11, title: "Gucci duffle bag",   status: "new",    newPrice: "$960",  reviews: 99, rating: 4 },
  { id: 17, img: jacket, title: "Gucci duffle bag",      status: "new", newPrice: "$960",  reviews: 99, rating: 4 },
  // ... Thêm các sản phẩm từ OurProduct và BestSellingProduct vào đây
];