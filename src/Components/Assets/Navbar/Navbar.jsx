
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
import "./Navbar.css";
import logo from "../../Images/logo.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [cartCount, setCartCount] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setCartCount(0);
    setMenu("home");
    navigate("/");
  };

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
    window.addEventListener("cartUpdated", fetchCart);
    const interval = setInterval(fetchCart, 2000);
    return () => {
      clearInterval(interval);
      window.removeEventListener("cartUpdated", fetchCart);
    };
  }, []);

  const isLoggedIn = localStorage.getItem("userId") !== null;

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>BoganTiles</p>
      </div>

      {/* Hamburger menu toggle for mobile */}
      <button className="menu-toggle" onClick={() => setShowMenu(prev => !prev)}>
        ☰
      </button>

      <ul className={`nav-menu ${showMenu ? "show" : ""}`}>
        <li onClick={() => setMenu("home")}>
          <Link to="/">Home</Link>
          {menu === "home" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("kitchentiles")}>
          <Link to="/kitchentiles">Kitchen Tiles</Link>
          {menu === "kitchentiles" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("floortiles")}>
          <Link to="/floortiles">Floor Tiles</Link>
          {menu === "floortiles" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("bathroomtiles")}>
          <Link to="/bathroomtiles">Bathroom Tiles</Link>
          {menu === "bathroomtiles" ? <hr /> : null}
        </li>
        <li onClick={() => setMenu("outdoortiles")}>
          <Link to="/outdoortiles">Outdoor Tiles</Link>
          {menu === "outdoortiles" ? <hr /> : null}
        </li>
      </ul>

      <div className="nav-login-cart">
        {!isLoggedIn ? (
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        ) : (
          <button onClick={handleLogout} className="login-button">
            Logout
          </button>
        )}

        <Link to="/cart" className="cart-icon-container">
          <span className="cart-icon">🛒</span>
          <div className="nav-cart-count">{cartCount}</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
