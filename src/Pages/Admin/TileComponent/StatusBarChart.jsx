// components/dashboard/StatusBarChart.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const StatusBarChart = () => {
  const [statusData, setStatusData] = useState({ Pending: 0, Contacted: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/request/fetch')
      .then((res) => {
        const data = res.data;
        const counts = { Pending: 0, Contacted: 0 };

        data.forEach((req) => {
          if (req.status === 'Pending') counts.Pending += 1;
          else if (req.status === 'Contacted') counts.Contacted += 1;
        });

        setStatusData(counts);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch request data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading Status Chart...</p>;

  const chartData = {
    labels: ['Pending', 'Contacted'],
    datasets: [
      {
        label: 'Request Count by Status',
        data: [statusData.Pending, statusData.Contacted],
        backgroundColor: ['#f87171', '#34d399'], // red, green
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: { precision: 0, stepSize: 1 },
      },
    },
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', background: '#fff', padding: '1rem', borderRadius: '8px', boxShadow: '0 0 8px rgba(0,0,0,0.1)' }}>
      <h2 style={{ textAlign: 'center' }}>Tile Requests by Status</h2>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default StatusBarChart;
