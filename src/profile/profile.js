
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import './profile.css';
import Navbar from '../nav/nav';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';
import '../Address/Address.css';

// import Navbar from '../nav/nav';
const Profile = () => {
  const navigate = useNavigate();
  const [allverifytoken1, setallverifytoken1] = useState({});
  const [addressList, setAddressList] = useState([]);
  const [success, setSuccess] = useState({});
  const token = Cookies.get('token');
  const [houseNumber, sethouseNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [street, setStreet] = useState('');
  const [country, setCountry] = useState('');
  const [zipCode, setzipCode] = useState('');
  const [success1, setSuccess1] = useState(false);
  const [unsuccess, setUnsuccess] = useState(false);
  const [form, setform] = useState(false);




//perform the side effect like fetching 
  useEffect(() => {
    const allverifytoken2 = async () => {
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
        setallverifytoken1(data);
     } catch(error){
    console.log("error in response");
    }

  };    
 
    allverifytoken2()
},[]);

  useEffect(() => {
    const fetchAddressData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3500/api/auth/get_address', {
          headers: { 'auth': token },
        });
        const result = await response.json();
        console.log(result);
        setAddressList(result)
        setSuccess(true)
      } catch (error) {
        console.log('error in response');
      }
    };
    fetchAddressData();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:3500/api/auth/addaddress', 
        {
          houseNumber,
          city,
          state,
          street,
          country,
          zipCode,
        },
        {
          headers: {"auth": token }, 
        }
      );
console.log(response)
      if (response !== 400) {
        // Successful response
        setSuccess1(true);
        setUnsuccess(false);
        setTimeout(()=>
        {
          window.location.reload()
        },1000);
      }
    } catch (error) {
     
      setUnsuccess(true);
      setSuccess1(false);
    }
  };
 
  const handleCancle = async (e) =>{
    setform(false)
  }
  const handleAddAddressClick = () => {
    setform(true);
  };



const handleDelete = async (event, addressid) => {
  // setAddressList(event.target.value);
  // event.preventDefault();
   
 
  try {
    const response = await axios.delete(`http://127.0.0.1:3500/api/auth/deleteaddress/${addressid}`, {
      headers: { auth: token },
    });
  
    
  } catch (error) {
    console.log('error in response');
  }
};
const handleSave = (updatedAddress) => {
  setAddressList(updatedAddress);
};


  //


  
   
 


  return (
    <div className='back'>
    
      {/* <Navbar /> */}
        <form className='formss'>
          <p>Name:   {allverifytoken1.firstName} {allverifytoken1.lastName}</p>
          {/* <p>Lastname:  {allverifytoken1.lastName}</p> */}
          <p>Email:   {allverifytoken1.email}</p>
            </form>

          <form className='formss2'>
          {success && (
            <div>
              <table>
                <thead>
                  <tr>
                  <th>houseNumber</th>
                    {/* <th>Address</th> */}
                    <th>street</th>
                    <th>city</th>
                    <th>state</th>
                    <th>country</th>
                    <th>zipCode</th>
                    <th>Delete</th>
                    <th>edit</th>
              
                   
                  </tr>
                </thead>
                <tbody>
                {addressList && addressList.addresses && addressList.addresses.map((address, index) => (
                  <tr key={index}  id={address._id}>
                    <td>{address.houseNumber}</td>
                    {/* <th>{address.Address}</th> */}
                    <td>{address.street}</td>
                    <td>{address.city}</td>
                    <td>{address.state}</td>
                    <td>{address.country}</td>
                    <td>{address.zipCode}</td>
                    <td>
                    
                    <button onClick={(event) => handleDelete(event, address._id)}>Delete</button>

                    </td>
                    <td>
                    <Link to="/EditAddressForm">
  <button>Edit</button>
</Link>
</td>

                    


                  </tr>


                ))}


              </tbody>
            </table>
           
          </div>
        )}
          
        

          </form>
          <div className='navbutton'>
            <Link to='/addaddress'>
              <button onClick={handleAddAddressClick}>ADD ADDRESS</button>
            </Link>
           
          </div>
          <div className="image1">
  <div className="form-container">
    {form && 
      <form onSubmit={handleSubmit} className="form2">
        {/* <h2 className='ttt'>Add Your Address</h2> */}
        <label htmlFor='houseNumber'>houseNumber</label>
        <input value={houseNumber} name="houseNumber" onChange={(e)=> sethouseNumber(e.target.value)} id="houseNumber" placeholder='houseNumber'/>
        <label htmlFor='street'>street</label>
        <input value={street} name="street" onChange={(e)=> setStreet(e.target.value)} id="street" placeholder='street'/>
        <label htmlFor='city'>city</label>
        <input value={city} name="city" onChange={(e)=> setCity(e.target.value)} id="city" placeholder='city'/>
        <label htmlFor='state'>state</label>
        <input value={state} type="state" onChange={(e)=> setState(e.target.value)} id="state" placeholder='state'/>
        <label htmlFor='country'>country</label>
        <input value={country} type="country" onChange={(e)=> setCountry(e.target.value)} id="country" placeholder='country'/>
        <label htmlFor='zipCode'>zipCode</label>
        <input value={zipCode} type="zipCode" onChange={(e)=> setzipCode(e.target.value)} id="zipCode" placeholder='zipCode'/>
        <div className="button-container">
          <button type="submit" className='sub'>Submit</button> 
          <button className='can' onClick={handleCancle}>Cancel</button>
        </div>
        {success1 && <b>Address updated successfully.</b>}
        {unsuccess && <b>Failed to update address.</b>}
      </form>}
  </div>
</div>

        
      </div>
      
    
   
   
  );
};

export default Profile;











