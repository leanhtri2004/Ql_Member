import React from "react";
import sale from "../assets/img/sale.png";
import sale1 from "../assets/img/sale1.png";
import sale2 from "../assets/img/sale2.png";
import sale3 from "../assets/img/sale3.png";
import sale4 from "../assets/img/sale4.png";
import sale5 from "../assets/img/sale5.png";
const products = [
  {
    id: 1,
    img: sale,
    title: "HAVIT HV-G92 Gamepad",
    discount: "-40%",
    newPrice: "$120",
    oldPrice: "$160",
    reviews: "(88)",
  },
  {
    id: 2,
    img: sale1,
    title: "AK-900 Wired Keyboard",
    discount: "-35%",
    newPrice: "$960",
    oldPrice: "$1160",
    reviews: "(75)",
  },
  {
    id: 3,
    img: sale2,
    title: "IPS LCD Gaming Monitor",
    discount: "-30%",
    newPrice: "$370",
    oldPrice: "$400",
    reviews: "(99)",
  },
  {
    id: 4,
    img: sale3,
    title: "S-Series Comfort Chair",
    discount: "-25%",
    newPrice: "$375",
    oldPrice: "$400",
    reviews: "(99)",
  },
  {
    id: 5,
    img: sale4,
    title: "S-Series Comfort Chair",
    discount: "-25%",
    newPrice: "$375",
    oldPrice: "$400",
    reviews: "(99)",
  },
  {
    id: 6,
    img: sale5,
    title: "S-Series Comfort Chair",
    discount: "-25%",
    newPrice: "$375",
    oldPrice: "$400",
    reviews: "(99)",
  },
  
];

export const FlashSales = () => {
  return (
    <section id="sale" className="flash-sales">
      <span className="section-subtitle">Today's</span>
      <h1 className="section-title">Flash Sales</h1>

      <div className="product-sales">
        {products.map((item) => (
          <div className="product-item" key={item.id}>
            <div className="product-img-box">
              <div className="discount-badge">{item.discount}</div>
              <img src={item.img} alt={item.title} />
              <div className="overlay">
                <button>Add To Cart</button>
              </div>
              <div className="product-icons">
                <i className="bx bx-heart"></i>
                <i className="bx bx-cart"></i>
              </div>
            </div>
            <h6>{item.title}</h6>
            <div className="price">
              <span className="new">{item.newPrice}</span>
              <span className="old">{item.oldPrice}</span>
            </div>
            <div className="stars">
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bxs-star"></i>
              <i className="bx bx-star"></i>
              <span className="review">{item.reviews}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="btn-view-all">
        <button>View All Products</button>
      </div>
    </section>
  );
};