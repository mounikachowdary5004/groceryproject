// import React, { Component} from 'react';

// class Login extends Component {
//     render() {
//         return (
           
//             <div className="Login">
//                 <div className="Login__Aside"></div> 
//                 <div className="login__Form">
//                     <div className="PageSwitcher">
//                 <a href="#" className="PageSwitcher__Item">Sign In</a>
//                 <a href="#" className="PageSwitcher_Item PageSwitcher_Item--Active"> Sign Up</a>
//             </div>
            

//             <div className="FormCenter">
//                 <form className="FormFields" onsubmit={this.handleSubmit}> 
//                     <div className="FormField">
//                         <label className="FormField__Label" htmlFor="name"> Full Name </label>
//                         <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"/>
//                     </div>
//                     <div className="FormField">
//                         <label className="FormField__Label" htmlFor="Password"> Password </label>
//                         <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"/>
//                     </div>
//                     <div className="FormField">
//                         <label className="FormField__Label" htmlFor="Email"> Email address </label>
//                         <input type="Email " id="Email" className="FormField__Input" placeholder="Enter your mail id" name="Email"/>
//                     </div>
//                     <label className="FormField__CheckboxLabel">
//                         <input className="FormField_Checkbox" type="checkbox" name="hasAgreed"/> I agree all statements in <a href="" className="FormField_TermsLink"> terms of services</a>
//                     </label>
//                     <div className="FormField">
//                         <button className="FormField_Button ar-20"> Sign Up </button> <a href= "#" className="FormField_Link"> I'm already memner</a>
//                     </div>
//                 </form>
//             </div>
//             </div>
//             </div>
//         );
//     }
// }
       

// export default Login;




import React from 'react'
import { useState } from 'react';

import './login.css'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  //email is a state variable and email is to update the value.
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
const [create, setCreate]= useState(false);
    const navigate = useNavigate()
    //handlesubmit is a event.
    //preventdefault is to prevent from page reload and may data get ereased.
    const handlesubmit = async (e)=>{
        e.preventDefault();
        console.log(email);
     
       //make a POST request to the backend API
        const response = await fetch("http://127.0.0.1:3500/api/auth/login",{
          method: "POST",
          headers:{
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password      //send the email and password in the request body as a JSON object
          }),
          
        });
        setCreate(true);
        const resData = await response.json();
        console.log(resData);
        if(resData.success){
          // document.cookie = `token=${resData.ticket};`// set the auth token as a cookie
          Cookies.set('token',`${resData.ticket}`,{expires:7});
          console.log("User loged in Successful");
          //  alert("user loged in successfull")
          setTimeout( ()=>{
            //navigate("/");
            window.location.href= "/";
            // alert("user loged in successfull")
           
          },500);
        }
       
        else{

        console.log("Invalid !!");
          alert("credentials didnt match")
        
        }
    
            
    }
   
    //login form
    //onchange is a input that triggered when the value of the input is changed by user.
  return (
    <div className='hii'> 
      
      <div className='form'>
         <form className='Signup form' onSubmit={handlesubmit}>
         <div className="title">Login</div>
         <div className="input-container ic1">
         <input id="email"  className="input" type="text" onChange={(e)=> setemail(e.target.value)}  />
         <div className="cut"></div>
         <label htmlFor='email' className="placeholder">Email</label>
         
         
         </div>
         <div className="input-container ic2">
         <input className="input" type="password" onChange={(e)=> setpassword(e.target.value)} id="password" placeholder=''/>
         <div class="cut"></div>
         <label htmlFor='password' className="placeholder">Password</label>
         
         </div>
         <div className='btn'>
         <button type="submit" className="submit">LOGIN</button>
         { create && <p className='hello3'><br></br>logged in Successfully!!!</p>}
         </div>
         <br></br> <br></br>
         <div className='login'>If Already have an Account  <Link to ="/createuser">Register</Link>
         </div>
        </form>
      </div>
      
    </div>
  )
}





        // const response = await fetch("http://localhost:3500/api/auth/login", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //     email: email,
        //     password: password,
        //   }),
        // });
        // const resData = await response.json();
        // console.log(resData);
        // if (resData.success) {
        //   localStorage.setItem("User:Token", resData.authToken);
        //   console.log("Account Logged in Successfully ");
        //   setTimeout(() => {
        //     navigate("/");
        //   }, 500);
        // } else {
        //   console.log("Invalid !!!");
        // }
    
        // if(resData === 'User registered successfully'){
        //     alert("User created successfully.");
        //     // setTimeout(() => {
        //     //     navigate("/users/login");
        //     //   }, 1500);
        // }
    
        
             
    


    //     const response=await Axios.get("http://127.0.0.1:3500/api/auth/login")
    //  setEmail(response.email);


    // }
    // useEffect(()=>{
    //   setEmail()
    // },[]);