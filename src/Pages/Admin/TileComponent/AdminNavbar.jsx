// src/Components/Navbar/Navbar.js
import React from 'react';

import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  const navbarStyle = {
    backgroundColor: '#FF7F50',
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    
  };

  return (
    <div className="navbar" style={navbarStyle}>
      <Link to="/admin-dashboard" style={{ textDecoration: 'none', color: 'white' }}>
        <h1>Welcome to Bogan Tiles Dashboard</h1>
      </Link>
    </div>
  );
};


export default AdminNavbar;
