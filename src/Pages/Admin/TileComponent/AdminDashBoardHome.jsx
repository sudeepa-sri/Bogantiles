import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashBoardHome.css';
import TileChart from './TileChart';
import StatusBarChart from './StatusBarChart';
 // Importing TileChart component

const AdminDashBoardHome = () => {
  const [trendingTiles, setTrendingTiles] = useState([]);
  const [fastSellingTiles, setFastSellingTiles] = useState([]);

  useEffect(() => {
    // Fetch Trending Tiles from the backend API
    const fetchTrendingTiles = async () => {
      try {
        const response = await axios.get('https://bogantilesbackend.onrender.com/api/tiles/trending');
        setTrendingTiles(response.data); // Set the trending tiles in state
      } catch (error) {
        console.error('Error fetching trending tiles:', error);
      }
    };

    // Fetch Fast-Selling Tiles from the backend API
    const fetchFastSellingTiles = async () => {
      try {
        const response = await axios.get('https://bogantilesbackend.onrender.com/api/tiles/fast-selling');
        setFastSellingTiles(response.data); // Set the fast-selling tiles in state
      } catch (error) {
        console.error('Error fetching fast-selling tiles:', error);
      }
    };

    fetchTrendingTiles(); // Fetch trending tiles when the component mounts
    fetchFastSellingTiles(); // Fetch fast-selling tiles when the component mounts
  }, []); // Empty dependency array means it runs once when the component mounts

  return (
    <div className="admin-dashboard-main-content">
      {/* Tile Category Chart Section */}
      <div className="tile-chart-container">
              <h1>Tiles per Category</h1>
              <div className="piechart">
        <TileChart /></div>
      </div>

      <div className="tile-chart-container">
              <h1>Requestform Analysis</h1>
              <StatusBarChart />
      </div>

      {/* Trending Tiles Section */}
      <h1>Trending Tiles</h1>
      <div className="admin-dashboard-tiles-container">
        {trendingTiles.length === 0 ? (
          <p>No trending tiles available</p>
        ) : (
          trendingTiles.map((tile) => (
            <div key={tile._id} className="admin-dashboard-tile-item">
              <div className="admin-dashboard-tile-image-container">
                <img
                  src={`https://bogantilesbackend.onrender.com${tile.imageUrl}`}
                  alt={tile.name}
                  className="admin-dashboard-tile-image"
                />
              </div>
              <h3>{tile.name}</h3>
              <p>Size: {tile.size}</p>
              <p>Price: ${tile.price}</p>
              <p>Category: {tile.category}</p>
            </div>
          ))
        )}
      </div>

      {/* Fast-Selling Tiles Section */}
      <h1>Fast-Selling Tiles</h1>
      <div className="admin-dashboard-tiles-container">
        {fastSellingTiles.length === 0 ? (
          <p>No fast-selling tiles available</p>
        ) : (
          fastSellingTiles.map((tile) => (
            <div key={tile._id} className="admin-dashboard-tile-item">
              <div className="admin-dashboard-tile-image-container">
                <img
                  src={`https://bogantilesbackend.onrender.com${tile.imageUrl}`}
                  alt={tile.name}
                  className="admin-dashboard-tile-image"
                />
              </div>
              <h3>{tile.name}</h3>
              <p>Size: {tile.size}</p>
              <p>Price: ${tile.price}</p>
              <p>Category: {tile.category}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminDashBoardHome;
