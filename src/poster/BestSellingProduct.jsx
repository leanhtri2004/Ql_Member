import React from 'react'
import sale5 from "../assets/img/sale5.png";
import sale4 from "../assets/img/sale4.png";
import best from "../assets/img/best.png";
import best1 from "../assets/img/best1.png";

const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
);

const EyeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
);

const StarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
);
export const BestSellingProduct = () => {
    const ProductCard = ({ product }) => {
    // Destructuring props để code gọn hơn
    const { image, name, price, originalPrice, reviews } = product;

    return (
        <div className="group">
            <div className="relative bg-gray-100 rounded-md flex items-center justify-center p-4 aspect-square mb-4">
                <img src={image} alt={name} className="w-3/4 h-3/4 object-contain" />
                
                <div className="absolute top-3 right-3 flex flex-col space-y-2">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 hover: text-red-500 transition-colors">
                        <HeartIcon />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 hover: text-red-500  transition-colors">
                        <EyeIcon />
                    </button>
                </div>
            </div>
            
            <div>
                <h3 className="font-semibold text-lg">{name}</h3>
                <div className="flex items-center space-x-2 mt-1">
                    <span className="text-red-500 font-medium">${price}</span>
                    {/* Chỉ hiển thị giá gốc nếu có */}
                    {originalPrice && (
                        <span className="text-gray-400 line-through">${originalPrice}</span>
                    )}
                </div>
                <div className="flex items-center mt-1">
                    <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
                    </div>
                    <span className="text-gray-400 ml-2">({reviews})</span>
                </div>
            </div>
        </div>
    );
};
    const productData=[
        {id: 1, name: 'The north coat', price: 260, originalPrice: 360, reviews: 65, image:sale5 },
        {id: 2, name: 'Gucci duffle bag', price: 960, originalPrice: 1160, reviews: 99, image:sale4 },
        {id: 3, name: 'RGB liquid CPU Cooler', price: 375, originalPrice: 170, reviews: 99, image:best },
        {id: 4, name: 'Small BookSelf', price: 370, originalPrice: null, reviews: 99, image:best1 },
    ]
  return (
    <section className='bg-white p-8 font-sans'>
        <div className='mb-8'>
            <div className='flex items-center mb-4'>
                <div className='w-5 h-9 bg-red-500 rounded mr-3'></div>
                <span className='text-red-500 font-semibold'>This Month</span>

            </div>
            <div className='flex flex-wrap justify-between items-end gap-4'>
                <h2 className='text-4xl font-bold text-black'>Best Selling Product</h2>
                <a href="#" className='bg-red-500 text-black px-8 py-3 rounded-md hover:bg-red-600 hover:text-white transition-colors'>
                    View All
                </a>
            </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {productData.map(product=>(
                <ProductCard key={product.id} product={product}/>
            ))}
        </div>

    </section>
  )
}
