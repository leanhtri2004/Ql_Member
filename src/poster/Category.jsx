import React from 'react'
import CellPhone from "../assets/img/CellPhone.png";
import Computer from "../assets/img/Computer.png";
import SmartWatch from "../assets/img/SmartWatch.png";
import Headphone from "../assets/img/Headphone.png";
import Gamepad from "../assets/img/Gamepad.png";



export const Category = () => {
  return (
   <section className="bg-white font-sans p-8 md:p-12">
      {/* Phần Tiêu Đề */}
      <div className="mb-10">
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

      {/* Lưới các Danh mục */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {/* Phones */}
        <a href="#" className="group flex flex-col items-center justify-center p-6 h-40 border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition-colors">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-gray-800 group-hover:stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg> */}
          <img   src={CellPhone} alt="" />
          <span className="mt-4 font-semibold">Phones</span>
        </a>

        {/* Computers */}
        <a href="#" className="group flex flex-col items-center justify-center p-6 h-40 border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition-colors">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-gray-800 group-hover:stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25Z" />
          </svg> */}
          <img   src={Computer} alt="" />
          <span className="mt-4 font-semibold">Computers</span>
        </a>

        {/* SmartWatch */}
        <a href="#" className="group flex flex-col items-center justify-center p-6 h-40 border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition-colors">
          {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-gray-800 group-hover:stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg> */}
          <img   src={SmartWatch} alt="" />
          <span className="mt-4 font-semibold">SmartWatch</span>
        </a>

        {/* Camera  */}
        <a href="#" className="group flex flex-col items-center justify-center p-6 h-40 border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.776 48.776 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
          </svg>
         
          <span className="mt-4 font-semibold">Camera</span>
        </a>

        {/* HeadPhones */}
        <a href="#" className="group flex flex-col items-center justify-center p-6 h-40 border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition-colors">
           {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-gray-800 group-hover:stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg> */}
          <img   src={Headphone} alt="" />
          <span className="mt-4 font-semibold">HeadPhones</span>
        </a>

        {/* Gaming */}
        <a href="#" className="group flex flex-col items-center justify-center p-6 h-40 border border-gray-300 rounded-md hover:bg-red-500 hover:text-white transition-colors">
           {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-14 h-14 text-gray-800 group-hover:stroke-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg> */}
            <img   src={Gamepad} alt="" />
          <span className="mt-4 font-semibold">Gaming</span>
        </a>

      </div>
    </section>
  );
};

export default Category;
