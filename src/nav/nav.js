// import './nav.css';
// import { Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';
// import Cookies from "js-cookie";

// export default function Navbar() {

//         let navigate = useNavigate()
//         const handleLogout = () => {
//             Cookies.remove('usermodel:Token')
//             navigate('/')
//           }


//     return <nav className="nav">
//         <img src="https://uknow.uky.edu/sites/default/files/styles/uknow_story_image/public/GettyImages-1352758440.jpg"/>
//         <p className='title'>Groceries</p>

//         <ul>
//             <li >
//             <a href ="/"> Home</a>
//             <Link to="/"></Link>
//             </li>
//             <li>
//             <a href ="/"> About us</a>
//             <Link to="/"></Link>
//             </li>
//             <li>
//             <a href ="/"> Contact us</a>
//             <Link to="/"></Link>
//             </li>

//         </ul>

//         <ul>

//         <li className="nav-item">
//             {}
//             !Cookies 
//                                         <Link className="btn btn-outline-primary mr-2" role='button' to="/login">Log In</Link>
//                                         </li>
//                                         <li className="nav-item">
//                                         <Link className="btn btn-outline-primary mr-2 " role='button' to="/createuser">Register</Link>
//                                         </li> 
//                                         </ul> : <button className="btn btn-primary" onClick={handleLogout}>Logout</button>



//     </nav>

// }



// import React from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import './nav.css'
// import Cookies from 'js-cookie';
// // import Homepage from '../homepage/homepage.js'

// //useNavigate is provided by the React Router library,
// // that allows us to navigate to a different page or URL.
// export default function Navbar({  }) {
//     let navigate = useNavigate()
//     const handleLogout = () => {
//         navigate('/')
//         Cookies.remove('token')
//         localStorage.removeItem('cart')

//     }


//     // When we clicks the button, the handlelogout() function will be executed 
//     //and display the content in it.
//     return (
//         <div className='navvv'>
//             <>
//                 <div>
//                     <nav className="auto-navbar1" >
//                         <div className="navbar1_nav">
//                             <Link to="/Homepage">
//                                 <img src={require('../family.png')} alt="Logo" className="logo" />
//                                 <span className="logo-name" ><Link to="/Homepage"  >Family</Link></span>
                                

//                             </Link>
                            
//                         </div>
//                         {/* <span className="logo-name" ><Link to="/Homepage" >Family</Link></span> */}
//                         <div className="navbar1-middle1">
//                             <ul className="navbar1-nav">
//                                 {/* <li className="nav-item">
//                                     <Link to="/" className="nav-link">Home</Link>
//                                 </li> */}
//                                 <li className="nav-item0">
//                                     <Link to="/about" >About</Link>
//                                 </li>
//                                 <li className="nav-item0">
//                                     <Link to="/addproduct" >Product </Link>
//                                 </li>
//                                 {/* <li className="nav-item0">
//                                                     <Link to="/Homepage">Home</Link>
//                                                 </li> */}
//                             </ul>
//                         </div>
//                         <div className="navbar1-right">
//                             <ul className="navbar12-nav">

//                                 {
//                                     !Cookies.get('token') ? <>
//                                         <button className="nav12-item">
//                                             <Link role='button' to="/login">Login</Link>
//                                         </button>
//                                         <button className="nav1-item">
//                                             <Link role='button' to="/createuser">Register</Link>
//                                         </button>
//                                     </> : <>


//                                         {/* <li className="navitem1 ">
//                                             <input className="form-control mr-sm-2" type="search" placeholder="Search grocery products" aria-label="Search" />


//                                         </li> */}
//                                         {/* <li className="btn1">
//                                             <Link className="btn1" role='button' to="/addproduct"></Link>
//                                         </li> */}
//                                         {/* <div className="navbar1-middle1">
//                                             <ul className="navbar1-nav">
//                                                 <li className="nav-item0">
//                                                     <Link to="/Homepage">Home</Link>
//                                                 </li>
//                                             </ul>
//                                         </div> */}

//                                         <button className="nav12-item dropdown">
//                                             <img src={require('../drop.png')} alt="Logo" className="logo1" />

//                                             <i className="fa fa-caret-down"></i>
//                                             <div className="dropdown-content">
//                                                 <Link to="/getuser">Profile</Link>
//                                                 <Link to="/Cart" > cart </Link>
//                                             </div>
//                                         </button>


//                                         <button className='nav12-item' onClick={handleLogout}>Logout</button>

//                                     </>
//                                 }
//                             </ul>
//                         </div>

//                     </nav>
//                 </div>
//             </>
//             {/* <Homepage /> */}
//         </div>
//     )


// }
//55to 162 
//css part kosam

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './nav.css'
import Cookies from 'js-cookie';
// import Homepage from '../homepage/homepage.js'

//useNavigate is provided by the React Router library,
// that allows us to navigate to a different page or URL.
export default function Navbar({  }) {
    let navigate = useNavigate()
    const handleLogout = () => {
        navigate('/')
        Cookies.remove('token')
        // localStorage.removeItem('cart')

    }


    // When we clicks the button, the handlelogout() function will be executed 
    //and display the content in it.
    return (
        <div className='navvv'>
            <>
                <div>
                    <nav className="auto-navbar1" >
                        {/* <div className="logo">
                            <Link to="/Homepage">
                                <img src={require('../images/kj.png')} alt="Logo" className="logo" />
                               
                                Family
                            </Link>
                            
                            
                        </div> */}
                        <div className="logo">
                       
  <Link to="/Homepage">
    Family :)
  </Link>
</div>

                       
                        <div className="navbar1">
                            <div className="navbar2">
                            
                                <div className="aboutnav">
                                    <Link to="/about" >About</Link>
                                </div>
                                <div className="productnav">
                                    <Link to="/addproduct" >Shop </Link>
                                </div>
                             
                            </div>
                        </div>
                       
                            <ul className="icons">

                                {
                                    !Cookies.get('token') ? <>
                                       
                                        <div id="menu-btn" className="fas fa-bars"></div>
                                        <div id="search-btn" className="fas fa-search"> </div>
                                        <div class="parent-container">
                                            
  
  <Link to ="/login">
    <img src={require('../images/333.png')} alt="Login" className="pagelogo" />
  </Link>
</div>


                                       

                                  

                                    </> : <>
                                    {/* <div className="productnav1">
                                    <Link to="/getorders" >Order </Link>
                                </div> */}

                                    <Link to="/Cart">
    <img src={require('../images/3333.png')} alt="Cart" className="pagelogo" />
  </Link>
 
 

                                        <button className="dropdown">
                                            <img src={require('../images/333.png')} alt="Logo" className="logo1" />

                                            {/* <i className="fa fa-caret-down"></i> */}
                                            <div className="dropdown-content">
                                            <Link to="/getuser">Profile</Link>
                                            
                                            <p className='logo1' onClick={handleLogout}>Logout</p>
                                                
                                               
                                            </div>
                                        </button>


                                     

                                    </>
                                }
                            </ul>
                        

                    </nav>
                </div>
            </>
            {/* <Homepage /> */}
        </div>
    )


}

