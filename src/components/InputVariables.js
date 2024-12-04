import React, { useState } from 'react';
import './InputVariables.css'; // Estilos específicos de este componente


function InputVariables({ movementType, onCalculate }) {
  const [mass, setMass] = useState('');
  const [velocity, setVelocity] = useState('');
  const [inertia, setInertia] = useState('');
  const [angularVelocity, setAngularVelocity] = useState('');

  const handleCalculate = () => {
    if (movementType === "translational" && (isNaN(mass) || isNaN(velocity) || mass <= 0 || velocity <= 0)) {
      alert("Por favor ingrese valores válidos.");
      return;
    }
    if (movementType === "rotational" && (isNaN(inertia) || isNaN(angularVelocity) || inertia <= 0 || angularVelocity <= 0)) {
      alert("Por favor ingrese valores válidos.");
      return;
    }

    const data = movementType === "translational" 
      ? { mass: parseFloat(mass), velocity: parseFloat(velocity) }
      : { inertia: parseFloat(inertia), angularVelocity: parseFloat(angularVelocity) };
    onCalculate(data);
  };

  return (
    <div className="input-variables">
      <h2>Ingresar Variables de {movementType === "translational" ? "Traslación" : "Rotación"}</h2>
      {movementType === "translational" ? (
        <>
          <label>Masa (kg):</label>
          <input type="number" value={mass} onChange={(e) => setMass(e.target.value)} />
          <label>Velocidad (m/s):</label>
          <input type="number" value={velocity} onChange={(e) => setVelocity(e.target.value)} />
        </>
      ) : (
        <>
          <label>Momento de Inercia (kg·m²):</label>
          <input type="number" value={inertia} onChange={(e) => setInertia(e.target.value)} />
          <label>Velocidad Angular (rad/s):</label>
          <input type="number" value={angularVelocity} onChange={(e) => setAngularVelocity(e.target.value)} />
        </>
      )}
      <button onClick={handleCalculate}>Calcular</button>
    </div>
  );
}

export default InputVariables;
