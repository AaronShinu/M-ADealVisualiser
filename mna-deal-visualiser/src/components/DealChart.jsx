import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const DealChart = ({deals}) => {
  const sectorTotals = {};

  deals.forEach((deal) => {
    const {sector, value} = deal;
    sectorTotals[sector] = (sectorTotals[sector] || 0) + value;
  });

  const data = {
    labels: Object.keys(sectorTotals),
    datasets : [
      {
        label: 'Total Deal Value ($M)',
        data: Object.values(sectorTotals).map(v => Math.round (v / 1000)),
        backgroundColor: '#007bff',
      }
    ]
  };

  const options = {
    responsive : true,
    plugins: {
      legend: {display:false},
      tooltip: {
        callbacks: {
          label : (context) => `$${context.raw}B`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback : (val) => `$${val}B`
        }
      }
    }
  };

  return (
    <div className="card shadow-sm border-0 p-3 mb-5">
      <h5 className="text-center mb-3">Total Deal Value by Sector</h5>
      <Bar data={data} options={options} />
    </div>
  );
};

export default DealChart;