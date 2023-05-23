import React, {useState} from 'react';
 import Navbar from '../nav/nav';
 import './homepage.css';
 import { Link } from 'react-router-dom';

function Homepage(){
    return (
       
            <div className="wrapper">
          
            

      
           
             <ul className='dynamic-txts'>
                <br></br><br></br><br></br>
                <h2>WELCOME TO FAMILY GROCERY </h2>
                 <li><span> Shop  </span></li>
                 <li><span>with  Us Today! </span></li>
                 {/* <li><span> Today! </span></li> */}
                 <li><span> To Fulfill </span></li>
                 <li><span> your family needs!!</span></li>
            </ul>
            {/* <img src={require('../images/girl.jpg')}  className="fruits" /> */}
            {/* <img src={require('../images/f1.jpg')} className="fruits1" />
            <img src={require('../images/f2.jpg')} className="fruits2" /> */}
            {/* <img src={require('../images/pizza.webp')} className="fruits3" /> */}
            
            {/* <p className='jjj'> hii</p> */}
       {/* <p>Shop at</p>
            <p>Family Grocery</p>
            <p>To FulFill</p>            <p>
            your family needs!!
            </p> */}
    
{/*   
<div className="shop-now-buttons-container">
  <div className="shop-now-button">
  <div className="shop-now-button2">
     

    <Link to="/addproduct?category=Sweets">
      <button>SWEETS</button>
      
    </Link>
    </div>
  </div>
  <div className="shop-now-button">
  <div className="shop-now-button1">
    <Link to="/addproduct?category=Fruits">
      <button>FRUITS</button>
    </Link>
  </div>
  </div>
  <div className="shop-now-button">
  <div className="shop-now-button3">
    <Link to="/addproduct?category=Vegetables">
      <button>VEGETABLES</button>
    </Link>
  </div>
  </div>
  <div className="shop-now-button">
  <div className="shop-now-button4">
    <Link to="/addproduct?category=Snacks">
      <button>SNACKS</button>
    </Link>
  </div>
  </div>
  <div className="shop-now-button">
  <div className="shop-now-button5">
    <Link to="/addproduct?category=Bakery">
      <button>BAKERY</button>
    </Link>
  </div>
  </div>
  <div className="shop-now-button">
  <div className="shop-now-button6">
    <Link to="/addproduct?category=Beverages">
      <button>BEVERAGES</button>
    </Link>
  </div>
  </div>
</div> */}


    
</div>


     
    )
}
export default Homepage;

// import React, { useState, useEffect } from "react";
// import "./homepage.css";

// const images = [
//   "https://media.istockphoto.com/id/1352758440/photo/paper-shopping-food-bag-with-grocery-and-vegetables.jpg?b=1&s=170667a&w=0&k=20&c=iKgsDK_4spbF8uECRQcmeebr1RSh2SnHDPM3FS2aaco=",
//   "https://img.freepik.com/premium-photo/shopping-bag-full-fresh-fruits-vegetables-with-assorted-ingredients_8087-2232.jpg",
//   "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&w=1000&q=80",
// ];

// const DELAY = 10000;

// function Homepage() {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((index + 1) % images.length);
//     }, DELAY);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       className="background-image"
//       style={{ backgroundImage: `url(${images[index]})` }}
//     >
//       {/* <h1>Background Image Slider</h1> */}
//     </div>
//   );
// }

// export default Homepage;


