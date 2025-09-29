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

  return (
  <>
   
     
       <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{ position: "fixed",  right: 30, zIndex: 999 }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

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
