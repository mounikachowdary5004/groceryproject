


// import React, { useEffect, useState } from 'react';
// import { json, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// // import Navbar from '../nav/nav';
// import './product.css';
// // import { Link } from 'react-router-dom';

// const Product = ( Image,ProductName) => {
//   const [userProduct, setUserProduct] = useState([])
//   const [differ, setdiffer] = useState('');
//   const [cart, setCart] = useState('');
//   const [message,setmessage] =useState(false)
//     const token = Cookies.get('token');
//     const navigate=useNavigate()

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:3500/api/auth/getproduct', {
//           method: 'GET',
//           headers: {
//             "Content-Type": "application/json",
//             "auth": token,
//           }
//         });
//         console.log(response)
//         if (response!== 400) { 
//           const data = await response.json();
//           setUserProduct(data);
//         }
//       } catch(error) {
//         console.log('error in response');
//       }
//     };
//     fetchProduct();
//   }, []);



//   //
//   const handleFilter = (event) => {
//     setdiffer(event.target.value);
 
   
//   };
//   const filterProducts = differ ? userProduct.filter((data) => data.category === differ) : userProduct;


//   const handleCartClick = (event,data) =>{
//     event.preventDefault();
    
//     if(!token){
//       // alert("Please log in to add items to your cart", "warning");
//       setmessage(true);
//       setTimeout(() => {
//         setmessage(false)
//           navigate('/login')
//       }, 1000);
//     }
//     else{
//       setmessage(true);
//       setTimeout(() => {
//         setmessage(false)
          
//       }, 1000);
//       const cartstorage = localStorage.getItem('cart') //rexisting cart

       
//         const cart = cartstorage ? JSON.parse(cartstorage) : [];//data to array
       
//         const newCart = [ ...cart, data];// new product to carte
      
//         const newCartStorage= JSON.stringify(newCart);//convertinguclwn
//         localStorage.setItem('cart',newCartStorage) //setting the newcart to local storage
//         setCart(newCart);//update
       
//       }
//       // alert("Item added to cart ", "success");
//     };


//   return (
  
   

//       <div className='btn6'>
//           {/* <Navbar /> */}
//          <div className='btn'>
//           <button value="" onClick={handleFilter}> All</button>
//         <button value='Sweets' onClick={handleFilter}>Sweets</button>
//         <button value='Fruits' onClick={handleFilter}>Fruits</button>
//         <button value='Vegetables' onClick={handleFilter}>Vegetables</button>
//         <button value='Beverages' onClick={handleFilter}>Beverages</button>
//         <button value='Snaks' onClick={handleFilter}>Snaks</button>
//         <button value='Cakes' onClick={handleFilter}>Bakery, Cakes & Dairy</button>
//         <button value='Ready' onClick={handleFilter}>Ready To Cook  & Eat </button>
//       </div>
    
//        <br></br> <br></br>
//        {message && (token ? (
//         <div className='messagesuccess'>Item added to cart"</div>
//       ):(
//         <div className='messageunsuccess'>please Login to add items to cart </div>
//       ))}
       
//          <div className='shopping-cards'>
//         {filterProducts.map((data, index) => (
//           <form className='productform' key={index}>
//             <img src={data.Image} alt={data.Image}></img>
//             <br></br>
//             <div className='details'>
//               <br></br>
//             <p className='ProductName'> {data.ProductName}
//             </p><p className='Price'>
//               {data.Price}/- </p></div>
//             {/* <b className='category'>{data.category} </b> */}
//             <b className='Quantity'>{data.Quantity} kg</b>
//             <button onClick={(event) => handleCartClick(event, data)}>ADD TO CART</button>
//           </form>
//         ))}
//       </div>
      
     
//         </div>
  
        
//   );
//         }


// export default Product;






// import React, { useEffect, useState } from 'react';
// import { json, useNavigate } from 'react-router-dom';
// import Cookies from 'js-cookie';
// // import Navbar from '../nav/nav';
// import './product.css';
// // import { Link } from 'react-router-dom';

