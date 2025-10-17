import React, { useEffect, useState } from "react";

import { About } from "./component/About"
import { Banner } from "./component/Banner"
import { Client } from "./component/Client"
import { Footer } from "./component/Footer"
import { MenuBar } from "./component/MenuBar"
import { Testimonials } from "./component/Testimonials"
import { Register } from "./component/Register";
import {Routes, Route} from 'react-router-dom';
import { Login } from "./component/Login"
import { Poster } from "./poster/Poster"
import { FlashSales} from "./poster/FlashSales"
import Category from "./poster/Category";
import { BestSellingProduct } from "./poster/BestSellingProduct";
import Center from "./poster/Center";
import OurProduct from "./poster/OurProduct";
import { NewArrivals } from "./poster/NewArrivals";
import { FooterPoster } from "./poster/FooterPoster";
function App() {
  const [theme, setTheme] = useState("light");
 useEffect(() => {
    const root = document.documentElement; // chính là thẻ <html>
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  }, [theme]);
useEffect(() => {
    AOS.init({
      duration: 1000, // thời gian animation
      once: true,     // chạy 1 lần
    });
  }, []);
  return (
  <>
   
     
       

      <Routes>
        {/* Trang chủ */}
        <Route
          path="/"
          element={
            <>
            <MenuBar />
              <Banner />
              <Client />
              <About />
              <Testimonials />
              <Footer />
             
            </>
          }
        />
        <Route path="/poster" element={<>
             <Poster />
             <FlashSales/>
             <Category/>
             <BestSellingProduct />
             <Center />
             <OurProduct />
             <NewArrivals />
            <FooterPoster />

         </>} />
        {/* Trang đăng ký */}
        <Route path="/signup" element={<Register />} />
         {/* Trang đăng nhập */}
        <Route path="/login" element={<Login />} />
      </Routes>
  </>
  )
}

export default App
