import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './Trending.css';

const Trending = () => {
  const [trendingTiles, setTrendingTiles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendingTiles = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/tiles/trending");
        const data = await response.json();
        setTrendingTiles(data);
      } catch (error) {
        console.error("Error loading trending data:", error);
      }
    };

    fetchTrendingTiles();
  }, []);

  const handleViewDetails = (tileId) => {
    navigate(`/trending/${tileId}`); // ⬅️ Ensure this matches your route
  };

  return (
    <div className="trending-wrapper trending">
      <h2>Trending Tiles</h2>
      <div className="tile-grid-trend">
        {trendingTiles.length === 0 ? (
          <p>No trending tiles available</p>
        ) : (
          trendingTiles.map((tile) => (
            <div key={tile._id} className="tile-card-trend">
              <img
                src={`http://localhost:5000${tile.imageUrl}`}
                alt={tile.name}
                className="tile-image-trend"
              />
              <h3>{tile.name}</h3>
              <p><strong>Category:</strong> {tile.category}</p>
              <p><strong>Price:</strong> ₹{tile.price}</p>
              <button onClick={() => handleViewDetails(tile._id)} className="view-details-button">
                View Details
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Trending;
