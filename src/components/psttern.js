import React from 'react';


const Pattern = (props) => {

 



  return (
    <div className='pattern'>
        
      <input value={props.value} />
      <button onClick={()=>props.funcdelete(props.id)}>DELETE</button>
    </div>
  );
};

export default Pattern;
