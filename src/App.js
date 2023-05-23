

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './login/login';
import Navbar from './nav/nav';
import Signup from './register/register';
import Profile  from './profile/profile';
import Address from './Address/Address';
import Product  from './Product/product';
// import Address1  from './Address/getAddress';
import { Link, useNavigate } from 'react-router-dom'
import Images from './image.js'
import Home from './homepage/homepage';
import Homepage from './homepage/homepage';
import Cart from './Cart/Cart';
import Checkout1 from './payment/successpage';

import EditAddressForm from './edit/editaddress';
// import CheckoutSuccess from './payment/checkoutsuccess';
import CheckoutSuccess from './payment/getorder';
import  Cancelpage  from './payment/cancel';
//  import Homepage from './homepage/homepage.js'
// import About from './components/About/About';
// import Contact from './components/contact/contact';
//react-router-dom is a JavaScript library that provides way to implement,
// client-side routing in React applications

function App() {
  return (
    <> 
    <div>
   <BrowserRouter>
   <Navbar />
        <Routes>
          {/* <Route exact path="/Navbar" element={<Navbar />} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<Signup />} />
         
           <Route exact path="/getuser" element={<Profile />} />
           <Route exact path="/Homepage" element={<Home />} />
           
           <Route exact path="/addaddress" element={<Profile />} />
        
            <Route exact path="/addproduct" element={<Product />}/>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/cancel" element={<Cancelpage />} />
            <Route exact path="/successpage" element={<Checkout1 />} />
            <Route exact path="/getorders" element={<CheckoutSuccess />} />
            <Route exact path="/Cart" element={<Cart />} />
           
            <Route exact path="/EditAddressForm" element={<EditAddressForm />} />


          

          

        </Routes>

      </BrowserRouter>
     
      </div>
   </>
  
  );
}

export default App;