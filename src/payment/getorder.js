// import React, { useEffect, useState } from 'react';
// import Cookies from 'js-cookie';
// import './getorder.css';

// const CheckoutSuccess = () => {
//   const [userorder, setUserorder] = useState([]);
//   const [user, setUser] = useState({});
//   const [details, setDetails] = useState(null);
//   const token = Cookies.get('token');

//   useEffect(() => {
//     const getuser = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:3500/api/auth/getuser', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             auth: token,
//           }
//         });
//         const data = await response.json();
//         setUser(data.email);
//       } catch (error) {
//         console.log('error in response');
//       }
//     };

//     getuser();
//   }, []);

//   useEffect(() => {
//     const fetchGetOrders = async () => {
//       try {
//         const response = await fetch('http://127.0.0.1:3500/api/orderpage/getorders', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             auth: token,
//           }
//         });
//         const data = await response.json();
//         setUserorder(data);
//         console.log(data);
//       } catch (error) {
//         console.log('Error in response:', error);
//       }
//     };
//     fetchGetOrders();
//   }, [token]);

//   const handleOrderDetails = (order) => {
//     setDetails({ order: order.id });
//   };

//   return (
//     <div className='ordersuccess'>
//       <h1>Order Successful!</h1>
//       <p>Your order details:</p>
//       {userorder.length > 0 ? (
//         userorder.map((order, index) => (
//           <React.Fragment key={index}>
//             {order.products && order.products.length > 0 ? (
//               <table className='tablehead'>
//                 <thead>
//                   <tr className='tableroq'>
//                     <th>ProductName</th>
//                     <th>TotalPrice</th>
//                   </tr>
//                 </thead>
//                 <tbody className='table-body'>
//                   {order.products.map((product, productIndex) => (
//                     <tr key={`${index}-${productIndex}`}>
//                       <td>{product.ProductName}</td>
//                       <td>{product.TotalPrice}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             ) : (
//               <p>No products found for this order.</p>
//             )}
//           </React.Fragment>
//         ))
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div>
//   );
// };

// export default CheckoutSuccess;

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './getorder.css';

const CheckoutSuccess = () => {
  const [userorder, setUserorder] = useState([]);
  const [user, setUser] = useState({});
  const [details, setDetails] = useState(null);
  const token = Cookies.get('token');

  useEffect(() => {
    const getuser = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3500/api/auth/getuser', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            auth: token,
          }
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.log('error in response');
      }
    };

    getuser();
  }, []);

  useEffect(() => {
    const fetchGetOrders = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3500/api/orderpage/getorders', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            auth: token,
          }
        });
        const data = await response.json();
        setUserorder(data);
        console.log(data);
      } catch (error) {
        console.log('Error in response:', error);
      }
    };
    fetchGetOrders();
  }, [token]);

  const handleOrderDetails = (order) => {
    setDetails(order);
  };
  const handledetailscancel =() => {
    setDetails(null);
  }

//   return (
//     <div className='ordersuccess'>
//       <h1>Order Successful!</h1>
//       <p>Your order details:</p>
//       {userorder.length > 0 ? (
//         userorder.map((order, index) => (
//           <div key={index}>
//             <table className='tablehead'>
//               <thead>
//                 {index === 0 && (
//                   <tr className='tableroq'>
//                     <th>ProductName</th>
//                     <th>TotalPrice</th>
//                   </tr>
//                 )}
//               </thead>
//               <tbody className='table-body'>
//                 {order.products && order.products.length > 0 ? (
//                   order.products.map((product, productIndex) => (
//                     <tr key={`${index}-${productIndex}`}>
//                       <td>{product.ProductName}</td>
//                       <td>{product.TotalPrice}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr key={`${index}-empty`}>
//                     <td className="empty-row" colSpan="4">No products found</td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         ))
//       ) : (
//         <p>No orders found</p>
//       )}
//     </div>
//   );
// };

return (
 
<div className="user-orders-container">
      <h1>User Orders</h1>
      {Array.isArray(userorder) && userorder.length > 0 ? (
      <table className="order-table">
        <thead>
          <tr>
            <th>Products</th>
            <th>Product Price</th>
            <th>Payment Status</th>
            <th>Order Placed Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userorder.map((order) => (
            <tr className="order-row" key={order._id}>
              <td>
                {order.products.map((product) => (
                  <div key={product._id} className="product-details">
                    <h5>{product.ProductName}</h5>
                  </div>
                ))}
              </td>
              <td>
                <ul className="product">
                  {order.products.map((product) => (
                    <div key={product._id}>
                      <div>
                        <p>{product.Price}</p>
                      </div>
                    </div>
                  ))}
                </ul>
              </td>
              <td >{order.paymentStatus}</td>
              <td> {new Date(order.createdAt).toLocaleDateString()}</td>
              <td>
                <button className="order-details-button" onClick={() => handleOrderDetails(order)}>
                  details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  ):(
    <p>no products found</p>
  )}

{details && (
  <div className='det'>
    <div className='content'>
    <p> <b>Name:</b> { user.firstName}</p>
    <p> <b>Email:</b> { user.email}</p>
    <p><b>transactionid: </b>{details.paymentIntendId}</p>
    <p><b>Payment Status:</b> {details.paymentStatus}</p>
    
    <p className='shipping'><b>Shipping Address:</b> {details.shipping}</p>
  

    {/* {order.products && order.products.length > 0 && (
      <div>
        <p><b>Product Name:</b></p>
        {order.products.map((product, productIndex) => (
          <p key={productIndex}>{product.Price}</p>

          
        ))}
      </div>
    )} */}
    <p><b>order date:</b> {new Date(details.createdAt).toLocaleDateString()}</p>
    <button  className='close' onClick={handledetailscancel}> close</button>
    </div>  </div>
)

}


  </div>
);




    }
    export default CheckoutSuccess;
