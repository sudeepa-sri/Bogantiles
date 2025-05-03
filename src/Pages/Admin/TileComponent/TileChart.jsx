import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';
import axios from 'axios';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A569BD'];

const TileChart = () => {
  const [categoryData, setCategoryData] = useState([]);

  // Fetch tile data and process category counts
  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tiles'); // Adjust API endpoint if necessary
        const tiles = res.data;

        const categoryCount = {};

        // Count tiles per category
        tiles.forEach((tile) => {
          const cat = tile.category || 'Unknown';
          categoryCount[cat] = (categoryCount[cat] || 0) + 1;
        });

        // Prepare the data for the Pie chart
        const formattedData = Object.entries(categoryCount).map(([category, count]) => ({
          name: category,
          value: count,
        }));

        // Set the category data to state
        setCategoryData(formattedData);
      } catch (error) {
        console.error('Error fetching tiles:', error);
      }
    };

    fetchTiles();
  }, []); // Empty array ensures effect runs only once (on mount)

  return (
    <div style={{ width: '100%', height: '400px' }}>

      <PieChart width={400} height={400}>
        <Pie
          data={categoryData}
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {categoryData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default TileChart;
