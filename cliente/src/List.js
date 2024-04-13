
import React from 'react';

function List({ items }) {
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <div className="text-center text-gray-500 py-4">
        No hay elementos para mostrar.
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {items.map(item => (
        <li key={item.LU} className="py-2">
           <span className="font-bold">LU:</span> {item.LU} -{' '}
          <span>{item.Nombre} {item.Apellido}</span> -{' '}
          <span className="text-gray-500">{item.Carrera}</span>
        </li>
      ))}
    </ul>
  );
}

export default List;