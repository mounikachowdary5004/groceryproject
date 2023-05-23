// // import React from 'react'
// // import { useState } from 'react'
// // import { Link, useNavigate } from 'react-router-dom';
// // import './Address.css';
// // // import { toast } from 'react-toastify';


// // export default function Address() {
// //   //firstname is a state variable and setfirstname is to update the value. 
// //     const [houseNumber, sethouseNumber] = useState('');
// //     const [street, setStreet] = useState('');
// //     const [city, setCity] = useState('');
// //     const [state, setState] = useState('');
// //     const [country, setCountry] = useState('');
// //     const [zipCode, setzipCode] = useState('');

// //     const navigate = useNavigate()
// //   // Define event handler for form submission
// //     //preventdefault is to prevent from page reload and may data get ereased.
// //     const handlesubmit = async (e)=>{
// //         e.preventDefault();
// //         // console.log(houseNumber);
    

// //     // Send a POST request to the backend with form data
// //     const response = await fetch("http://127.0.0.1:3500/api/auth/addaddress",{
// //       method: "POST",
// //       headers:{
// //         "Content-Type":"application/json",
// //         "auth": token,
// //       },
// //       body: JSON.stringify({       //method is used to convert a JavaScript object into a JSON 
// //         // userId: req.id,
// //         houseNumber: houseNumber,
// //         street: street,
// //         city: city,
// //         state: state,
// //         country: country,
// //         zipCode: zipCode
// //       })
    
// //     });
// //     const resData = await response.json()
// //     console.log(resData)

// //      // If the backend returns success, show an alert and navigate to the login page after a delay
  
// //     if(resData.success){
// //       alert("address created successfully");
     
// //       setTimeout( () => {
// //         navigate("/adduser");
// //       },1000);
    
// //     }


 

// //     else{
// //       alert("address already  exists")

// //       console.log("Invalid  !!");
      
    
// //     }
  
// //     }

//     import React,{useState}from "react";
// // import Axios from'axios';
// import "./Address.css";
// import { Link  } from 'react-router-dom'
// import Cookies from 'js-cookie';
// import Navbar from '../nav/nav';


// export default function Address(){
//     const [houseNumber, sethouseNumber]=useState('');
//     const[city,setCity]=useState('');
//     const[street,setStreet]=useState('');
//     // const[Address,setAddress]=useState('');
//     const[state,setState]=useState('');
//     const[country,setCountry]=useState('');
//     const[zipCode,setzipCode]=useState('');
//     const[success,setSuccess]=useState(false);
//     const [unsuccess,setUnsuccess]=useState(false);
//     const token=Cookies.get('token')
//     const handlesubmit=async(e)=>{
//         e.preventDefault();
//         // console.log(email);
//         try{
//           const response = await fetch("http://127.0.0.1:3500/api/auth/addaddress",{
//       method: "POST",
//       headers:{
//         "Content-Type":"application/json",
//         "auth": token,
//       },
//       body: JSON.stringify({       //method is used to convert a JavaScript object into a JSON  string
//         // userId: req.id,
//         houseNumber: houseNumber,
//         // Address:Address,
//         street: street,
//         city: city,
//         state: state,
//         country: country,
//         zipCode: zipCode
//       })
    
//     });
            
//             console.log(response)
//             if (response!==400){
//                 setSuccess(true);
//                 setUnsuccess(false);
//                 setTimeout(()=>{
//                     window.location.href='/api/profile';//replace '/home' with your home page url
//                 },2000)
//             }
            
            
//         }
//         catch(errors){
//             console.log("error");
//             setSuccess(false);
//             setUnsuccess(true);
           
//         }
//     }
//    //onchange is a input that triggered when the value of the input is changed by user.
//   return (
    
//       <>
//     <Navbar />
//      <div className="img2">
//       <div className='auth-form-container2'>
//         <form className='Signup form2' onSubmit={handlesubmit}>
//         <h2 className="title2">Add Address</h2>
//          <label htmlFor='houseNumber'>houseNumber</label>
//          <input value={houseNumber} name="houseNumber"  onChange={(e)=> sethouseNumber(e.target.value)}id="houseNumber" placeholder='houseNumber'/>
//          <label htmlFor='street'>street</label>
//          <input value={street} name="street" onChange={(e)=> setStreet(e.target.value)} id="street" placeholder='street'/>
//          <label htmlFor='city'>city</label>
//          {/* <input value={Address} name="Address" onChange={(e)=> setAddress(e.target.value)} id="Address" placeholder='Address'/>
//          <label htmlFor='Address'>Address</label> */}
//          <input value={city} name="city" onChange={(e)=> setCity(e.target.value)} id="city" placeholder='city'/>
//          <label htmlFor='state'>state</label>
//          <input value={state} type="state" onChange={(e)=> setState(e.target.value)} id="state" placeholder='state'/>
//          <label htmlFor='country'>country</label>
//          <input value={country} type="country" onChange={(e)=> setCountry(e.target.value)} id="country" placeholder='country'/>
//          <label htmlFor='zipCode'>zipCode</label>
//          <input value={zipCode} type="zipCode" onChange={(e)=> setzipCode(e.target.value)} id="zipCode" placeholder='zipCode'/>
//          <button type="submit" > <Link to ="/Address"></Link>ADD ADDRESS</button>
         
//           {success && <b>Address updated successfully.</b>}
//           {unsuccess && <b>Failed to update address.</b>}
       
//         </form>
//         {/* <Navbar /> */}
//       </div>
//       </div>
//       </>
   
//   )
// }

    
