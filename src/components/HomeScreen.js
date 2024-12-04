import React from 'react';
import './HomeScreen.css'; // Estilos específicos de este componente


function HomeScreen({ onSelectMovement }) {
  return (
    <div className="home-screen">
      <h1>Bienvenido a MechaCalc</h1>
      <p>Seleccione el tipo de movimiento para realizar cálculos:</p>
      <div className="options">
        <button onClick={() => onSelectMovement("translational")}>Movimiento de Traslación</button>
        <button onClick={() => onSelectMovement("rotational")}>Movimiento de Rotación</button>
      </div>
    </div>
  );
}

export default HomeScreen;
