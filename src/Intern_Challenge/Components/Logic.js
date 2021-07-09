import React, {useState} from 'react';
import Display from './Display';



function Logic({newData}) {
  const [stateId, setStateId] =useState(1)
  

  
    

 
  return (
    <div>
      <Display
      newData={newData}
    
      />
    </div>
  );
}

export default Logic;
