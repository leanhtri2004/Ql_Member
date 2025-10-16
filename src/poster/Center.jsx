import React from 'react'


import Frame from "../assets/img/Frame.png";
export const Center = () => {
    const Count =({value, label})=>{
        return (
            <div className='bg-white text-black rounded-full w-20 h-20 sm:w-24 sm:h-24 flex flex-col items-center justify-center shadow-lg'>
                <span className='text-2xl sm:text-3xl font-bold'>{value}</span>
                <span className='text-xs'>{label}</span>
            </div>

        );
    };
  return (
    <section className='w-full text-white bg-black'>
        <div className='container mx-auto flex flex-col md:flex-row items-center gap-8 sm:gap-12 px-6 py-16'>
            {/* Bên trái */}
            <div className='md:w-1/2 flex flex-col gap-6 text-center md:text-left'>
            <span className='font-semibold text-green-400'>Categories</span>
            <h1 className='text-5xl lg-text-6xl font-bold leading-tight'>
                Enhance Your Music Experience
            </h1>
            <div className='flex justify-center md:justify-start space-x-2 sm:space-x-4 my-4'>
                        <Count value="23" label="Hours" />
                        <Count value="05" label="Days" />
                        <Count value="59" label="Minutes" />
                        <Count value="35" label="Seconds" />
            </div>
            <div className='mt-4'>
                <button className='bg-green-500 text-white font-bold px-12 py-4 rounded hover:bg-green-600 transition'>
                    Buy Now!
                </button>
            </div>
            </div>
            {/* Bên phải */}
            <div className='md:w-1/2 mt-8 md:mt-0'>
            <img src={Frame} alt="JBL Boombox Speaker" className='w-full h-auto' />
            </div>
        </div>
    </section>
  )
}
export default Center;