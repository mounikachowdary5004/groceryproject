


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

  const handleCancelOrder = async (orderId) => {
    try {
      const response = await fetch(`http://127.0.0.1:3500/api/orderpage/cancelOrders/${orderId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          auth: token,
        }
      });
      const data = await response.json();
      if (data.success) {
        // Update the userorder state to reflect the updated delivery and payment status
        setUserorder((prevUserorder) => {
          const updatedUserOrder = prevUserorder.map((order) => {
            if (order._id === orderId) {
              return {
                ...order,
                deliverstatus: 'Cancelled',
                paymentStatus: 'Failed',
              };
            }
            return order;
          });
          return updatedUserOrder;
        });
        alert('Order Cancelled successfully!');
      } else {
        alert('Failed to cancel order. Please try again.');
      }
    } catch (error) {
      console.log('Error in canceling order:', error);
    }
  };

  const handleOrderDetails = (order) => {
    setDetails(order);
  };

  const handledetailscancel = () => {
    setDetails(null);
  };

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
              <th>Delivery status</th>
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
                <td>{order.paymentStatus}</td>
                <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                <p>{order.deliverstatus}</p>

                <td>
                  <button className="order-details-button" onClick={() => handleOrderDetails(order)}>
                    Details
                  </button>
                  {order.paymentStatus !== 'Refunded' && order.deliverstatus !== 'Cancelled' && (
                    <button className="order-cancel-button" onClick={() => handleCancelOrder(order._id)}>
                      Cancel
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products found</p>
      )}

      {details && (
        <div className="det">
          <div className="content">
            <p>
              <b>Name:</b> {user.firstName}
            </p>
            <p>
              <b>Email:</b> {user.email}
            </p>
            <p>
              <b>Transaction ID:</b> {details.paymentIntendId}
            </p>
            <p>
              <b>Payment Status:</b> {details.paymentStatus}
            </p>

            <p className="shipping">
              <b>Shipping Address:</b> {details.shipping}
            </p>
            <p>
              <b>Order Date:</b> {new Date(details.createdAt).toLocaleDateString()}
            </p>
            <button className="close" onClick={handledetailscancel}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutSuccess;
