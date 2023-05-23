import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const EditAddressForm = ({ address, onUpdateAddress }) => {
  const [houseNumber, setHouseNumber] = useState(address?.houseNumber);
  const [street, setStreet] = useState(address?.street);
  const [city, setCity] = useState(address?.city);
  const [state, setState] = useState(address?.state);
  const [country, setCountry] = useState(address?.country);
  const [zipCode, setZipCode] = useState(address?.zipCode);
  const [addressList, setAddressList] = useState([]);
  const [success, setSuccess] = useState(false);
  const token = Cookies.get('token');

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

  const handleSave = async (event) => {
    event.preventDefault();
    const updatedAddress = {
      houseNumber: houseNumber,
      street: street,
      city: city,
      state: state,
      country: country,
      zipCode: zipCode
    };
    try {
      const response = await fetch(`http://127.0.0.1:3500/api/auth/editaddress/${address._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'auth': token },
        body: JSON.stringify(updatedAddress)
      });
      const result = await response.json();
      console.log(result);
      onUpdateAddress(result); // update the address prop with the updated address object
      setSuccess(true)
    } catch (error) {
      console.log('error in response');
    }
  };

  return (
    <form onSubmit={handleSave}>
      <label>
        House Number:
        <input type="text" value={houseNumber} onChange={(event) => setHouseNumber(event.target.value)} />
      </label>
      <br />
      <label>
        Street Name:
        <input type="text" value={street} onChange={(event) => setStreet(event.target.value)} />
      </label>
      <br />
      <label>
        City:
        <input type="text" value={city} onChange={(event) => setCity(event.target.value)} />
      </label>
      <br />
      <label>
        State:
        <input type="text" value={state} onChange={(event) => setState(event.target.value)} />
      </label>
      <br />
      <label htmlFor='country'>Country:</label>
      <input type="text" value={country} onChange={(event) => setCountry(event.target.value)} id="country" placeholder='country'/>
      <br />
      <label>
        Zip Code:
        <input type="text" value={zipCode} onChange={(event) => setZipCode(event.target.value)} />
      </label>
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditAddressForm;
