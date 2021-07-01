import React from 'react';




function Display({logo_1,logo_2,logo_3,logo_4,logo_5,logo_6}) {
  function test(){
    console.log("test")
  }

  

  return (
    <>

    <div>
      <h6>
        <span className="sub-heading"> <span>⚫</span> How do I know which logo style is right for me?</span>
      </h6>
      <h2 className="main-heading"> Different Types of Logo Styes<br /></h2>
    </div>
    <div>
      <div>
      <span>Contact Us </span>
      <i>➡️</i>
      </div>
    </div>

    <div>
      <div>
        <h5>{logo_1.logoTitle}</h5>
        <h5>Logos</h5>
      </div>
      <div>
        <h5>{logo_2.logoTitle}</h5>
        <h5>Logos</h5>
      </div>
      <div>
        <h5>{logo_3.logoTitle}</h5>
        <h5>Logos</h5>
      </div>
      <div>
        <h5>{logo_4.logoTitle}</h5>
        <h5>Logos</h5>
      </div>
      <div>
        <h5>{logo_5.logoTitle}</h5>
        <h5>Logos</h5>
      </div>
      <div>
        <h5>{logo_6.logoTitle}</h5>
        <h5>Logos</h5>
      </div>
    </div>
    </>
  );
}

export default Display;