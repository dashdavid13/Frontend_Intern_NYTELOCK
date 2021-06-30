import React, { useState, useEffect} from 'react';
import './App.css';
import Logic from './Intern_Challenge/Components/Logic';
import { data } from './data/Components/data';

function App() {
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    setNewData(data);
  }, []);


  return (
    <div className="App">
      <Logic data={newData}/>
    </div>
  );
}

export default App;
