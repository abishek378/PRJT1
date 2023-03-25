import React, { useEffect } from 'react';
import Pattern from './psttern';
import { useState } from 'react';

const Scrn3 = (props) => {
  return (
    <div className='scrn3'>
      <h1>Mobile Number List</h1>
      {props.item.map((number, index) => (
        <Pattern key={index} value={number} funcdelete={props.funcdelete} id={index} />
      ))}
    </div>
  );
};

export default Scrn3;
