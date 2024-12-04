import React, { useState } from 'react';
import './DataUpload.css';  // Importa el archivo CSS de DataUpload

function DataUpload({ onDataUploaded }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // Función para manejar la carga del archivo
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
    setError(null);  // Resetear cualquier error previo

    // Verificar si el archivo es un .csv
    if (uploadedFile && uploadedFile.name.endsWith('.csv')) {
      const reader = new FileReader();
      
      reader.onload = () => {
        // Procesar los datos del archivo CSV
        const fileContent = reader.result;
        try {
          // Aquí puedes convertir el contenido del CSV en un formato manejable (por ejemplo, convertirlo en un array de objetos)
          const data = processCSV(fileContent);
          onDataUploaded(data);  // Llamar al callback con los datos procesados
        } catch (error) {
          setError('Error al procesar el archivo CSV.');
        }
      };

      reader.onerror = () => {
        setError('No se pudo leer el archivo.');
      };

      // Leer el contenido del archivo
      reader.readAsText(uploadedFile);
    } else {
      setError('Por favor, carga un archivo .csv.');
    }
  };

  // Función para procesar el CSV (esto depende del formato del archivo)
  const processCSV = (csvData) => {
    // Aquí puedes usar alguna librería para procesar el CSV (como `papaparse` o convertirlo manualmente)
    // Ejemplo simple: convertir el CSV a un array de objetos (esto es solo un ejemplo)
    const rows = csvData.split('\n');
    const data = rows.map(row => {
      const columns = row.split(',');
      return {
        time: columns[0], // Ejemplo: tiempo
        momentum: columns[1], // Ejemplo: momentum
        energy: columns[2], // Ejemplo: energía
      };
    });
    return data;
  };

  return (
    <div className="data-upload">
      <h3>Cargar Datos Experimentales</h3>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
      />
      {file && <p>Archivo cargado: {file.name}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default DataUpload;
