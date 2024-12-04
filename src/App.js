// App.js

import React, { useState } from 'react';
import './App.css';  // Importa el archivo de estilos CSS

import HomeScreen from './components/HomeScreen';
import InputVariables from './components/InputVariables';
import Results from './components/Results';
import DataUpload from './components/DataUpload';
import Analysis from './components/Analysis';

function App() {
  const [movementType, setMovementType] = useState(null);
  const [results, setResults] = useState(null);
  const [uploadedData, setUploadedData] = useState(null);

  const handleSelectMovement = (type) => setMovementType(type);

  const handleCalculate = (data) => {
    const { mass, velocity, inertia, angularVelocity } = data;
    let calculationResults = {};

    if (movementType === "translational") {
      calculationResults.momentum = mass * velocity;
      calculationResults.kineticEnergy = 0.5 * mass * velocity ** 2;
    } else {
      calculationResults.angularMomentum = inertia * angularVelocity;
      calculationResults.kineticEnergyRot = 0.5 * inertia * angularVelocity ** 2;
    }

    setResults(calculationResults);
  };

  const handleDataUpload = (data) => setUploadedData(data);

  return (
    <div className="app">
      {movementType === null ? (
        <HomeScreen onSelectMovement={handleSelectMovement} />
      ) : results === null ? (
        <InputVariables movementType={movementType} onCalculate={handleCalculate} />
      ) : uploadedData === null ? (
        <Results movementType={movementType} results={results} onUploadData={handleDataUpload} />
      ) : (
        <Analysis results={results} uploadedData={uploadedData} />
      )}
    </div>
  );
}

export default App;
