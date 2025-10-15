import React from 'react'
import right from "../assets/img/right.png";
export const Banner = () => {
  return (
    
    <div className='banner'>
   

        <div className='left'>
          <section id="home">
    </section>
            <h1>Lessons and insight <p>from 8 years</p></h1>
            <h5>Where to grow your business as a photographer: site or social media?</h5>
            <button>Register</button>
        </div>
        <div className='right'>
            <a href="/" className="logo-right">
                    <img src={right} alt="right" />
                  </a>
        </div>
     
    </div>
  )
}
