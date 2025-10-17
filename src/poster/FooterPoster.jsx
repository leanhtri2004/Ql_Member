import React from 'react'
import {SendOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined} from '@ant-design/icons';
import qrcode from '../assets/img/qrcode.png';
import google from '../assets/img/google.png';
import appstore from '../assets/img/appstore.png';
export const FooterPoster = () => {
  return (
   <footer className='bg-black text-gray-300 py-16 px-8 md:px-16 font-sans'>
    <div className='container mx-auto'>

    {/*  Vung chứa 5 cột chính */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10'>

    {/* Cột 1: Exclusive */}
    <div className='flex flex-col gap-4'>
      <h3 className='text-2xl font-bold text-white'>Exclusive</h3>
      <p className='text-lg '>Subscribe</p>
      <p>Get 10% off your first order</p>
      <div className='relative'>
        <input type="email"
        placeholder='Enter your email'
        className='bg-transparent border border-gray-300 rounded py-3 px-4 w-full focus:outline-none focus:ring-1 focus:ring-white'
        />
        <SendOutlined className='absolute right-4 top-1/2  -translate-y-1/2 text-xl'/>
      </div>
    </div>

    {/* === Cột 2: Support === */}
    <div className='flex flex-col gap-4'>
      <h3 className='text-2xl font-bold text-white'>Support</h3>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
           <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
    </div>

    {/* === Cột 3: Account === */}
    <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white">Account</h3>
            <a href="#" className="hover:text-white transition-colors">My Account</a>
            <a href="#" className="hover:text-white transition-colors">Login / Register</a>
            <a href="#" className="hover:text-white transition-colors">Cart</a>
            <a href="#" className="hover:text-white transition-colors">Wishlist</a>
            <a href="#" className="hover:text-white transition-colors">Shop</a>
          </div>
     {/* === Cột 4: Quick Link === */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white">Quick Link</h3>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms Of Use</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* === Cột 5: Download App === */}
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-bold text-white">Download App</h3>
            <p className="text-xs text-gray-400">Save $3 with App New User Only</p>
            <div className="flex gap-2 items-center">
              <img src={qrcode} alt="QR Code" className="w-20 h-20" />
              <div className="flex flex-col gap-2">
                <a href="#"><img src={google} alt="Get it on Google Play" className="h-10" /></a>
                <a href="#"><img src={appstore} alt="Download on the App Store" className="h-10" /></a>
              </div>
            </div>
            <div className="flex gap-6 mt-2">
              <a href="#" aria-label="Facebook" className="text-2xl hover:text-white transition-colors"><FacebookOutlined /></a>
              <a href="#" aria-label="Twitter" className="text-2xl hover:text-white transition-colors"><TwitterOutlined /></a>
              <a href="#" aria-label="Instagram" className="text-2xl hover:text-white transition-colors"><InstagramOutlined /></a>
              <a href="#" aria-label="LinkedIn" className="text-2xl hover:text-white transition-colors"><LinkedinOutlined /></a>
            </div>
          </div>
        </div>

        {/* --- Dòng kẻ ngang và Copyright --- */}
        <div className="border-t border-gray-800 mt-16 pt-6 text-center text-gray-500">
          <p>&copy; Copyright Rimel 2022. All right reserved</p>
        </div>
      </div>

   </footer>
  )
}
