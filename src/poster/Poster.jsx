import logo_poster from "../assets/img/logo_poster.png";
import purple from "../assets/img/purple.png";
import green from "../assets/img/green.png";
import red from "../assets/img/red.png";

export const Poster = () => {
  return (
    <div >
        <div className='poster'>
        <div className='logo-poster'>
            <img src={logo_poster} alt="logo_poster" />
            </div>
        <nav className='nav-poster'>
            <a href="Home">Home</a>
            <a href="Man">Man</a>
            <a href="Woman">Woman</a>
            <a href="Kids">Kids</a>
            <a href="Sales">Sales</a>
        </nav>
        <div className='icon-poster'>
            <i className='bx bx-search'></i>
            <i className='bx bx-cart'></i>
        </div>
        </div>
        <div className='content-poster'>
            <h1>134$</h1>
            <div className='text-poster'>
            <h2>JORDAN</h2>
            <p>JUMPMAN  2025    PF</p>
        </div>
        <button>exclusive</button>
            </div>
        <div className="footer-poster">
            <div className="left-footer">
           <p>CHOOSE COLOR</p>
           <div className="color-options">
    <img src={purple} alt="purple" />
    <img src={green} alt="green" />
    <img src={red} alt="red" />
  </div>
           </div>
           <div className="content-footer">
            <button>ADD TO CART</button>
            <button>BUY NOW</button>
            </div>
            <div className="right-footer">
                <h4>INSPIRATION</h4>
                <p>Inspired by the design of the latest Air Jordan game shoe, the Jordan Jumpman 2021 helps up-and-coming players level up their game. </p>
                </div>
            </div>
         </div>
   
  )
}
