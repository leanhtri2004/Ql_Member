import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CarOutlined, CustomerServiceOutlined, SafetyCertificateOutlined } from '@ant-design/icons';
import ps5Image from '../assets/img/ps5Image.png';
import collectionImage from '../assets/img/collectionImage.png';
import speakersImage from '../assets/img/speakersImage.png';
import perfumeImage from '../assets/img/perfumeImage.png';





const ProductCard = ({ image, title, description, className = '', aos, aosDelay }) => {
  
  return (
    <div className={`group relative h-full w-full overflow-hidden rounded-md bg-black ${className}`} 
    data-aos={aos}
    // Bỏ data-aos-duration để dùng giá trị global 1200ms từ AOS.init
data-aos-delay={String(aosDelay)}     
>

      <img src={image} alt={title}
        className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      <div className="absolute bottom-8 left-8 text-white">
        <h3 className="text-2xl lg:text-3xl font-bold">{title}</h3>
        {description && <p className="mt-1 max-w-xs text-sm text-gray-300">{description}</p>}
        <a href="#" className="mt-4 inline-block font-semibold underline decoration-2 underline-offset-4 transition-colors hover:text-gray-200">
          Shop Now
        </a>
      </div>
    </div>
  );
};

// ServiceItem (Để tái sử dụng cho các mục dịch vụ)
const ServiceItem = ({ icon, title, description, aosDelay }) => {
  return (
    <div 
      className="flex flex-col items-center text-center"
      data-aos="fade-up"           // Hiệu ứng đồng nhất cho tất cả các dịch vụ
      data-aos-duration="1000"
      data-aos-delay={aosDelay}    // Độ trễ xếp tầng
    >
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-black">
        {/*  React.cloneElement để thêm style cho icon được truyền vào */}
        {icon && React.cloneElement(icon, { style: { fontSize: '28px' } })}
      </div>
      <h3 className="font-bold text-sm tracking-wider uppercase mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

// Component chính: NewArrivals
export const NewArrivals = () => {
  
  useEffect(() =>{
    AOS.init({
      duration:1200,
      once:false,
    })
  },[]);
  return (
    <section className="bg-white text-gray-900 font-sans p-8 md:p-16">
      {/* Phần tiêu đề */}
      <div className="mb-6"
      data-aos='fade-right'
      data-aos-duration='800'
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <p className="text-red-500 font-semibold">Featured</p>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-800">
          New Arrival
        </h1>
      </div>


      {/* Phần lưới sản phẩm */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24" style={{ minHeight: '600px' }}>
        
        {/* Cột trái: PlayStation 5 - Chiếm 2 hàng trên MH */}
        <ProductCard
          image={ps5Image}
          title="PlayStation 5"
          description="Black and White version of the PS5 coming out on sale."
          className=" mb-8lg:row-span-2 min-h-[500px] lg:min-h-0"
          aos="fade-right"
          aosDelay="0"
        />

        {/* Cột phải: Chứa 3 sản phẩm còn lại */}
        <div className=" flex flex-col gap-8">
          {/* Box trên: Women's Collections */}
          <ProductCard
            image={collectionImage}
            title="Women's Collections"
            description="Featured woman collections that give you another vibe."
            className="flex-1 min-h-[250px]"
            aos='fade-down'
            aosDelay="300"
          />
          {/* Box dưới: Gồm 2 box nhỏ */}
          <div className="  flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProductCard 
              image={speakersImage} 
              title="Speakers" 
              description="Amazon wireless speakers" 
              className="min-h-[250px]"
              aos='fade-up-right'
              aosDelay="500"
            />
            <ProductCard 
              image={perfumeImage} 
              title="Perfume" 
              description="GUCCI INTENSE OUD EDP" 
              className="min-h-[250px] "
              aos='fade-up-left'
              aosDelay="700"
            />
          </div>
        </div>
      </div>

      {/* Phần dịch vụ */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12  '>
       
   <ServiceItem 
    
      icon={<CarOutlined 
      className='text-white bg-black rounded-full p-3'
      />}
          title="Free and Fast Delivery"
          description="Free delivery for all orders over $140"
          aosDelay="100"
       />
        <ServiceItem
          icon={<CustomerServiceOutlined 
           className='text-white bg-black rounded-full p-3'/>}
          title="24/7 Customer Service"
          description="Friendly 24/7 customer support"
          aosDelay="300"
        />
        <ServiceItem
          icon={<SafetyCertificateOutlined
             className='text-white bg-black rounded-full p-3' />}
          title="Money Back Guarantee"
          description="We return money within 30 days"
          aosDelay="500"
      />
     </div>
    </section>
  );
};

export default NewArrivals;