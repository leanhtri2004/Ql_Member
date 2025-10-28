
import React, { useEffect } from 'react'; // Bổ sung useEffect
import AOS from 'aos'; // Import thư viện AOS
import 'aos/dist/aos.css'; // Import CSS của AOS
import CellPhone from "../assets/img/CellPhone.png";
import Computer from "../assets/img/Computer.png";
import SmartWatch from "../assets/img/SmartWatch.png";
import Headphone from "../assets/img/Headphone.png";
import Gamepad from "../assets/img/Gamepad.png";



const categories = [
  { id: 1, name: "Phones", img: CellPhone, aos: "fade-right" },
  { id: 2, name: "Computers", img: Computer, aos: "fade-up" },
  { id: 3, name: "SmartWatch", img: SmartWatch, aos: "fade-left" },
  { id: 4, name: "Camera", svg: true, aos: "fade-right" }, 
  { id: 5, name: "HeadPhones", img: Headphone, aos: "fade-up" },
  { id: 6, name: "Gaming", img: Gamepad, aos: "fade-left" },
];


export const Category = () => {
 
  useEffect(() => {
    AOS.init({
      duration:1000, // Đã điều chỉnh nhẹ cho phù hợp hơn
      once: false,    // Hiệu ứng chạy lại mỗi khi cuộn vào
    })
  }, []) // Thêm dependency array rỗng để chỉ chạy 1 lần sau render

  return (
    <section className="bg-white font-sans p-8 md:p-12">
    
      {/* Phần Tiêu Đề - Áp dụng hiệu ứng */}
      <div className="mb-10"
        data-aos="fade-down"
        data-aos-duration='800'
      >

        {/* Tiêu đề nhỏ "Categories" */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <p className="text-red-500 font-semibold">Categories</p>
        </div>

        {/* Tiêu đề chính và các nút điều hướng */}
        <div className="flex items-end justify-between">
          <h2 className="text-4xl font-bold tracking-tight text-gray-800">Browse By Category</h2>
          <div className="flex items-center gap-3">
            {/* Nút Trái */}
            <button className="w-11 h-11 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
            </button>
            {/* Nút Phải */}
            <button className="w-11 h-11 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Lưới các Danh mục - CHỈ CÒN VÒNG LẶP MAP */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        
        {categories.map((cat, index) => (
          // ÁP DỤNG HIỆU ỨNG VÀ ĐỘ TRỄ TĂNG DẦN
          <a
            key={cat.id} // Dùng id thay vì index nếu có thể
            href="#" 
            className="group flex flex-col items-center justify-center p-6 h-40 border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition-colors"
            data-aos={cat.aos}               // Hiệu ứng (fade-right, fade-up, fade-left)
            data-aos-duration="1000"
            data-aos-delay={index * 150}     // Độ trễ xếp tầng 150ms
          >
            {/* Logic render IMG hoặc SVG */}
            {cat.img ? (
              <img className='w-10 h-10 group-hover:animate-bounce' src={cat.img} alt={cat.name} />
            ) : (
              // SVG cho Camera
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-gray-800 group-hover:text-white group-hover:animate-bounce">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.776 48.776 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
            )}
            <span className="mt-4 font-semibold">{cat.name}</span>
          </a>
        ))}

        {/* ĐÃ XÓA TOÀN BỘ 6 KHỐI <a> CỐ ĐỊNH Ở ĐÂY */}
      </div>
    </section>
  );
};

export default Category;