// const Product = ( Image,ProductName) => {
//   const [userProduct, setUserProduct] = useState([])
//   const [differ, setdiffer] = useState('');
//   const [cart, setCart] = useState('');
//   const [message,setmessage] =useState(false)
//     const token = Cookies.get('token');
//     const navigate=useNavigate()

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:3500/api/auth/getproduct', {
//           method: 'GET',
         
//         });
//         console.log(response)
//         if (response!== 400) { 
//           const data = await response.json();
//           setUserProduct(data);
//         }
//       } catch(error) {
//         console.log('error in response');
//       }
//     };
//     fetchProduct();
//   }, []);



//   //
//   const handleFilter = (event) => {
//     setdiffer(event.target.value);
 
   
//   };
//   const filterProducts = differ ? userProduct.filter((data) => data.category === differ) : userProduct;


//   const handleCartClick = (event, data) => {
//     event.preventDefault();
  
//     if (!token) {
//       setmessage(true);
//       setTimeout(() => {
//         setmessage(false)
//         navigate('/login')
//       }, );
//       // alert("please login ")
//       // navigate('/login')
//     } else {
//       setmessage(true);
//       setTimeout(() => {
//         setmessage(false)
//       }, 1000);
  
//       const cartstorage = localStorage.getItem('cart'); // existing cart
//       const cart = cartstorage ? JSON.parse(cartstorage) : []; // convert cart to array
  
//       const newProduct = {
//         ...data,
//         Quantity: Number(data.Quantity), // convert quantity to number
//         Price: Number(data.Price), // convert price to number
//       };
      
//       // calculate total price based on quantity
//       const totalPrice = newProduct.Quantity * newProduct.Price;
  
//       // add total price to product object
//       const newProductWithTotalPrice = {
//         ...newProduct,
//         TotalPrice: totalPrice,
//       };
  
//       const newCart = [...cart, newProductWithTotalPrice]; // add new product to cart
  
//       const newCartStorage = JSON.stringify(newCart); // convert to string
//       localStorage.setItem('cart', newCartStorage); // update local storage
//       setCart(newCart); // update state
//     }
//   };
  


//   return (
  
   

//       <div className='btn6'>
//           {/* <Navbar /> */}
//          <div className='btn'>
//           <button value="" onClick={handleFilter}> All</button>
//         <button value='Sweets' onClick={handleFilter}>Sweets</button>
//         <button value='Fruits' onClick={handleFilter}>Fruits</button>
//         <button value='Vegetables' onClick={handleFilter}>Vegetables</button>
//         <button value='Beverages' onClick={handleFilter}>Beverages</button>
//         <button value='Snaks' onClick={handleFilter}>Snaks</button>
//         <button value='Cakes' onClick={handleFilter}>Bakery, Cakes & Dairy</button>
//         <button value='Ready' onClick={handleFilter}>Ready To Cook  & Eat </button>
//       </div>
    
//        <br></br> <br></br>
//        {message && (token ? (
//         <div className='messagesuccess'>Item added to cart"</div>
//       ):(
//         <div className='messageunsuccess'>please Login to add items to cart </div>
//       ))}
       
//          <div className='shopping-cards'>
//         {filterProducts.map((data, index) => (
//           <form className='productform' key={index}>
//             <img src={data.Image} alt={data.Image}></img>
//             <br></br>
//             <div className='details'>
//               <br></br>
//             <p className='ProductName'> {data.ProductName}
//             </p><p className='Price'>
//               {data.Price}/- </p></div>
//             {/* <b className='category'>{data.category} </b> */}
//             <b className='Quantity'>{data.Quantity} kg</b>
//             <button onClick={(event) => handleCartClick(event, data)}  > ADD TO CART</button>
//           </form>
//         ))}
//       </div>
      
     
//         </div>
  
        
//   );
//         }


// export default Product;


import React, { useEffect, useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useLocation } from 'react-router-dom';
import './product.css';

