const Cancelpage=() =>{
    const handlecancel=()=>{
       window.location.href="/cart"
    }
    return (
        <div className='success'>
             <img src={require('../images/fail.jpg')} alt="Login" className="pagelogo" />
         <p>Sorry, </p>
            <p>Unfortunately your payment for this order has failed.</p>
            <button className='details1' onClick={handlecancel}>Try again  </button>
           
          
           
        </div>
)}
export default Cancelpage;