// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaThLarge, FaTags, FaBox, FaPlus, FaBath, FaUtensils, FaLayerGroup, FaTree } from 'react-icons/fa';
// import './Sidebar.css';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       {/* <div className="sidebar-title">Bogan Tiles</div> */}
//       <nav className="sidebar-nav">
//         <Link to="/admin-dashboard/adminaddtile" className="sidebar-link">
//           <FaPlus />
//           <span>Add Tile</span>
//         </Link>
        
//         <Link to="/admin-dashboard/adminbathroomtile" className="sidebar-link">
//           <FaBath />
//           <span>Bathroom Tiles</span>
//         </Link>
        
//          <Link to="/admin-dashboard/adminkitchentile" className="sidebar-link">
//           <FaUtensils />
//           <span>Kitchen Tiles</span>
//         </Link> 
//         <Link to="/admin-dashboard/adminfloortile" className="sidebar-link">
//           <FaLayerGroup />
//           <span>Floor Tiles</span>
//         </Link>
//         <Link to="/admin-dashboard/adminoutdoortile" className="sidebar-link">
//           <FaTree />
//           <span>Outdoor Tiles</span>
//         </Link>
//         <Link to="/admin-dashboard/adminorders" className="sidebar-link">
//           <FaBox />
//           <span>Orders</span>
//         </Link>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaThLarge, FaTags, FaBox, FaPlus, FaBath, FaUtensils, FaLayerGroup, FaTree, FaSignOutAlt } from 'react-icons/fa'; // Added FaSignOutAlt for logout icon
// Make sure axios is imported
import axios from 'axios';
import './Sidebar.css';

const Sidebar = () => {
  // Handle Logout
 
  const handleLogout = async () => {
    try {
      // Make an API call to log out on the server
      await axios.post('http://localhost:5000/api/logout');
      // After logging out, redirect to home page
      window.location.href = '/'; // Redirect to home page
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  

  return (
    <div className="sidebar">
      {/* <div className="sidebar-title">Bogan Tiles</div> */}
      <nav className="sidebar-nav">
        {/* Add Tile Link */}
        <Link to="/admin-dashboard/adminaddtile" className="sidebar-link">
          <FaPlus />
          <span>Add Tile</span>
        </Link>

        {/* Bathroom Tiles Link */}
        <Link to="/admin-dashboard/adminbathroomtile" className="sidebar-link">
          <FaBath />
          <span>Bathroom Tiles</span>
        </Link>

        {/* Kitchen Tiles Link */}
        <Link to="/admin-dashboard/adminkitchentile" className="sidebar-link">
          <FaUtensils />
          <span>Kitchen Tiles</span>
        </Link>

        {/* Floor Tiles Link */}
        <Link to="/admin-dashboard/adminfloortile" className="sidebar-link">
          <FaLayerGroup />
          <span>Floor Tiles</span>
        </Link>

        {/* Outdoor Tiles Link */}
        <Link to="/admin-dashboard/adminoutdoortile" className="sidebar-link">
          <FaTree />
          <span>Outdoor Tiles</span>
        </Link>

        {/* Orders Link */}
        <Link to="/admin-dashboard/adminorders" className="sidebar-link">
          <FaBox />
          <span>Requests</span>
        </Link>

        {/* Logout Link */}
        <div className="sidebar-link" onClick={handleLogout} style={{ cursor: 'pointer' }}>
          <FaSignOutAlt />
          <span>Logout</span>
        </div>

      </nav>
    </div>
  );
};

export default Sidebar;
