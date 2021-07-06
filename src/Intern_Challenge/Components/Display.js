import React from 'react';
import DetailCard from './DetailCard';
import DisplayCard from './DisplayCard'



function Display({newData, clicked, setStateId}) {
 

  const mapData = newData.map(data => {
        return (
        <DisplayCard
            key={data.id}
            data={data}
            clicked={clicked}
            setStateId={setStateId}
        />
        )
    })
  return (
    <>
  <div>
    <div>
      <h6>
        <span className="sub-heading"> <span>⚫</span> How do I know which logo style is right for me?</span>
      </h6>
      <h2 className="main-heading"> Different Types of Logo Styes<br /></h2>
    </div>
    <div>
      <div>
      <span className="contact">Contact Us </span>
      <i>➡️</i>
      </div>
    </div>
    <br />
  </div>
  <div  className="container">
    {mapData}
  </div>
  <div>
    <DetailCard />
  </div>

    </>
    
  );
}

export default Display;