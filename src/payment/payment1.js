// import axios from "axios";
// import {useSelector} from "react-redux";

// // import {url} from "./Slices/api";
//  const Payment1=({cartItems})=>{
//     // const user = useSelector((state) => state.auth)

// const handleCheckout =()=>{
//  axios.post('http://127.0.0.1:3500/api/stripe/create-checkout-session',{
//     // await axios.post('http://127.0.0.1:3500/api/auth/addaddress',
//     // const response = await axios.post('http://127.0.0.1:3500/api/auth/addaddress', 
//     cartItems,
//     // userId:user._id
// }).then((res) => {
//     if(res.data.url){
//         window.location.href = res.data.url
//     }
// }).catch((err) => console.log(err.message))
// }


//     return(
//         <>
//         <button onClick={() =>handleCheckout()}> check out  </button>
//         </>//pa ob wiprop c
//     )
//  }
//  export default Payment1;


import React, { useState, useEffect } from 'react';

import axios from 'axios';
import Cookies from 'js-cookie';
const Payment1 = ({cartItems,addressList}) => {
    
    const token = Cookies.get('token');
    const [userid, setUserid] = useState({});
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
            console.log(data._id)
            setUserid(data._id);
         } catch(error){
        console.log("error in response");
        }
    
      };    
     
      getuser()
    },[]);

    const handleCheckout = async () => {
       
        try {
            const response = await axios.post("http://127.0.0.1:3500/api/stripe/checkout", {
              cartItems,userid,addressList
            });
            if (response.data.url) {
              window.location.href = response.data.url;
            }
          } catch (error) {
            console.log(error.message);
          }    
        }      

    return (
        <button className="button" onClick={handleCheckout}>Check Out</button>
    );
}

export default Payment1;





// toast.success("Re-directing to payment mode", {
//     position: "bottom-right",
//     autoClose: 1000,
// });
