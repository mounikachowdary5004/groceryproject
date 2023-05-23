// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const PayPalPayment = () => {
// //   const [amount, setAmount] = useState(0);
// //   const [paymentId, setPaymentId] = useState(null);

// //   const createPayment = async () => {
// //     try {
// //       const response = await axios.post('/api/paypal/create-payment', { amount });
// //       setPaymentId(response.data.paymentId);
// //       window.location = response.data.redirectUrl;
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const executePayment = async () => {
// //     try {
// //       const response = await axios.get(`/api/paypal/execute-payment?paymentId=${paymentId}&PayerID=${localStorage.getItem('payerId')}`);
// //       console.log(response.data);
  
// //       // Check if the payment was successful
// //       if (response.data.state === 'approved') {
// //         console.log('Payment successful!');
// //       } else {
// //         console.log('Payment not successful.');
// //       }
  
// //       localStorage.removeItem('payerId');
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };
  

// //   const handleAmountChange = (event) => {
// //     setAmount(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <h1>Pay with PayPal</h1>
// //       <label htmlFor="amount">Amount:</label>
// //       <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
// //       <button onClick={createPayment}>Pay with PayPal</button>
// //       {paymentId && (
// //         <div>
// //           <label htmlFor="payerId">Enter your PayPal account email:</label>
// //           <input type="text" id="payerId" />
// //           <button onClick={() => { localStorage.setItem('payerId', document.getElementById('payerId').value); executePayment(); }}>Execute Payment</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PayPalPayment;


// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const PayPalPayment = () => {
// //   const [amount, setAmount] = useState(0);
// //   const [paymentId, setPaymentId] = useState(null);

// //   const createPayment = async () => {
// //     try {
// //       const response = await axios.post('http://127.0.0.1:3500/api/auth/api/paypal/create-payment', { amount });
// //       setPaymentId(response.data.paymentId);
// //       window.location = response.data.redirectUrl;
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const executePayment = async () => {
// //     try {
// //       const response = await axios.get(`http://127.0.0.1:3500/api/auth/paypal/execute-payment?paymentId=${paymentId}&PayerID=${localStorage.getItem('payerId')}`);
// //       console.log(response.data);
// //       localStorage.removeItem('payerId');
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleAmountChange = (event) => {
// //     setAmount(event.target.value);
// //   };

// //   return (
// //     <div>
// //       <h1>Pay with PayPal</h1>
// //       <label htmlFor="amount">Amount:</label>
// //       <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
// //       <button onClick={createPayment}>Pay with PayPal</button>
// //       {paymentId && (
// //         <div>
// //           <label htmlFor="payerId">Enter your PayPal account email:</label>
// //           <input type="text" id="payerId" />
// //           <button onClick={() => { localStorage.setItem('payerId', document.getElementById('payerId').value); executePayment(); }}>Execute Payment</button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default PayPalPayment;

// import axios from "axios";
// import { toast } from "react-toastify";
// import { useState } from "react";
// // import "./PayButton.css";

// const Payment = (cart) => {
//   console.log(cart);

//   const [amount, setAmount] = useState(0);
//   const [paymentId, setPaymentId] = useState(null);

//   const handleCheckout = async () => {
//     toast.success("Redirecting to payment mode", {
//       position: "bottom-right",
//       autoClose: 1000,
//     });

//     try {
       
//       const response = await axios.post("http://127.0.0.1:3500/api/auth/create-payment", { amount });
//       setPaymentId(response.data.paymentId);
//       window.location = response.data.redirectUrl;
//     } catch (error) {
//       console.error(error);
//     }
//   };

// //   const handleExecutePayment = async () => {
// //     try {
// //       const response = await axios.get(`http://localhost:5000/api/paypal/execute-payment?paymentId=${paymentId}&PayerID=${localStorage.getItem('payerId')}`);
// //       console.log(response.data);
// //       localStorage.removeItem('payerId');
// //     } catch (error) {
// //       console.error(error);
// //     }
// //   };

// //   const handleAmountChange = (event) => {
// //     setAmount(event.target.value);
// //   };

//   return (
//     <>
//       <h1>Pay with PayPal</h1>
//       <label htmlFor="amount">Amount:</label>
//       {/* <input type="number" id="amount" value={amount} onChange={handleAmountChange} /> */}
//       <button className="buton" onClick={handleCheckout}>Pay with PayPal</button>
//       {/* {paymentId && (
//         <div>
//           <label htmlFor="payerId">Enter your PayPal account email:</label>
//           <input type="text" id="payerId" />
//           <button onClick={() => { localStorage.setItem('payerId', document.getElementById('payerId').value); handleExecutePayment(); }}>Execute Payment</button>
//         </div>
//       )} */}
//     </>
//   );
// };

// export default Payment;
