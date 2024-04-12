
// List.js
import React from 'react';

function List({ items }) {
 
  if (!Array.isArray(items)) {
    return <p>No hay elementos para mostrar.</p>;
  }

  return (
    <ul>
      {items.map(item => (
        <li key={item.LU}>
          {item.LU} - {item.Nombre} {item.Apellido} - {item.Carrera}
        </li>
      ))}
    </ul>
  );
}

export default List;
