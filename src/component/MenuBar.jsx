import React, { useEffect } from 'react'
import Logo from "../assets/img/Logo.png";
import { Link } from 'react-router-dom';
export const MenuBar = () => {
  const handleScroll = (id) => {
     const section = document.getElementById(id);
     if (section) {
       section.scrollIntoView({ behavior: 'smooth' });
     }
  }
  return (
    <header>
      <a href="/" className="logo">
        <img src={Logo} alt="Logo" />
      </a>
      
      <nav className="navbar">
        {/* Dùng onClick để gọi handleScroll */}
        <span onClick={() => handleScroll("home")}>Home</span>
        <span onClick={() => handleScroll("features")}>Features</span>
        <span onClick={() => handleScroll("community")}>Community</span>
        <span onClick={() => handleScroll("testimonials")}>Testimonials</span>
        <span onClick={() => handleScroll("footer")}>Pricing</span>
        
        <button >
          <Link to='/signup'> Register Now{" "}</Link>
          <i className="bxr bxs-arrow-right-stroke bx-rotate-270"></i>
        </button>
            
      </nav>
      
            
    </header>
  )
}
