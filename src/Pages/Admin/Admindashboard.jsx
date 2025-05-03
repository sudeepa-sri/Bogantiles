import React from 'react';
import Sidebar from './TileComponent/Sidebar.jsx';
import Navbar from './TileComponent/AdminNavbar.jsx';
import { Routes, Route } from 'react-router-dom';
import AddTile from './TileComponent/AddTile.jsx';
import Orders from './TileComponent/Orders.jsx';

import AdminBathroomTile from './TileComponent/Adminbathroomtile.jsx';
import AdminOutdoorTile from './TileComponent/Adminoutdoortile.jsx';
import AdminKitchenTile from './TileComponent/Adminkitchentile.jsx';
import AdminFloorTile from './TileComponent/Adminfloortile.jsx';
import EditTile from './TileComponent/EditTile.jsx';
import AdminDashboardHome from './TileComponent/AdminDashBoardHome.jsx';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />

      <div className="admin-main">
        <Navbar />

        <div className="admin-content">
          <Routes>
            {/* Main Routes for Admin Dashboard */}
            <Route path="adminaddtile" element={<AddTile />} />
            <Route path="adminorders" element={<Orders />} />
            <Route path="adminbathroomtile" element={<AdminBathroomTile />} />
            <Route path="adminbathroomtile/edit/:id" element={<EditTile />} />
            {/* Admin Kitchen Tile Page and Edit Route */}
            <Route path="adminkitchentile" element={<AdminKitchenTile />} />
            <Route path="adminkitchentile/edit/:id" element={<EditTile />} />
            
            {/* Other Routes */}
            <Route path="adminoutdoortile" element={<AdminOutdoorTile />} />
            <Route path="adminoutdoortile/edit/:id" element={<EditTile />} />
            <Route path="adminfloortile" element={<AdminFloorTile />} />
            
            <Route path="adminfloortile/edit/:id" element={<EditTile />} />
            <Route path="" element={<AdminDashboardHome />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

