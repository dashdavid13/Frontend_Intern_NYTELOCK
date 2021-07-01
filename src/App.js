import React, { useState, useEffect} from 'react';
import './App.css';
import Logic from './Intern_Challenge/Components/Logic';
import { info } from './data/Components/data';

function App() {
  const [newData, setNewData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setNewData(info);
    setIsLoaded(true);
  }, []);

  if (!isLoaded) return <h1>Loading</h1>;
  return (
    <div className="App">
      <Logic newData={newData}/>
    </div>
  );
}

export default App;
