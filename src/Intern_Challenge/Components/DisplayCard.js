import React, {useState} from 'react';

  
function DisplayCard({data, clicked, setStateId }) {
    setStateId(data.id)
    
    

   

    return (
        <>
    {/* <div onClick={clicked}>
        <img className="logoImage" alt="logo" src={data.logoImage} />
        <h5>{data.logoTitle}</h5>
    </div> */}
    </>
    );
  }
  
  export default DisplayCard;