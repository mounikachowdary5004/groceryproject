
// import React, { useState, useEffect } from 'react';
// import './Cart.css';

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem('cart')); 
//     if (data) {
//       setCart(data);
//       //updated with quantity of the current itemso
//       setCount(data.reduce((sum, item) => sum + item.Quantity, 0));
//     }
//   }, []);

//   const handleRemoveItem = (index) => {
//     const updatedCart = [...cart];
//     updatedCart.splice(index, 1);
//     setCart(updatedCart);
//     setCount(updatedCart.reduce((sum, item) => sum + item.Quantity, 0));
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   }

//   const handleClearCart = () => {
//     setCart([]);
//     setCount(0);
//     localStorage.removeItem('cart');
//   }

//   return (
//     <div className='carts'>
//       <div className='cart-count'>{count}</div>
//       {cart.length > 0 ? (
//         <div>
//           {cart.map((item, index) => (
//             <div className='cs' key={index}>
//               <img src={item.Image} alt={item.ProductName} className='logo5' />
//               <div className='jjj'>
//                 <p>{item.ProductName}</p>
//                 <p>{item.Quantity} kg</p>
//                 <p>{item.Price}/-</p>
//               </div>
//               <button onClick={() => handleRemoveItem(index)}>Remove</button>
//             </div>
//           ))}
//           <button onClick={handleClearCart} className='clear'>Clear Cart</button>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;




// import React, { useState, useEffect } from 'react';
// import './Cart.css';

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const data = JSON.parse(localStorage.getItem('cart')); 
//     if (data) {
//       setCart(data);
//       setCount(data.reduce((sum, item) => sum + item.Quantity, 0));
//     }
//   }, []);

//   const handleRemoveItem = (index) => {
//     const updatedCart = [...cart];
//     updatedCart.splice(index,1);
//     setCart(updatedCart);
//     setCount(updatedCart.reduce((sum, item) => sum + item.Quantity, 0));
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   }

//   const handleClearCart = () => {
//     setCart([]);
//     setCount(0);
//     localStorage.removeItem('cart');
//   }

//   const handleIncreaseQuantity = (index) => {
//     const updatedCart = [...cart];
//     updatedCart[index].Quantity += 1;
//     setCart(updatedCart);
//     setCount(updatedCart.reduce((sum, item) => sum + item.Quantity, 0));
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   }

//   const handleDecreaseQuantity = (index) => {
//     const updatedCart = [...cart];
//     if (updatedCart[index].Quantity > 1) {
//       updatedCart[index].Quantity -= 1;
//       setCart(updatedCart);
//       setCount(updatedCart.reduce((sum, item) => sum + item.Quantity, 0));
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     }
//   }


//   return (
//     <div className='carts'>
//       <div className='cart-count'>{count}</div>
//       {cart.length > 0 ? (
//         <div>
//           {cart.map((item, index) => (
//             <div className='cs' key={index}>
//               <img src={item.Image} alt={item.ProductName} className='logo5' />
//               <div className='jjj'>
//                 <p>{item.ProductName}</p>
//                 <div>
//                   <button onClick={() => handleDecreaseQuantity(index)}>-</button>
//                   <p>{item.Quantity} kg</p>
//                   <button onClick={() => handleIncreaseQuantity(index)}>+</button>
//                 </div>
//                 <p>{item.Price}/-</p>
//               </div>
//               <button onClick={() => handleRemoveItem(index)}>Remove</button>
//             </div>
//           ))}
//           <button onClick={handleClearCart} className='clear'>Clear Cart</button>
//         </div>
//       ) : (
//         <p>Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;




// import React, { useState, useEffect } from 'react';
// import './Cart.css';
// import Cookies from 'js-cookie';
// import { Link } from 'react-router-dom';

// const Cart = () => {
//   const [cart, setCart] = useState([]);
//   const [count, setCount] = useState(0);
//   const [totalPrice, setTotalPrice] = useState(0);

//   useEffect(() => {
  
  
//     const data = JSON.parse(localStorage.getItem('cart')); 
//     if (data) {
//       setCart(data);
//       setCount(data.reduce((sum, item) => sum + item.Quantity, 0));
//       setTotalPrice(data.reduce((sum, item) => sum + item.TotalPrice, 0));
//     }
//   }, [cart]);

//   const handleRemoveItem = (index) => {
//     const updatedCart = [...cart];
//     updatedCart.splice(index,1);
//     setCart(updatedCart);
//     setCount(updatedCart.reduce((sum, item) => sum + item.Quantity, 0));
//     setTotalPrice(updatedCart.reduce((sum, item) => sum + item.TotalPrice, 0));
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   }

//   const handleClearCart = () => {
//     setCart([]);
//     setCount(0);
//     setTotalPrice(0);
//     localStorage.removeItem('cart');
//   }

