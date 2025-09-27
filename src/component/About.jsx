import React from 'react'
import rafiki from '../assets/img/rafiki.png'
export const About = () => {
  return (
    <section className='about' id="community" >
        <div className='about-left'>
          <img src={rafiki} alt="rafiki" />
        </div>
        <div className='about-right'>
          <h1>The unseen of spending three years at Pixelgrade</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>
          <button>Learn More</button>
          </div>
    </section>
    
  )
}
