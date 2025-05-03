
// import './App.css';
// import Navbar from './Components/Assets/Navbar/Navbar';
// import Footer from './Components/Assets/Footer/Footer';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// import Home from './Pages/Home';
// import Loginsignup from './Pages/Loginsignup';

// import KitchenTileDetails from './Pages/Kitchentiles/TileDetails';
// import OutdoorTileDetails from './Pages/Outdoortiles/TileDetails';
// import FloorTileDetails from './Pages/Floortiles/TileDetails';
// import BathroomTileDetails from './Pages/Bathroomtiles/TileDetails';

// import Kitchentiles from './Pages/Kitchentiles/Kitchentiles';
// import Floortiles from './Pages/Floortiles/Floortiles';
// import Bathroomtiles from './Pages/Bathroomtiles/Bathroomtiles';
// import Outdoortiles from './Pages/Outdoortiles/Outdoortiles';

// import Cart from './Pages/CardPage/CardPage';

// import AdminLogin from './Pages/Admin/AdminLogin';
// import AdminDashboard from './Pages/Admin/AdminDashboard';

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// function AppContent() {
//   const location = useLocation();
  
//   // Hide Navbar and Footer on Admin routes
//   const hideHeaderFooter = 
//     location.pathname.startsWith('/admin-login') || location.pathname.startsWith('/admin-dashboard');

//   return (
//     <>
//       {/* Conditionally render Navbar and Footer */}
//       {!hideHeaderFooter && <Navbar />}

//       <Routes className="main-content">
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Loginsignup />} />
//         <Route path="/kitchentiles" element={<Kitchentiles />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/floortiles" element={<Floortiles />} />
//         <Route path="/kitchen/:tileId" element={<KitchenTileDetails />} />
//         <Route path="/floor/:tileId" element={<FloorTileDetails />} />
//         <Route path="/bathroom/:tileId" element={<BathroomTileDetails />} />
//         <Route path="/outdoor/:tileId" element={<OutdoorTileDetails />} />
//         <Route path="/bathroomtiles" element={<Bathroomtiles />} />
//         <Route path="/outdoortiles" element={<Outdoortiles />} />
        
//         {/* Admin Login Route */}
//         <Route path="/admin-login" element={<AdminLogin />} />
        
//         {/* Admin Dashboard Route */}
//         <Route path="/admin-dashboard/*" element={<AdminDashboard />} />
//       </Routes>

//       {/* Conditionally render Footer */}
//       {!hideHeaderFooter && <Footer />}
//     </>
//   );
// }

// export default App;

// import './App.css';
// import Navbar from './Components/Assets/Navbar/Navbar';
// import Footer from './Components/Assets/Footer/Footer';
// import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// import Home from './Pages/Home';
// import Loginsignup from './Pages/Loginsignup';

// import KitchenTileDetails from './Pages/Kitchentiles/TileDetails';
// import OutdoorTileDetails from './Pages/Outdoortiles/TileDetails';
// import FloorTileDetails from './Pages/Floortiles/TileDetails';
// import BathroomTileDetails from './Pages/Bathroomtiles/TileDetails';

// import Kitchentiles from './Pages/Kitchentiles/Kitchentiles';
// import Floortiles from './Pages/Floortiles/Floortiles';
// import Bathroomtiles from './Pages/Bathroomtiles/Bathroomtiles';
// import Outdoortiles from './Pages/Outdoortiles/Outdoortiles';

// import Cart from './Pages/CardPage/CardPage';

// import AdminLogin from './Pages/Admin/AdminLogin';
// import AdminDashboard from './Pages/Admin/Admindashboard';

// // Admin tile components
// import AddTile from './Pages/Admin/TileComponent/AddTile';
// import Orders from './Pages/Admin/TileComponent/Orders';
// import AdminBathroomTile from './Pages/Admin/TileComponent/Adminbathroomtile';
// import AdminKitchenTile from './Pages/Admin/TileComponent/Adminkitchentile';
// import AdminFloorTile from './Pages/Admin/TileComponent/Adminfloortile';
// import AdminOutdoorTile from './Pages/Admin/TileComponent/Adminoutdoortile';
// import TrendingTileDetails from './Pages/Trending/TileDetails';
// import Requestform from './Pages/Requestform/Requestform';

// function App() {
//   return (
//     <BrowserRouter>
//       <AppContent />
//     </BrowserRouter>
//   );
// }

// function AppContent() {
//   const location = useLocation();
  
//   // Hide Navbar and Footer on Admin routes
//   const hideHeaderFooter = 
//     location.pathname.startsWith('/admin-login') || location.pathname.startsWith('/admin-dashboard');

//   return (
//     <>
//       {/* Conditionally render Navbar and Footer */}
//       {!hideHeaderFooter && <Navbar />}

