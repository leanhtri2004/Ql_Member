import { About } from "./component/About"
import { Banner } from "./component/Banner"
import { Client } from "./component/Client"
import { Footer } from "./component/Footer"
import { MenuBar } from "./component/MenuBar"
import { Testimonials } from "./component/Testimonials"
import React, { useEffect } from 'react'
import { Register } from "./component/Register";
import {Routes, Route} from 'react-router-dom';
import { Login } from "./component/Login"

function App() {
const[dark, setDark]=React.useState(false);
    useEffect(()=>{
  //     if (dark) {
  //     document.body.classList.add("dark");
  //     document.body.classList.remove("light");
  //   } else {
  //     document.body.classList.add("light");
  //     document.body.classList.remove("dark");
  //   }
  // }, [dark]);
  document.body.className = dark ? "dark" : "light";
  }, [dark]);
  return (
  <>
   
     
       <MenuBar />

      <Routes>
        {/* Trang chủ */}
        <Route
          path="/"
          element={
            <>
              <Banner />
              <Client />
              <About />
              <Testimonials />
              <Footer />
            </>
          }
        />

        {/* Trang đăng ký */}
        <Route path="/signup" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  </>
  )
}

export default App
