import React from 'react';
import Display from './Display';



function Logic({data}) {

  let newData = data[Math.floor(Math.random() * data.length)];
  return (
    <div>
      <Display newData={newData}/>
    </div>
  );
}

export default Logic;
