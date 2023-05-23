// const Register =() => {
//     return (
//         <div className="container"> 
//             {/* <form>
                
//                 <div className="form">
//                     <div className="field">
//                         <label>UserName</label>
//                         <input type="text" name="username" placeholder="Username"/>

//                     </div>
                    
//                     <div className="field">
//                         <label>Password</label>
//                         <input type="password" name="password" placeholder="Password"/>
                        
//                     </div>
//                     <button className="fluid ui button blue">Submit</button> 
//                 </div>
//             </form> */}
            
//         </div>
//     )
// }
// export default Register











 //const Register =() => {
    //     return (
    //         <div className="container"> 
    //             {/* <form>
                    
    //                 <div className="form">
    //                     <div className="field">
    //                         <label>UserName</label>
    //                         <input type="text" name="username" placeholder="Username"/>
    
    //                     </div>
                        
    //                     <div className="field">
    //                         <label>Password</label>
    //                         <input type="password" name="password" placeholder="Password"/>
                            
    //                     </div>
    //                     <button className="fluid ui button blue">Submit</button> 
    //                 </div>
    //             </form> */}
                
    //         </div>
    //     )
    // }
    // export default Register
    
    




import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './regsiter.css';
// import { toast } from 'react-toastify';


export default function Signup() {
  //firstname is a state variable and setfirstname is to update the value. 
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const navigate = useNavigate()
  // Define event handler for form submission
    //preventdefault is to prevent from page reload and may data get ereased.
    const handlesubmit = async (e)=>{
        e.preventDefault();
        console.log(email);
    

    // Send a POST request to the backend with form data
    const response = await fetch("http://127.0.0.1:3500/api/auth/createuser",{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
      },
      body: JSON.stringify({       //method is used to convert a JavaScript object into a JSON 
        firstName,
        lastName,
        email,
        password
      })
    
    });
    const resData = await response.json()
    console.log(resData)

     // If the backend returns success, show an alert and navigate to the login page after a delay
  
    if(resData.success){
      alert("user created successfully");
     
      setTimeout( () => {
        navigate("/login");
      },1000);
    
    }


 

    else{
      alert("email exists")

      console.log("Invalid !!");
      
    
    }
  
    }
   //onchange is a input that triggered when the value of the input is changed by user.
  return (
    <div className='image2'>
      <>
      
      
      <div className='auth-form-container1'>
        <form className='Signup form1' onSubmit={handlesubmit}>
        <h2  className='title1'>Register</h2>
         <label htmlFor='firstName'>FirstName</label>
         <input value={firstName} name="firstName"  onChange={(e)=> setfirstName(e.target.value)}id="firstName" placeholder='First Name'/>
         <label htmlFor='lastName'>LastName</label>
         <input value={lastName} name="lastName" onChange={(e)=> setlastName(e.target.value)} id="lastName" placeholder='Last Name'/>
         <label htmlFor='email'>Email</label>
         <input value={email} name="email" onChange={(e)=> setemail(e.target.value)} id="email" placeholder='Email'/>
         <label htmlFor='password'>Password</label>
         <input value={password} type="password" onChange={(e)=> setpassword(e.target.value)} id="Password" placeholder='*********'/>
         <button type="submit">Signup</button>
         <div className='login'>If Already have an Account  <Link to ="/login">Login</Link>
         </div>
        </form>
      </div>
      
      </>
    </div>
   
  )
}