

// import React, { useEffect, useState } from 'react';

// function CartPage() {
//   const [cart, setCart] = useState(null);
//   const userId = localStorage.getItem('userId');

//   useEffect(() => {
//     fetch(`http://localhost:5000/api/cart/${userId}`)
//       .then(res => res.json())
//       .then(data => setCart(data))
//       .catch(err => console.error('Error fetching cart:', err));
//   }, [userId]);

//   const handleRemove = (tileId) => {
//     fetch(`http://localhost:5000/api/cart/${userId}/${tileId}`, {
//       method: 'DELETE'
//     })
//       .then(res => res.json())
//       .then(data => setCart(data.cart))
//       .catch(err => console.error('Error removing item:', err));
//   };

//   if (!cart) return <div>Loading cart...</div>;
//   if (cart.tiles.length === 0) return <div>Your cart is empty.</div>;

//   return (
//     <div className="addcart">
//       <div className="cart-page">
//         <h2>Your Cart</h2>
//         {cart.tiles.map(({ tileId, quantity }) => (
//           <div key={tileId._id} className="cart-item">
//             <img src={`http://localhost:5000${tileId.imageUrl}`} alt={tileId.name} className="cart-item-image" />
//             <div className="cart-item-details">
//               <h4>{tileId.name}</h4>
//               <p>{tileId.shortDescription}</p>
//               <p>Price: ₹{tileId.price}</p>
//               <p>Quantity: {quantity}</p>
//               <button onClick={() => handleRemove(tileId._id)}>🗑 Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CartPage;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // import this

// function CartPage() {
//   const [cart, setCart] = useState(null);
//   const userId = localStorage.getItem('userId');
//   const navigate = useNavigate(); // useNavigate hook

//   useEffect(() => {
//     if (!userId) {
//       navigate('/login'); // Redirect to login if not logged in
//       return;
//     }

//     fetch(`http://localhost:5000/api/cart/${userId}`)
//       .then(res => res.json())
//       .then(data => setCart(data))
//       .catch(err => console.error('Error fetching cart:', err));
//   }, [userId, navigate]);

//   const handleRemove = (tileId) => {
//     fetch(`http://localhost:5000/api/cart/${userId}/${tileId}`, {
//       method: 'DELETE'
//     })
//       .then(res => res.json())
//       .then(data => setCart(data.cart))
//       .catch(err => console.error('Error removing item:', err));
//   };

//   if (!cart) return <div>Loading cart...</div>;
//   if (cart.tiles.length === 0) return <div>Your cart is empty.</div>;

//   return (
//     <div className="addcart">
//       <div className="cart-page">
//         <h2>Your Cart</h2>
//         {cart.tiles.map(({ tileId, quantity }) => (
//           <div key={tileId._id} className="cart-item">
//             <img src={`http://localhost:5000${tileId.imageUrl}`} alt={tileId.name} className="cart-item-image" />
//             <div className="cart-item-details">
//               <h4>{tileId.name}</h4>
//               <p>{tileId.shortDescription}</p>
//               <p>Price: ₹{tileId.price}</p>
//               <p>Quantity: {quantity}</p>
//               <button onClick={() => handleRemove(tileId._id)}>🗑 Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CartPage;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // import this
// import './CardPage.css';  // Adjust the path to your actual CSS file

// function CartPage() {
//   const [cart, setCart] = useState(null);
//   const userId = localStorage.getItem('userId');
//   const navigate = useNavigate(); // useNavigate hook

//   useEffect(() => {
//     if (!userId) {
//       navigate('/login'); // Redirect to login if not logged in
//       return;
//     }

//     fetch(`http://localhost:5000/api/cart/${userId}`)
//       .then(res => res.json())
//       .then(data => setCart(data))
//       .catch(err => console.error('Error fetching cart:', err));
//   }, [userId, navigate]);

//   const handleRemove = (tileId) => {
//     fetch(`http://localhost:5000/api/cart/${userId}/${tileId}`, {
//       method: 'DELETE'
//     })
//       .then(res => res.json())
//       .then(data => setCart(data.cart))
//       .catch(err => console.error('Error removing item:', err));
//   };

//   if (!cart) return <div>Loading cart...</div>;
//   if (cart.tiles.length === 0) return <div>Your cart is empty.</div>;

//   return (
//     <div className="addcart">
//       <div className="cart-page">
//         <h2>Your Cart</h2>
//         {cart.tiles.map(({ tileId, quantity }) => (
//           <div key={tileId._id} className="cart-item">
//             <img src={`http://localhost:5000${tileId.imageUrl}`} alt={tileId.name} className="cart-item-image" />
//             <div className="cart-item-details">
//               <h4>{tileId.name}</h4>
//               <p>{tileId.shortDescription}</p>
//               <p>Price (each): ₹{tileId.price}</p>
// <p>Quantity: {quantity}</p>
// <p>Total: ₹{tileId.price * quantity}</p>

