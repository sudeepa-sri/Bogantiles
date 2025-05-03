// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Requestform.css";

// const Requestform = () => {
//   const navigate = useNavigate();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("Namakkal");
//   const [locationText, setLocationText] = useState("");
//   const [phone, setPhone] = useState("");
//   const [contactTime, setContactTime] = useState("");
//   const [message, setMessage] = useState("");
//   const [statusMessage, setStatusMessage] = useState("");
//   const [cartTiles, setCartTiles] = useState([]);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       navigate("/login");
//       return;
//     }

//     fetch(`http://localhost:5000/api/cart/${userId}`)
//       .then(res => res.json())
//       .then(data => {
//         const tilesWithQuantity = data.tiles.map(item => ({
//           ...item.tileId,
//           quantity: item.quantity || 1,
//         }));
//         setCartTiles(tilesWithQuantity);
//       })
//       .catch(() => setStatusMessage("Error loading your cart tiles."));
//   }, [navigate]);

//   const handleRemoveTile = (id) => {
//     setCartTiles(cartTiles.filter(tile => tile._id !== id));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     if (!name || !email || !phone || !contactTime || !locationText) {
//       setStatusMessage("Please fill in all the required fields.");
//       return;
//     }
  
//     if (cartTiles.length === 0) {
//       setStatusMessage("Your request must include at least one tile.");
//       return;
//     }
  
//     try {
//       const response = await fetch("http://localhost:5000/api/request", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name,
//           email,
//           phone,
//           contactTime,
//           city,
//           locationText,
//           message,
//           taluk: "Taluk Name", // Ensure taluk is set
//           tiles: cartTiles.map(tile => ({
//             tileId: tile._id,
//             quantity: tile.quantity,
//           })),
//         }),
//       });
  
//       const result = await response.json();
//       if (response.ok) {
//         setStatusMessage("✅ Your request was sent successfully! You will be contacted within five days.");
      
//         // Hide the message after 4 seconds and redirect
//         setTimeout(() => {
//           setStatusMessage(""); // Clear the message
//           const userId = localStorage.getItem("userId"); // Or however you store the user ID
//           window.location.href = `/cart/${userId}`; // Navigate back to cart
//         }, 4000);
      
//       } else {
//         setStatusMessage(`❌ Error: ${result.message}`);
//       }
//     } catch (error) {
//       console.error('Error submitting request:', error);
//       setStatusMessage("❌ Error submitting the form.");
//     }
//   };
  

//   const calculateTotalPrice = () => {
//     return cartTiles.reduce((sum, tile) => sum + tile.price * tile.quantity, 0);
//   };

//   return (
//     <div className="userrequest">
  
//     <div className="request-form-container">
//       <h2>Tile Request</h2>

//       {statusMessage && <div className="status-message">{statusMessage}</div>}

//       <form onSubmit={handleSubmit}>
//         <div className="form-field">
//           <label>Your Name</label>
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
//         </div>

//         <div className="form-field">
//           <label>Your Email</label>
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </div>

//         <div className="form-field">
//           <label>Phone Number</label>
//           <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
//         </div>

//         <div className="form-field">
//           <label>City</label>
//           <input type="text" value={city} readOnly />
//         </div>

//         <div className="form-field">
//           <label>Location (Taluk/Area)</label>
//           <input
//             type="text"
//             value={locationText}
//             onChange={(e) => setLocationText(e.target.value)}
//             required
//           />
//         </div>

//         <div className="form-field">
//           <label>Preferred Contact Time</label>
//           <select value={contactTime} onChange={(e) => setContactTime(e.target.value)} required>
//             <option value="">Select Time</option>
//             <option value="Morning">Morning</option>
//             <option value="Afternoon">Afternoon</option>
//             <option value="Evening">Evening</option>
//           </select>
//         </div>

//         <div className="form-field">
//           <label>Message (optional)</label>
//           <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
//         </div>

//         <h3>Tiles in Your Request</h3>

//         {cartTiles.length === 0 ? (
//           <p>No tiles in your request.</p>
//         ) : (
//           cartTiles.map((tile, index) => (
//             <div key={tile._id} className="tile-info-request">
//               <img
//                 src={`http://localhost:5000${tile.imageUrl}`}
//                 alt={tile.name}
//                 className="tile-image"
//               />
//               <div className="tile-details">
//                 <p><strong>{tile.name}</strong> ({tile.size}, ₹{tile.price} each)</p>

//                 <div className="form-field">
//                   <label>Quantity</label>
//                   <input
//                     type="number"
//                     value={tile.quantity}
//                     min="1"
//                     onChange={(e) => {
//                       const newQuantity = Number(e.target.value);
//                       const updatedTiles = cartTiles.map((t, i) =>
//                         i === index ? { ...t, quantity: newQuantity } : t
//                       );
//                       setCartTiles(updatedTiles);
//                     }}
//                     required
//                   />
//                 </div>

//                 <p><strong>Subtotal: ₹{tile.price * tile.quantity}</strong></p>

//                 <button type="button" className="remove-btn" onClick={() => handleRemoveTile(tile._id)}>
//   🗑 Remove
// </button>

//               </div>
//             </div>
//           ))
//         )}

//         <div className="form-field">
//           <strong>Total Estimated Price: ₹{calculateTotalPrice()}</strong>
//         </div>

//         <button type="submit" className="submit-btn">Send Request</button>

