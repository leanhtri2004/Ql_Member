import React from 'react'
import user from '../assets/img/user.png'
import club from '../assets/img/club.png'
import booking from '../assets/img/booking.png'
import payment from '../assets/img/payment.png'
import pana from '../assets/img/pana.png'
import tesla from '../assets/img/tesla.png'
import V1 from "../assets/img/V1.png";
import V2 from "../assets/img/V2.png";
import L1 from "../assets/img/L1.png";
import L2 from "../assets/img/L2.png";
import L3 from "../assets/img/L3.png";
export const Testimonials = () => {
  return (
    <div>
        <section id='testimonials' >
            <div className='testimonials-left'>
            
            <h1>Helping a local <p>buniness reinvent itself</p></h1>
            <h5>We reached here with our hard work and dedication</h5>
            </div>
            <div className='testimonials-right'>
                <div className='testmonials-item'>
                    <img src={user} alt="user" />
                     <div className="text">
                  <h2>2,245,341</h2>
                  <p>Members</p>
                      </div>
                    </div>
                     <div className='testmonials-item'>
                    <img src={club} alt="club" />
                    <div className="text">
                     <h2>46,328</h2>
                     <p>Clubs</p>
                     </div>
                    </div>
                     <div className='testmonials-item'>
                    <img src={booking} alt="booking" />
                    <div className="text">
                        <h2>2,828,867</h2>
                    <p>Event bookings</p>
                    </div>
                    </div>
                     <div className='testmonials-item'>
                    <img src={payment} alt="payment" />
                    <div className="text">
                        <h2>1,926,436</h2>
                    <p>Payments</p>
                    </div>
                    </div>
            </div>
            </section>
             <section className='design' >
                    <div className='design-left'>
                      <img src={pana} alt="pana" />
                    </div>
                    <div className='design-right'>
                      <h1>How to design your site footer like we did</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                      </p>
                      <button>Learn More</button>
                      </div>
                </section>

                <section className='tesla' >
                        <div className='tesla-left'>
                          <img src={tesla} alt="tesla" />
                        </div>
                        <div className='tesla-right'>
                          <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                          <h1>Tim Smith</h1>
                          <p>British Dragon Boat Racing Association</p>
                          <div className='icon'>
                          <img src={V1} alt="V1" />
                           <img src={V2} alt="V2" />
                             <img src={L1} alt="L1" />
                             <img src={L2} alt="L2" />
                             <img src={L3} alt="L3" />
                              
                             <p>Meet all Customers→</p>
                             
                             </div>
                             
                          </div>
                    </section>
    </div>
  )
}
