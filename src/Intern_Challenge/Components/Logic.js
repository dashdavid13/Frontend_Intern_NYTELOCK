import React, {useState} from 'react';
import Display from './Display';



function Logic({newData}) {
  const [stateId, setStateId] =useState(currentId)
  
  currentId = stateId

  
    
function clicked(currentId){
  console.log(currentId)
}
 
  return (
    <div>
      <Display
      newData={newData}
      clicked={clicked}
      />
    </div>
  );
}

export default Logic;