// {/* ✅ Show message just below the button */}
// {statusMessage && (
//   <p style={{ marginTop: "10px", color: statusMessage.startsWith("✅") ? "green" : "red" }}>
//     {statusMessage}
//   </p>
// )}

//       </form>
//     </div>
//     </div>
//   );
// };

// export default Requestform;


import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Requestform.css";

const Requestform = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("Namakkal");
  const [locationText, setLocationText] = useState("");
  const [phone, setPhone] = useState("");
  const [contactTime, setContactTime] = useState("");
  const [message, setMessage] = useState("");
  const [referenceImages, setReferenceImages] = useState([]);

  const [statusMessage, setStatusMessage] = useState("");
  const [cartTiles, setCartTiles] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      navigate("/login");
      return;
    }

    fetch(`http://localhost:5000/api/cart/${userId}`)
      .then(res => res.json())
      .then(data => {
        const tilesWithQuantity = data.tiles.map(item => ({
          ...item.tileId,
          quantity: item.quantity || 1,
        }));
        setCartTiles(tilesWithQuantity);
      })
      .catch(() => setStatusMessage("Error loading your cart tiles."));
  }, [navigate]);

  const handleRemoveTile = (id) => {
    setCartTiles(cartTiles.filter(tile => tile._id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !email || !phone || !contactTime || !locationText) {
      setStatusMessage("Please fill in all the required fields.");
      return;
    }
  
    if (cartTiles.length === 0) {
      setStatusMessage("Your request must include at least one tile.");
      return;
    }
  
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("contactTime", contactTime);
      formData.append("city", city);
      formData.append("locationText", locationText);
      formData.append("message", message);
      formData.append("taluk", "Taluk Name");
  
      formData.append("tiles", JSON.stringify(cartTiles.map(tile => ({
        tileId: tile._id,
        quantity: tile.quantity,
      }))));
  
      referenceImages.forEach((file) => {
        formData.append("images", file);
      });
  
      const response = await fetch("http://localhost:5000/api/request", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        const result = await response.json(); // Only parse if response is successful
        setStatusMessage("✅ Your request was sent successfully! You will be contacted within five days.");
        setTimeout(() => {
          setStatusMessage("");
          const userId = localStorage.getItem("userId");
          window.location.href = `/cart/${userId}`;
        }, 4000);
      } else {
        // Handle error responses
        const errorResponse = await response.text();
        setStatusMessage(`❌ Error: ${errorResponse}`);
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      setStatusMessage("❌ Error submitting the form.");
    }
  };
  
  

  const calculateTotalPrice = () => {
    return cartTiles.reduce((sum, tile) => sum + tile.price * tile.quantity, 0);
  };

  return (
    <div className="userrequest">
      <div className="request-form-container">
        <h2>Tile Request</h2>

        {statusMessage && <div className="status-message">{statusMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Your Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <div className="form-field">
            <label>Your Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-field">
            <label>Phone Number</label>
            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </div>

          <div className="form-field">
            <label>City</label>
            <input type="text" value={city} readOnly />
          </div>

          <div className="form-field">
            <label>Location (Taluk/Area)</label>
            <input
              type="text"
              value={locationText}
              onChange={(e) => setLocationText(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label>Preferred Contact Time</label>
            <select value={contactTime} onChange={(e) => setContactTime(e.target.value)} required>
              <option value="">Select Time</option>
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>

          <div className="form-field">
            <label>Message (optional)</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
          </div>

          <div className="form-field">
  <label>Upload Reference Images (optional)</label>
  <input
    type="file"
    multiple
    accept="image/*"
    onChange={(e) => {
      setReferenceImages(prevImages => [
        ...prevImages,
        ...Array.from(e.target.files) // Add selected files to the state
      ]);
    }}
  />
</div>

{referenceImages.length > 0 && (
  <div className="selected-files-list">
    <h4>Selected Files:</h4>
    <ul>
      {referenceImages.map((file, index) => (
        <li key={index}>{file.name}</li> // Display each file name
      ))}
    </ul>
  </div>
)}



          <h3>Tiles in Your Request</h3>

          {cartTiles.length === 0 ? (
            <p>No tiles in your request.</p>
          ) : (
            cartTiles.map((tile, index) => (
              <div key={tile._id} className="tile-info-request">
                <img
                  src={`http://localhost:5000${tile.imageUrl}`}
                  alt={tile.name}
                  className="tile-image"
                />
                <div className="tile-details">
                  <p><strong>{tile.name}</strong> ({tile.size}, ₹{tile.price} each)</p>

                  <div className="form-field">
                    <label>Quantity</label>
                    <input
                      type="number"
                      value={tile.quantity}
                      min="1"
                      onChange={(e) => {
                        const newQuantity = Number(e.target.value);
                        const updatedTiles = cartTiles.map((t, i) =>
                          i === index ? { ...t, quantity: newQuantity } : t
                        );
                        setCartTiles(updatedTiles);
                      }}
                      required
                    />
                  </div>

                  <p><strong>Subtotal: ₹{tile.price * tile.quantity}</strong></p>

                  <button type="button" className="remove-btn" onClick={() => handleRemoveTile(tile._id)}>
                    🗑 Remove
                  </button>
                </div>
              </div>
            ))
          )}

          <div className="form-field">
            <strong>Total Estimated Price: ₹{calculateTotalPrice()}</strong>
          </div>

          <button type="submit" className="submit-btn">Send Request</button>

          {statusMessage && (
            <p style={{ marginTop: "10px", color: statusMessage.startsWith("✅") ? "green" : "red" }}>
              {statusMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Requestform;
