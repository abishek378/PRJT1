import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Scrn1 = (props) => {
  const [input, setInput] = useState('');
//   const navigate = useNavigate();

  const Validation = (event) => {
    event.preventDefault();
    const inputdata = document.getElementById('inputform').value;

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;

    if (mailformat.test(inputdata) || numberRegex.test(inputdata)) {
    //   alert('Valid data!');
    if(input.indexOf(inputdata)==-1){
      setInput(inputdata)
props.recvfun(inputdata)
return true;
}
else{
  alert("already exist")
  document.getElementById('inputform').value = '';
  document.getElementById('inputform').focus();
  return false;
}
// navigate('/scrn2', { state: { inputData: inputdata } }); 
    } else {
      alert('You have entered an invalid data !');
      document.getElementById('inputform').value = '';
      document.getElementById('inputform').focus();
      return false;
    }
  };

  return (
    <div className='scrn1'>
      <h2>Get Started</h2>
      <form>
        <input id='inputform' className='forminp' type='text' placeholder='Mobile/Email' />
        <button onClick={Validation}>Continue</button>
      </form>
    </div>
  );
};

export default Scrn1;
