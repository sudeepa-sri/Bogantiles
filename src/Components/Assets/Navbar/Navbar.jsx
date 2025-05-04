
// import React, { useState, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../../Images/logo.png";

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const [cartCount, setCartCount] = useState(0);
//   const navigate = useNavigate();

//   // Logout handler
//   const handleLogout = () => {
//     localStorage.removeItem("userId");
//     localStorage.removeItem("isLoggedIn");
//     localStorage.removeItem("userEmail");
//     setCartCount(0); // Reset cart count
//     setMenu("home");           // Reset menu selection
//   navigate('/'); // Navigate back
//   };

//   // Fetch cart count
//   const fetchCart = async () => {
//     const userId = localStorage.getItem("userId");
//     if (!userId) {
//       setCartCount(0);
      
//       return;
//     }

//     try {
//       const res = await fetch(`https://bogantilesbackend.onrender.com/api/cart/${userId}`);
//       const data = await res.json();

//       if (data.tiles && data.tiles.length > 0) {
//         const totalQuantity = data.tiles.reduce(
//           (acc, item) => acc + item.quantity,
//           0
//         );
//         setCartCount(totalQuantity);
//       } else {
//         setCartCount(0);
//       }
//     } catch (err) {
//       console.error("Error fetching cart count:", err);
//       setCartCount(0);
//     }
//   };

//   useEffect(() => {
//     fetchCart();

//     // Listen for custom cartUpdated event
//     window.addEventListener("cartUpdated", fetchCart);

//     // Optional: polling every 2 seconds
//     const interval = setInterval(fetchCart, 2000);

//     return () => {
//       clearInterval(interval);
//       window.removeEventListener("cartUpdated", fetchCart);
//     };
//   }, []);

//   const isLoggedIn = localStorage.getItem("userId") !== null;

//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src={logo} alt="Logo" />
//         <p>BoganTiles</p>
//       </div>

//       <ul className="nav-menu">
//         <li onClick={() => setMenu("home")}>
//           <Link to="/">Home</Link>
//           {menu === "home" ? <hr /> : null}
//         </li>
//         <li onClick={() => setMenu("kitchentiles")}>
//           <Link to="/kitchentiles">Kitchen Tiles</Link>
//           {menu === "kitchentiles" ? <hr /> : null}
//         </li>
//         <li onClick={() => setMenu("floortiles")}>
//           <Link to="/floortiles">Floor Tiles</Link>
//           {menu === "floortiles" ? <hr /> : null}
//         </li>
//         <li onClick={() => setMenu("bathroomtiles")}>
//           <Link to="/bathroomtiles">Bathroom Tiles</Link>
//           {menu === "bathroomtiles" ? <hr /> : null}
//         </li>
//         <li onClick={() => setMenu("outdoortiles")}>
//           <Link to="/outdoortiles">Outdoor Tiles</Link>
//           {menu === "outdoortiles" ? <hr /> : null}
//         </li>
//       </ul>

//       <div className="nav-login-cart">
//         {!isLoggedIn ? (
//           <Link to="/login">
//             <button className="login-button">Login</button>
//           </Link>
//         ) : (
//           <button onClick={handleLogout} className="login-button">
//             Logout
//           </button>
//         )}

//         <Link to="/cart">
//           <div className="nav-login-cart">
//             <span className="cart-icon">🛒</span>
//             <div className="nav-cart-count">{cartCount}</div>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Images/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setCartCount(0); // Reset cart count
    setMenu("home"); // Reset menu selection
    navigate("/"); // Navigate back
  };

  // Fetch cart count
  const fetchCart = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      setCartCount(0);
      return;
    }

    try {
      const res = await fetch(`https://bogantilesbackend.onrender.com/api/cart/${userId}`);
      const data = await res.json();

      if (data.tiles && data.tiles.length > 0) {
        const totalQuantity = data.tiles.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(totalQuantity);
      } else {
        setCartCount(0);
      }
    } catch (err) {
      console.error("Error fetching cart count:", err);
      setCartCount(0);
    }
  };

  useEffect(() => {
    fetchCart();

    // Listen for custom cartUpdated event
    window.addEventListener("cartUpdated", fetchCart);

    // Optional: polling every 2 seconds
    const interval = setInterval(fetchCart, 2000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("cartUpdated", fetchCart);
    };
  }, []);

  const isLoggedIn = localStorage.getItem("userId") !== null;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img src={logo} alt="Logo" width="50" className="me-2" />
          <p className="fw-bold mb-0">BoganTiles</p>
        </a>
        
        {/* Navbar toggler for mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item" onClick={() => setMenu("home")}>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item" onClick={() => setMenu("kitchentiles")}>
              <Link className="nav-link" to="/kitchentiles">Kitchen Tiles</Link>
            </li>
            <li className="nav-item" onClick={() => setMenu("floortiles")}>
              <Link className="nav-link" to="/floortiles">Floor Tiles</Link>
            </li>
            <li className="nav-item" onClick={() => setMenu("bathroomtiles")}>
              <Link className="nav-link" to="/bathroomtiles">Bathroom Tiles</Link>
            </li>
            <li className="nav-item" onClick={() => setMenu("outdoortiles")}>
              <Link className="nav-link" to="/outdoortiles">Outdoor Tiles</Link>
            </li>
          </ul>

          {/* Login & Cart (Right) */}
          <div className="d-flex align-items-center gap-3">
            {!isLoggedIn ? (
              <Link to="/login">
                <button className="btn btn-outline-primary">Login</button>
              </Link>
            ) : (
              <button onClick={handleLogout} className="btn btn-outline-danger">Logout</button>
            )}

            <Link to="/cart">
              <div className="d-flex align-items-center position-relative">
                <span className="cart-icon fs-4">🛒</span>
                <div className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
