import { useEffect } from 'react';
import './successpage.css';

const CheckoutSuccess = () => {
  const handleOrderDetails = () => {
    window.location.href = "/getorders";
  };

  const handleShopping = () => {
   localStorage.removeItem('cart');
    window.location.href = "/addproduct";
    

  };
  

  useEffect(() => {
 
   localStorage.removeItem('cartItems');
 }, []);

  return (
    <div className='success'>
      <img src={require('../images/ss.jpg')} alt="Login" className="pagelogo" />
      <h1 className='payment'>Payment Successful</h1>
      <p>Thank you for your order!</p>
      <button className='details1' onClick={handleOrderDetails}>Details</button>
      <button className='continue' onClick={handleShopping}>Continue Shopping</button>
    </div>
  );
};

export default CheckoutSuccess;