//   const handleIncreaseQuantity = (index) => {
//     const updatedCart = [...cart];
//     updatedCart[index].Quantity += 1;
//     updatedCart[index].TotalPrice = updatedCart[index].Quantity * updatedCart[index].Price;
//     setCart(updatedCart);
//     setCount(updatedCart.reduce((sum, item) => sum + item.Quantity, 0));
//     setTotalPrice(updatedCart.reduce((sum, item) => sum + item.TotalPrice, 0));
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   }

//   const handleDecreaseQuantity = (index) => {
//     const updatedCart = [...cart];
//     if (updatedCart[index].Quantity > 1) {
//       updatedCart[index].Quantity -= 1;
//       updatedCart[index].TotalPrice = updatedCart[index].Quantity * updatedCart[index].Price;
//       setCart(updatedCart);
//       setCount(updatedCart.reduce((sum, item) => sum + item.Quantity, 0));
//       setTotalPrice(updatedCart.reduce((sum, item) => sum + item.TotalPrice, 0));
//       localStorage.setItem('cart', JSON.stringify(updatedCart));
//     }
//   }

//   return (
//     <div className="cart-container">
//     <h1 className="mycart">My Cart</h1>
//     {cart.length === 0 ? (
//       <div>
//         <img
//           src={require("../images/empty.png")}
//           alt="Cart"
//           className="pagelogo1"
//         />
//         <p className="cartempty">Your cart is empty</p>
//       </div>
//     ) : (
//       <div>
//         <table>
//           <thead>
//             <tr>
//               <th>Image</th>
//               <th>Name</th>
//               <th>Price</th>
//               <th>Quantity</th>
//               <th>Total Price</th>
//               <th>Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cart.map((item, index) => (
//               <tr key={index} className="cart-item">
//                 <td className="cart-item-image">
//                   <img src={item.Image} alt={item.ProductName} />
                 
//                 </td>
//                 <td className="cart-item-name">  {item.ProductName} </td>
//                 <td className="cart-item-price">{item.Price} /-</td>
//                 <td className="cart-item-quantity">
//                   <button onClick={() => handleDecreaseQuantity(index)}>-</button>
//                   <span>{item.Quantity}</span>
//                   <button onClick={() => handleIncreaseQuantity(index)}>+</button>
//                 </td>
//                 <td className="cart-item-total-price">{item.TotalPrice} /-</td>
//                 <td className="cart-item-remove">
//                   <button onClick={() => handleRemoveItem(index)}>
//                     <img
//                       src={require("../images/delete.png")}
//                       alt="Cart"
//                       className="delete"
//                     />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
  
//         <div className="fixed-top-right">
//   <div className="cart-total">
//     Total Items: {cart.reduce((acc, item) => acc + item.Quantity, 0)}
//   </div>
//   <div className="cart-total">
//     Total Price: {cart.reduce((acc, item) => acc + item.TotalPrice, 0)} /-
//   </div>
// </div>
//         <button onClick={handleClearCart} className="clear">Clear Cart</button> 
//       </div>
//     )}
//     <div className="Checkout">
//       <Link to="/Checkout">Proceed to buy</Link>
//     </div>
  
  
      
    
//   </div>
// )}
//   ;
            
// export default Cart;






import React, { useState, useEffect } from 'react';
import Payment1 from '../payment/payment1';
import './Cart.css';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
// import PayButton from '../payment/payment';

