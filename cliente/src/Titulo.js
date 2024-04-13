
import React from 'react';

function Titulo() {
  return (
    <h1 className="text-3xl font-bold mb-4 cursor-pointer hover:shadow-lg relative overflow-hidden rounded-lg">
        <span className="relative z-10">Alumnos IAW</span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-transparent rounded-lg"></span>
    </h1>
  );
}

export default Titulo;