const Product = () => {
  const [userProduct, setUserProduct] = useState([]);
  const [userid, setUserid] = useState({});
  const [differ, setdiffer] = useState('');
  const [cartItems, setCart] = useState('');
  const [message, setMessage] = useState(false);
  const token = Cookies.get('token');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const category = new URLSearchParams(location.search).get('category');
  useEffect(() => {
    const userid = async () => {
      try{     
        const response = await fetch('http://127.0.0.1:3500/api/auth/getuser', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "auth": token,
        }
        });
        // console.log(response)
        const data = await response.json();
        setUserid(data.email);
     } catch(error){
    console.log("error in response");
    }

  };    
 
  userid()
},[]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:3500/api/auth/getproduct?searchQuery=${searchQuery}`,
        {
          method: 'GET',
        }
      );
      if (response.status === 200) {
        const data = await response.json();
        setUserProduct(data);
      }
    } catch (error) {
      console.log('error in response');
    }
  };
  



  
  useEffect(() => {
    fetchProduct();
  }, [searchQuery]);

  const handleFilter = (event) => {
    setdiffer(event.target.value);
  };

  const filterProducts = differ ? userProduct.filter((data) => data.category === differ) : userProduct;

  const handleCartClick = (event, data) => {
    event.preventDefault();
  
    if (!token) {
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
        navigate('/login');
      }, 1000);
    } else {
      setMessage(true);
      setTimeout(() => {
        setMessage(false);
      }, 1000);
  
      const cartstorage = localStorage.getItem('cart'); // existing cart
      const cartItems = cartstorage ? JSON.parse(cartstorage) : []; // convert cart to array
  
      const newProduct = {
        ...data,
        userid,
        Quantity: Number(data.Quantity), // convert quantity to number
        Price: Number(data.Price), // convert price to number
      };
  
      // calculate total price based on quantity
      const totalPrice = newProduct.Quantity * newProduct.Price;
  
      // add total price to product object
      const newProductWithTotalPrice = {
        ...newProduct,
        TotalPrice: totalPrice,
      };
  
      const newCart = [...cartItems, newProductWithTotalPrice]; // add new product to cart
  
      const newCartStorage = JSON.stringify(newCart); // convert to string
      localStorage.setItem('cart', newCartStorage); // update local storage
      setCart(newCart); // update state
    }
  };
  
  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   fetchProduct();
  // };

  return (
    <div className='btn6'>
      <div className='btn'>
        <button value='' onClick={handleFilter}>
          All
        </button>
        <button value='Sweets' onClick={handleFilter}>
          Sweets
        </button>
        <button value='Fruits' onClick={handleFilter}>
          Fruits
        </button>
        <button value='Vegetables' onClick={handleFilter}>
          Vegetables
        </button>
        <button value='Beverages' onClick={handleFilter}>
          Beverages
        </button>
        <button value='Snaks' onClick={handleFilter}>
          Snaks
        </button>
        <button value='Cakes' onClick={handleFilter}>
          Bakery, Cakes &amp; Dairy
        </button>
        <button value='Ready' onClick={handleFilter}>
          Ready To Cook &amp; Eat
        </button>
        <div>
          
      <input type='text' className='search0' placeholder='Search products......' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      {/* <button onClick={handleSearch}>Search</button> */}
 
    </div>
    {/* <img src={require('../images/search.png')} alt="Logo" className="logo8" /> */}
    
      </div>
     

      <br></br>
      <br></br>
     
      {message && (token ? (
  <div className='messagesuccess'>Item added to cart"</div>
) : (
  <div className='messageunsuccess'>please Login to add items to cart </div>
))}

<div className='shopping-cards'>
  {filterProducts.map((data, index) => (
    <form className='productform' key={index}>
      <img src={data.Image} alt={data.Image}></img>
      <br></br>
      <div className='details'>
        <br></br>
        <p className='ProductName'>{data.ProductName}</p>
        <p className='Price'>{data.Price}/- </p>
      </div>
      {/* <b className='category'>{data.category} </b> */}
      <p className='Quantity'>{data.Quantity} kg</p>
      <button onClick={(event) => handleCartClick(event, data)} className='add'>ADD TO CART</button>
    </form>
  ))}
</div>
</div>
  )};
  export default Product;