const Cart = () => {
  const [cartItems, setCart] = useState([]);
  const [count, setCount] = useState(0);
  const [addressList, setAddressList] = useState([]);
  const [customeraddress, setCustomeraddress]=useState('');
  console.log(addressList)
  const token = Cookies.get('token');
  const [userid, setUserid] = useState({});


  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const getuser = async () => {
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

  getuser()
},[]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!token) {
          setTimeout(() => {
            alert('Please log in once again');
            window.location.href = '/login';
          }, 3000);
        } else {
          const data = JSON.parse(localStorage.getItem('cart'));
          if (data) {
            const filteredCart = data.filter((item) => item.userid === userid); // filter the products based on email id
            setCart(filteredCart);
            console.log(filteredCart)
            setCount(filteredCart.reduce((sum, item) => sum + item.Quantity, 0));
            setTotalPrice(filteredCart.reduce((sum, item) => sum + item.TotalPrice, 0));
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchData();
  }, [token, userid]);
  

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index,1);
    setCart(updatedCart);
    setCount(updatedCart.reduce((sum, item) => sum + item.Quantity, 0));
    setTotalPrice(updatedCart.reduce((sum, item) => sum + item.TotalPrice, 0));
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  useEffect(() => {
    const token = Cookies.get('token');

    const fetchAddressData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3500/api/auth/get_address', {
          headers: { 'auth': token },
        });
        const result = await response.json();
        console.log(result);
        setAddressList(result)
        // setSuccess(true)
      } catch (error) {
        console.log('error in response');
      }
    };
    fetchAddressData();
  }, []);

  const handleClearCart = () => {
    setCart([]);
    setCount(0);
    setTotalPrice(0);
    localStorage.removeItem('cart');
  }

  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].Quantity += 1;
    updatedCart[index].TotalPrice = updatedCart[index].Quantity * updatedCart[index].Price;
    setCart(updatedCart);
    setCount(updatedCart.reduce((sum, item) => sum + item.Quantity, 0));
    setTotalPrice(updatedCart.reduce((sum, item) => sum + item.TotalPrice, 0));
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  }

  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].Quantity > 1) {
      updatedCart[index].Quantity -= 1;
      updatedCart[index].TotalPrice = updatedCart[index].Quantity * updatedCart[index].Price;
      setCart(updatedCart);
      setCount(updatedCart.reduce((sum, item) => sum + item.Quantity, 0));
      setTotalPrice(updatedCart.reduce((sum, item) => sum + item.TotalPrice, 0));
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  }
  const handleTransactionComplete = () => {
   
    setCart([]);
    setCount(0);
    setTotalPrice(0);
    localStorage.removeItem('cart');
  };

  const selectedAddress = localStorage.getItem('selectedAddress')
  

  return (
    <div className="cart-container">
      
    <h1 className="mycart">My Cart</h1>
    {cartItems.length === 0 ? (
      <div className='cart-container1'>
        <img
          src={require("../images/empty.png")}
          alt="Cart"
          className="pagelogo1"
        />
        <p className="cartempty">Your cart is empty</p>
      </div>
    ) : (
      <div>
         <button onClick={handleClearCart} className="clear">Clear Cart</button> 
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Delete</th>
              {/* <th>edit</th> */}
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="cart-item">
                <td className="cart-item-image">
                  <img src={item.Image} alt={item.ProductName} />
                 
                </td>
                <td className="cart-item-name">  {item.ProductName} </td>
                <td className="cart-item-price">{item.Price} /-</td>
                <td className="cart-item-quantity">
                  <button onClick={() => handleDecreaseQuantity(index)}>-</button>
                  <span>{item.Quantity}</span>
                  <button onClick={() => handleIncreaseQuantity(index)}>+</button>
                </td>
                <td className="cart-item-total-price">{item.TotalPrice} /-</td>
                <td className="cart-item-remove">
                  <button onClick={() => handleRemoveItem(index)}>
                    <img
                      src={require("../images/1111.png")}
                      alt="Cart"
                      className="delete"
                    />
                  </button>
                </td>
             
              </tr>
            ))}
          </tbody>
        </table>
        {/* <button>
                 <PayButton cartItems= {cart}/> 
                </button>
   */}
        <div className="fixed-top-right">
          <p className='middle'> Order Summary </p>
  <div className="cart-total">
    Total Items: {cartItems.reduce((acc, item) => acc + item.Quantity, 0)}
  
  </div>

  <div className="cart-total">
    Total Price: {cartItems.reduce((acc, item) => acc + item.TotalPrice, 0)} /-
  </div>
  
            {/* <div className='cartt' >
            <Payment1 cartItems={cartItems} addressList={addressList} />
            

            </div> */}
            <br>
            </br>
 

 
</div>
<div className="fixed-top-right8">
              
  <label>Select address:</label>
  <select className="address-dropdown"     onChange={(e) =>
                    localStorage.setItem("selectedAddress", e.target.value)
                  }>
    <option value="">Select Address</option>
    {addressList && addressList.addresses ? (
      addressList.addresses.map((address) => (
        <option key={address._id} value={JSON.stringify(address)}>
          {address.houseNumber}, {address.city}, {address.state}, {address.zipCode},
        </option>
      ))
    ) : (
      <option >No addresses found</option>
    )}
  </select>
{selectedAddress && Object.keys(selectedAddress).length !== 0 ? (
  <div>
    <br></br>
    <Payment1 cartItems={cartItems} addressList={selectedAddress}  />
    {/* Render the checkout button */}
    {/* <button>Proceed to Checkout</button> */}
  </div>
) : (
  <div>
    <p className="address-placeholder">Please select an address.</p>
    {/* Render a disabled or non-clickable button to indicate that an address is required */}
    {/* <button disabled>Proceed to Checkout</button> */}
  </div>
)}




</div>

            
            </div>


    
      
    )}
  
{/*     
  <button>
        
       Proceed to buy
       </button> */}
    

   
     {/* <div className="fixed-top-right1">
    <div className="Checkout">
      <Link to="/PayPalPayment">Proceed to buy</Link>
    </div>
    </div> */}




  
  

            
    
  </div>
  
)}
  ;
            
export default Cart;