//               <button onClick={() => handleRemove(tileId._id)}>🗑 Remove</button>
//             </div>
//           </div>
//         ))}
        
//         {/* Request Form Button */}
//         <button 
//           className="request-form-button"
//           onClick={() => navigate('/request-form')}
//         >
//           Request Form
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CartPage;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CardPage.css';

// function CartPage() {
//   const [cart, setCart] = useState(null);
//   const userId = localStorage.getItem('userId');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!userId) {
//       navigate('/login');
//       return;
//     }

//     fetch(`http://localhost:5000/api/cart/${userId}`)
//       .then(res => res.json())
//       .then(data => setCart(data))
//       .catch(err => console.error('Error fetching cart:', err));
//   }, [userId, navigate]);

//   const handleRemove = (tileId) => {
//     fetch(`http://localhost:5000/api/cart/${userId}/${tileId}`, {
//       method: 'DELETE'
//     })
//       .then(res => res.json())
//       .then(data => setCart(data.cart))
//       .catch(err => console.error('Error removing item:', err));
//   };

//   if (!cart) return <div>Loading cart...</div>;
//   if (cart.tiles.length === 0) return <div>Your cart is empty.</div>;

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>
//       {cart.tiles.map(({ tileId }) => (
//         <div key={tileId._id} className="cart-item">
//           <div className="cart-image">
//             <img src={`http://localhost:5000${tileId.imageUrl}`} alt={tileId.name} />
//           </div>
//           <div className="cart-info">
//             <h3>{tileId.name}</h3>
//             <p><strong>Size:</strong> {tileId.size}</p>
//             <p><strong>Category:</strong> {tileId.category}</p>
//             <p><strong>Material:</strong> {tileId.material}</p>
//             <p><strong>Color:</strong> {tileId.color}</p>
//             <p><strong>Price:</strong> ₹{tileId.price}</p>
//             <button className="remove-small" onClick={() => handleRemove(tileId._id)}>🗑 Remove</button>
//           </div>
//         </div>
//       ))}
//       <div className="request-button-wrapper">
//         <button onClick={() => navigate('/request-form')}>Request Form</button>
//       </div>
//     </div>
//   );
// }

// export default CartPage;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CardPage.css';

// function CartPage() {
//   const [cart, setCart] = useState(null);
//   const userId = localStorage.getItem('userId');
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!userId) {
//       navigate('/login');
//       return;
//     }

//     fetch(`http://localhost:5000/api/cart/${userId}`)
//       .then(res => res.json())
//       .then(data => setCart(data))
//       .catch(err => {
//         console.error('Error fetching cart:', err);
//         setCart({ tiles: [] }); // fallback to empty cart
//       });
//   }, [userId, navigate]);

//   const handleRemove = (tileId) => {
//     fetch(`http://localhost:5000/api/cart/${userId}/${tileId}`, {
//       method: 'DELETE'
//     })
//       .then(res => res.json())
//       .then(data => setCart(data.cart))
//       .catch(err => console.error('Error removing item:', err));
//   };

//   if (!cart) return <div className="loading">Loading your cart...</div>;
//   if (cart.tiles.length === 0) return <div>Your cart is empty.</div>;

//   return (
//     <div className="cart-page">
//       <h2>Your Cart</h2>
//       {cart.tiles.map(({ tileId }) => (
//         <div key={tileId._id} className="cart-item">
//           <div className="cart-image">
//             <img
//               src={`http://localhost:5000${tileId.imageUrl}`}
//               alt={`Tile: ${tileId.name}`}
//             />
//           </div>
//           <div className="cart-info">
//             <h3>{tileId.name}</h3>
//             <p><strong>Size:</strong> {tileId.size}</p>
//             <p><strong>Category:</strong> {tileId.category}</p>
//             <p><strong>Material:</strong> {tileId.material}</p>
//             <p><strong>Color:</strong> {tileId.color}</p>
//             <p><strong>Price:</strong> ₹{tileId.price}</p>
//             <button
//               className="remove-small"
//               onClick={() => handleRemove(tileId._id)}
//             >
//               🗑 Remove
//             </button>
//             <button
//             className="sentrequest-small"
//               onClick={() => navigate('/request-form', { state: { tile: tileId } })}
//             >
//               Request Tile
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CartPage;

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

    fetch(`http://localhost:5000/api/cart/${userId}`)
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => {
        console.error('Error fetching cart:', err);
        setCart({ tiles: [] });
      });
  }, [userId, navigate]);

  const handleRemove = (tileId) => {
    fetch(`http://localhost:5000/api/cart/${userId}/${tileId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Re-fetch the updated cart
        fetch(`http://localhost:5000/api/cart/${userId}`)
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
              src={`http://localhost:5000${tileId.imageUrl}`}
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
