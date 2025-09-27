import React from 'react'
import V1 from "../assets/img/V1.png";
import V2 from "../assets/img/V2.png";
import L1 from "../assets/img/L1.png";
import L2 from "../assets/img/L2.png";
import L3 from "../assets/img/L3.png";
import L4 from "../assets/img/L4.png";
import buiding from "../assets/img/buiding.png";
import turn from "../assets/img/turn.png";
import member from "../assets/img/member.png";
export const Client = () => {
  return (
    <div className='client'>
      <section id="features">
</section>
        <div className='content'>
        <h1>Our Client</h1> 
        <p>We have been working with some Fortune 500+ clients</p>
        </div>
       <div className="list">
   <img src={V1} alt="V1" />
   <img src={V2} alt="V2" />
   <img src={L4} alt="V3" />
   <img src={L1} alt="L1" />
   <img src={L2} alt="L2" />
   <img src={L3} alt="L3" />
   <img src={L4} alt="L4" />
</div>
<div className='member'>
  <h1>Manage your entire community </h1>
  <h1>in a single system</h1>
  <p>Who is Nextcent suitable for?</p>
</div>
 <section id='member-list'>
      <div className='member-item'>
        <img src={member} alt="member" />
        <h4>{"Membership\n Organisations"}</h4>
        <p>Our membership management software provides full automation of membership renewals and payments</p>
        </div>
        <div className='member-item'>
        <img src={buiding} alt="buiding" />
        <h4>{"National\n Associations"} </h4>
                <p>Our membership management software provides full automation of membership renewals and payments</p>

        </div>
        <div className='member-item'>
        <img src={turn} alt="turn" />
        <h4>{"Clubs And\n Groups"}</h4>
        <p>Our membership management software provides full automation of membership renewals and payments</p>

        </div>
</section>
    </div>
    
  )
}
