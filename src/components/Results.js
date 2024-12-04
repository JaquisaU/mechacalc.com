import React, { useState } from 'react';
import DataUpload from './DataUpload';
import './Results.css'; // Estilos específicos de este componente

function Results({ movementType, results }) {
  const [uploadedData, setUploadedData] = useState(null);

  const handleDataUploaded = (data) => {
    setUploadedData(data);
  };

  return (
    <div className="results">
      <h2>Resultados de Cálculo</h2>
      {movementType === "translational" ? (
        <>
          <p>Momentum Lineal (p): {results.momentum.toFixed(2)} kg·m/s</p>
          <p>Energía Cinética (K): {results.kineticEnergy.toFixed(2)} J</p>
        </>
      ) : (
        <>
          <p>Momentum Angular (L): {results.angularMomentum.toFixed(2)} kg·m²/s</p>
          <p>Energía Cinética de Rotación (K_rot): {results.kineticEnergyRot.toFixed(2)} J</p>
        </>
      )}

      {/* Componente para cargar datos experimentales */}
      <DataUpload onDataUploaded={handleDataUploaded} />
      
      {/* Mostrar los datos cargados */}
      {uploadedData && (
        <div>
          <h3>Datos Cargados</h3>
          <pre>{JSON.stringify(uploadedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default Results;
