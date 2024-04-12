
import React, { useState, useEffect } from 'react';
import List from './List';

function App() {
  
  const [items, setItems] = useState([]);

  
  useEffect(() => {
    fetchData(); 
  },[]);

  
  const fetchData = async () => {
    try {
      console.log("Se esta ejecutando fetchData");
      const response = await fetch('/data'); 
      const data = await response.json();
      setItems(data); 
      console.log(items);
    } 
    catch (error) {
      console.error('Error al obtener los datos del servidor:', error);
    }
  };

  return (
    <div className="App">
      <h1>Lista de Elementos</h1>
      <List items={items} />
    </div>
  );
}

export default App;