import React from 'react'
import footer1 from '../assets/img/footer1.png'
import footer2 from '../assets/img/footer2.png'
import footer3 from '../assets/img/footer3.png'
import '../index.css'
export const Footer = () => {
  return (
    <div>
        <div className='footer' id='footer'>
  <h1>Caring is the new marketing </h1>
  <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
</div>
<section className="blog">
  <div className="blog-card">
    <img src={footer1} alt="footer1" />
    <div className="blog-content">
      <h3>Creating Streamlined Safeguarding Processes with OneRen</h3>
      <a href="/">Read more →</a>
    </div>
  </div>

  <div className="blog-card">
    <img src={footer2} alt="footer2" />
    <div className="blog-content">
      <h3>What are your safeguarding responsibilities and how can you manage them?</h3>
      <a href="/">Read more →</a>
    </div>
  </div>

  <div className="blog-card">
    <img src={footer3} alt="footer3" />
    <div className="blog-content">
      <h3>Revamping the Membership Model with Triathlon Australia</h3>
      <a href="/">Read more →</a>
    </div>
  </div>
</section>
<div className='end'>
 
  <p>© 2024 Nextcent. All rights reserved. | Privacy Policy | Terms of Service</p>
</div>
    </div>
  )
}