//       <Routes className="main-content">
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Loginsignup />} />
//         <Route path="/kitchentiles" element={<Kitchentiles />} />
//         <Route path="/cart/:userId?" element={<Cart />} />
//         <Route path="/floortiles" element={<Floortiles />} />
//         <Route path="/kitchen/:tileId" element={<KitchenTileDetails />} />
//         <Route path="/floor/:tileId" element={<FloorTileDetails />} />
//         <Route path="/bathroom/:tileId" element={<BathroomTileDetails />} />
//         <Route path="/outdoor/:tileId" element={<OutdoorTileDetails />} />
//         <Route path="/trending/:tileId" element={<TrendingTileDetails/>} />
//         <Route path="/bathroomtiles" element={<Bathroomtiles />} />
//         <Route path="/outdoortiles" element={<Outdoortiles />} />
//         <Route path="/request-form" element={<Requestform/>}/>
        
//         {/* Admin Login Route */}
//         <Route path="/admin-login" element={<AdminLogin />} />
        
//         {/* Admin Dashboard Routes */}
//         <Route path="/admin-dashboard/*" element={<AdminDashboard />}>
//           <Route path="adminaddtile" element={<AddTile />} />
//           <Route path="adminorders" element={<Orders />} />
//           <Route path="adminbathroomtile" element={<AdminBathroomTile />} />
//           <Route path="adminkitchentile" element={<AdminKitchenTile />} />
//           <Route path="adminfloortile" element={<AdminFloorTile />} />
//           <Route path="adminoutdoortile" element={<AdminOutdoorTile />} />
//         </Route>
//       </Routes>

//       {/* Conditionally render Footer */}
//       {!hideHeaderFooter && <Footer />}
//     </>
//   );
// }

// export default App;

import './App.css';
import Navbar from './Components/Assets/Navbar/Navbar';
import Footer from './Components/Assets/Footer/Footer';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Home from './Pages/Home';
import Loginsignup from './Pages/Loginsignup';

import KitchenTileDetails from './Pages/Kitchentiles/TileDetails';
import OutdoorTileDetails from './Pages/Outdoortiles/TileDetails';
import FloorTileDetails from './Pages/Floortiles/TileDetails';
import BathroomTileDetails from './Pages/Bathroomtiles/TileDetails';

import Kitchentiles from './Pages/Kitchentiles/Kitchentiles';
import Floortiles from './Pages/Floortiles/Floortiles';
import Bathroomtiles from './Pages/Bathroomtiles/Bathroomtiles';
import Outdoortiles from './Pages/Outdoortiles/Outdoortiles';

import Cart from './Pages/CardPage/CardPage';

import AdminLogin from './Pages/Admin/AdminLogin';
import AdminDashboard from './Pages/Admin/Admindashboard';

// Admin tile components
import AddTile from './Pages/Admin/TileComponent/AddTile';
import Orders from './Pages/Admin/TileComponent/Orders';
import AdminBathroomTile from './Pages/Admin/TileComponent/Adminbathroomtile';
import AdminKitchenTile from './Pages/Admin/TileComponent/Adminkitchentile';
import AdminFloorTile from './Pages/Admin/TileComponent/Adminfloortile';
import AdminOutdoorTile from './Pages/Admin/TileComponent/Adminoutdoortile';
import TrendingTileDetails from './Pages/Trending/TileDetails';
import Requestform from './Pages/Requestform/Requestform';  // Ensure this path is correct

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  
  // Hide Navbar and Footer on Admin routes
  const hideHeaderFooter = 
    location.pathname.startsWith('/admin-login') || location.pathname.startsWith('/admin-dashboard');

  return (
    <>
      {/* Conditionally render Navbar and Footer */}
      {!hideHeaderFooter && <Navbar />}

      <Routes className="main-content">
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Loginsignup />} />
        <Route path="/kitchentiles" element={<Kitchentiles />} />
        <Route path="/cart/:userId?" element={<Cart />} />
        <Route path="/floortiles" element={<Floortiles />} />
        <Route path="/kitchen/:tileId" element={<KitchenTileDetails />} />
        <Route path="/floor/:tileId" element={<FloorTileDetails />} />
        <Route path="/bathroom/:tileId" element={<BathroomTileDetails />} />
        <Route path="/outdoor/:tileId" element={<OutdoorTileDetails />} />
        <Route path="/trending/:tileId" element={<TrendingTileDetails />} />
        <Route path="/bathroomtiles" element={<Bathroomtiles />} />
        <Route path="/outdoortiles" element={<Outdoortiles />} />
        <Route path="/request-form" element={<Requestform />} />
        
        {/* Admin Login Route */}
        <Route path="/admin-login" element={<AdminLogin />} />
        
        {/* Admin Dashboard Routes */}
        <Route path="/admin-dashboard/*" element={<AdminDashboard />}>
          <Route path="adminaddtile" element={<AddTile />} />
          <Route path="adminorders" element={<Orders />} />
          <Route path="adminbathroomtile" element={<AdminBathroomTile />} />
          <Route path="adminkitchentile" element={<AdminKitchenTile />} />
          <Route path="adminfloortile" element={<AdminFloorTile />} />
          <Route path="adminoutdoortile" element={<AdminOutdoorTile />} />
        </Route>
      </Routes>

      {/* Conditionally render Footer */}
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
