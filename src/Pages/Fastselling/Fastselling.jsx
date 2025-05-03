import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import navigate
import '../Trending/Trending.css';

const Fastselling = () => {
  const [trendingTiles, setTrendingTiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendingTiles = async () => {
      try {
        const response = await fetch("https://bogantilesbackend.onrender.com/api/tiles/fast-selling");
        const data = await response.json();
        setTrendingTiles(data);
      } catch (error) {
        console.error("Error loading trending data:", error);
      }
    };

    fetchTrendingTiles();
  }, []);

  const handleViewDetails = (tileId) => {
    navigate(`/trending/${tileId}`); // Navigate to tile detail page
  };

  return (
    <div className="trending-wrapper">
      <h2>Fast Selling Tiles</h2>
      <div className="tile-grid-trend">
        {trendingTiles.length === 0 ? (
          <p>No trending tiles available</p>
        ) : (
          trendingTiles.map((tile) => (
            <div key={tile._id} className="tile-card-trend">
              <img
                src={`https://bogantilesbackend.onrender.com${tile.imageUrl}`}
                alt={tile.name}
                className="tile-image-trend"
              />
              <h3>{tile.name}</h3>
              <p><strong>Category:</strong> {tile.category}</p>
              <p><strong>Price:</strong> ₹{tile.price}</p>
              <button onClick={() => handleViewDetails(tile._id)}>View Details</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Fastselling;

