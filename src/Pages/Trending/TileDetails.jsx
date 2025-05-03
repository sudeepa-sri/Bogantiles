import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './TileDetails.css';

function TrendingTileDetails() {
  const { tileId } = useParams();
  const navigate = useNavigate();
  const [tile, setTile] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/tiles/${tileId}`)
      .then((response) => response.json())
      .then((data) => {
        setTile(data);
      })
      .catch((error) => console.error('Error fetching tile data:', error));
  }, [tileId]);

  const handleAddToCart = async () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userId = localStorage.getItem("userId");

    if (!isLoggedIn || !userId) {
      alert("❗Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          tileId: tile._id,
          quantity: 1,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(`✅ Added ${tile.name} to cart for user ${userId}`);
        alert(`${tile.name} has been added to your cart.`);
        navigate("/cart");
      } else {
        console.error("❌ Error:", result.message);
        alert("Failed to add to cart: " + result.message);
      }
    } catch (error) {
      console.error("❌ Error adding to cart:", error);
      alert("An error occurred while adding to cart.");
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (!tile) return <div>Loading...</div>;

  return (
    <div className="tile-details-page">
      <div className="tile-details-container">
        <div className="tile-image-section">
          <img
            src={`http://localhost:5000${tile.imageUrl}`}
            alt={tile.name}
            className="tile-details-image"
          />
        </div>
        <div className="tile-info-section">
          <h2>{tile.name}</h2>
          <p><strong>Short Description:</strong> {tile.shortDescription}</p>
          <p><strong>Full Description:</strong> {tile.description}</p>
          <p><strong>Size:</strong> {tile.size}</p>
          <p><strong>Material:</strong> {tile.material}</p>
          <p><strong>Finish:</strong> {tile.finish}</p>
          <p><strong>Color:</strong> {tile.color}</p>
          <p><strong>Price:</strong> ₹{tile.price}</p>

          <div className="tile-details-buttons">
            <button className="back-button" onClick={handleBack}>← Back to Products</button>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrendingTileDetails;

