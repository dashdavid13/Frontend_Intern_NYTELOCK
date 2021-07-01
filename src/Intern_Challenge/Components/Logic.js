import React from 'react';
import Display from './Display';



function Logic({newData}) {
let logo_1 = newData[0]
let logo_2 = newData[1]
let logo_3 = newData[2]
let logo_4 = newData[3]
let logo_5 = newData[4]
let logo_6 = newData[5]



  return (
    <div>
      <Display 
      logo_1={logo_1} 
      logo_2={logo_2} 
      logo_3={logo_3}
      logo_4={logo_4}
      logo_5={logo_5}
      logo_6={logo_6}
      />
    </div>
  );
}

export default Logic;
