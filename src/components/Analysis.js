import React from 'react';
import { Line } from 'react-chartjs-2';
import './Analysis.css';  // Importa el archivo CSS de Analysis


function Analysis({ results, uploadedData }) {
  const chartData = {
    labels: ['Tiempo 1', 'Tiempo 2', 'Tiempo 3', '...'],  // Ejemplo de etiquetas
    datasets: [
      {
        label: 'Cálculo Teórico - Momentum',
        data: [results.momentum, results.kineticEnergy], // Cálculos teóricos
        borderColor: 'blue',
        fill: false,
      },
      {
        label: 'Datos Experimentales',
        data: [/* Datos procesados de Tracker */],
        borderColor: 'red',
        fill: false,
      },
    ],
    options: {
      scales: {
        x: {
          title: {
            display: true,
            text: 'Tiempo (s)',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Valor (kg·m/s, J)',
          },
        },
      },
    },
  };

  return (
    <div className="analysis">
      <h2>Análisis de Resultados</h2>
      <Line data={chartData} />
      <p>Este gráfico compara los resultados teóricos y experimentales de momentum y energía.</p>
    </div>
  );
}

export default Analysis;
