
import logo_poster from "../assets/img/logo_poster.png";
import purple from "../assets/img/purple.png";
import green from "../assets/img/green.png";
import red from "../assets/img/red.png";
import { HiMenu } from "react-icons/hi";
// Bạn sẽ cần import icon menu, ví dụ từ 'react-icons'
// import { HiMenu } from "react-icons/hi"; 
// Hoặc sử dụng class 'bx-menu' nếu bạn đã import boxicons

export const Poster = () => {
  return (
    // Container chính: Đảm bảo nó chiếm toàn bộ màn hình và là gốc cho 'position: absolute'
    <div className="relative w-full h-screen text-white">
      
      {/* 1. Phần Background Poster */}
      <div className="absolute inset-0 w-full h-full bg-[url('/src/assets/img/bg_poster.png')] bg-cover bg-center bg-no-repeat" />
      
      {/* 2. Phần Header (Logo, Nav, Icons) - Đặt z-index để nổi lên trên */}
      <header className="relative z-10 flex justify-between items-center w-full p-4 md:p-8">
        {/* Logo */}
        <div className="w-48 md:w-[300px] h-auto">
          <img src={logo_poster} alt="logo_poster" className="w-full h-auto" />
        </div>

        {/* Nav Links (Desktop) + Icons */}
        <div className="flex items-center gap-6">
          {/* Nav Links: Ẩn trên mobile, hiện trên desktop */}
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-white uppercase no-underline hover:underline hover:decoration-red-500 hover:decoration-2 hover:font-bold">Home</a>
            <a href="#" className="text-white uppercase no-underline hover:underline hover:decoration-red-500 hover:decoration-2 hover:font-bold">Man</a>
            <a href="#" className="text-white uppercase no-underline hover:underline hover:decoration-red-500 hover:decoration-2 hover:font-bold">Woman</a>
            <a href="#" className="text-white uppercase no-underline hover:underline hover:decoration-red-500 hover:decoration-2 hover:font-bold">Kids</a>
            <a href="#" className="text-white uppercase no-underline hover:underline hover:decoration-red-500 hover:decoration-2 hover:font-bold">Sales</a>
          </nav>
          
          {/* Icons: Hiện trên mọi kích thước */}
          <div className="flex gap-6 text-2xl">
            <i className="bx bx-search text-white cursor-pointer"></i>
            <i className="bx bx-cart text-white cursor-pointer"></i>
          </div>

          {/* Hamburger Menu: Hiện trên mobile, ẩn trên desktop */}
          <div className="md:hidden text-3xl text-white cursor-pointer">
            {/* <i className="bx bx-menu"></i> */}
            <HiMenu />
            {/* <HiMenu /> */}
          </div>
        </div>
      </header>
      
      {/* 3. Phần Content (Giá, Tên, Nút) */}
      <div className="absolute top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center 
                      md:left-auto md:right-[23%] md:bottom-1/2 md:-translate-x-0 md:-translate-y-1/2 md:items-start md:text-left">
        <h1 className="text-5xl font-bold text-red-500">134$</h1>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">JORDAN</h2>
          <p className="text-xl">JUMPMAN 2025 PF</p>
        </div>
        <button className="py-2 px-8 mt-4 text-base bg-red-500 rounded-lg border border-black cursor-pointer">
          exclusive
        </button>
      </div>

      {/* 4. Phần Footer (Chọn màu, Nút Mua, Mô tả) */}
      <footer className="absolute bottom-0 w-full flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 p-8 md:px-12">
        {/* Left: Chọn màu */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <p className="font-bold text-sm uppercase tracking-wider">CHOOSE COLOR</p>
          <div className="flex gap-4">
            <img src={purple} alt="purple" className="w-20 cursor-pointer transition-transform hover:scale-110" />
            <img src={green} alt="green" className="w-20 cursor-pointer transition-transform hover:scale-110" />
            <img src={red} alt="red" className="w-20 cursor-pointer transition-transform hover:scale-110" />
          </div>
        </div>
        
        {/* Center: Nút Add/Buy */}
        <div className="flex flex-col sm:flex-row gap-6">
          <button className="py-3 px-8 font-bold text-sm uppercase rounded-sm transition-all bg-white text-black border-none hover:bg-gray-200">
            ADD TO CART
          </button>
          <button className="py-3 px-8 font-bold text-sm uppercase rounded-sm transition-all bg-transparent text-white border border-white hover:bg-white hover:text-black">
            BUY NOW
          </button>
        </div>
        
        {/* Right: Mô tả */}
        <div className="max-w-xs text-center md:text-left">
          <h4 className="text-sm font-bold uppercase tracking-wider mb-2">INSPIRATION</h4>
          <p className="text-xs text-gray-300 leading-snug">
            Inspired by the design of the latest Air Jordan game shoe, the Jordan Jumpman 2021 helps up-and-coming players level up their game.
          </p>
        </div>
      </footer>
    </div>
  );
};