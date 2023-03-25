import React from 'react';
import {useNavigate, useLocation,/*otherhooks*/} from 'react-router-dom'

const Scrn2 = (props) => {
    const navigate = useNavigate();
// const location=useLocation();
// const {inputdata}=location.state;
const value=props.data.slice(-4)

const handleChange=(event)=>{
    if(event.target.value == 9999){
       console.log("poda scrn 3")
    //    navigate("/scrn3")
    }

}


  return (
    <div className='scrn2'>
      <h2>Enter OTP</h2>
      <p>We have sent a one time password to ******{value}</p>
    <input type="number"  onChange={handleChange} placeholder="OTP"/>
    </div>
  );
};

export default Scrn2;
