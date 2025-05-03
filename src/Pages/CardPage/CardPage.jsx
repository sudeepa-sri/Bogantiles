

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CardPage.css';

function CartPage() {
  const [cart, setCart] = useState(null);
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) {
      navigate('/login');
      return;
    }

    fetch(`https://bogantilesbackend.onrender.com/api/cart/${userId}`)
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => {
        console.error('Error fetching cart:', err);
        setCart({ tiles: [] });
      });
  }, [userId, navigate]);

  const handleRemove = (tileId) => {
    fetch(`https://bogantilesbackend.onrender.com/api/cart/${userId}/${tileId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Re-fetch the updated cart
        fetch(`https://bogantilesbackend.onrender.com/api/cart/${userId}`)
          .then(res => res.json())
          .then(data => setCart(data))
          .catch(err => console.error('Error fetching updated cart:', err));
      })
      .catch(err => console.error('Error removing item:', err));
  };
  

  if (!cart) return <div className="loading">Loading your cart...</div>;
  if (cart.tiles.length === 0) return <div className="empty-cart">Your cart is empty.</div>;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.tiles.map(({ tileId }) => (
        <div key={tileId._id} className="cart-item">
          <div className="cart-image">
            <img
              src={`https://bogantilesbackend.onrender.com${tileId.imageUrl}`}
              alt={`Tile: ${tileId.name}`}
            />
          </div>
          <div className="cart-info">
            <h3>{tileId.name}</h3>
            <p><strong>Size:</strong> {tileId.size}</p>
            <p><strong>Category:</strong> {tileId.category}</p>
            <p><strong>Material:</strong> {tileId.material}</p>
            <p><strong>Color:</strong> {tileId.color}</p>
            <p><strong>Price:</strong> ₹{tileId.price}</p>
            <button
              className="remove-small"
              onClick={() => handleRemove(tileId._id)}
            >
              🗑 Remove
            </button>
          </div>
        </div>
      ))}

      {/* ✅ Send Request for All Cart Tiles */}
      <div className="request-button-container">
        <button
          className="send-request-btn"
          onClick={() => navigate('/request-form')}
        >
          📩 Send Request for All Tiles
        </button>
      </div>
    </div>
  );
}

export default CartPage;
