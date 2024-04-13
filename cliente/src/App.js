
import React, { useState, useEffect } from 'react';
import List from './List';
import Titulo from './Titulo';

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
    <div className="App p-4">
      <Titulo/>
      <div className="list-conteiner">
        <List items={items} />
      </div>
    </div>
  );
}

export default App;