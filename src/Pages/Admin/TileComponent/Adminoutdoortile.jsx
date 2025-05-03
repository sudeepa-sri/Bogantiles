import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AdminKitchenTile.css';

const AdminOutdoorTile = () => {
  const [tiles, setTiles] = useState([]);
  const [allTiles, setAllTiles] = useState([]); // Keep all tiles
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [finishes, setFinishes] = useState([]);
  const [filterType, setFilterType] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Fetch all kitchen tiles initially
  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const response = await axios.get('https://bogantilesbackend.onrender.com/api/tiles/category/outdoor');
        const tilesData = response.data;
        setTiles(tilesData);
        setAllTiles(tilesData); // save all tiles

        // Extract unique colors, materials, finishes
        const colorSet = new Set();
        const materialSet = new Set();
        const finishSet = new Set();

        tilesData.forEach(tile => {
          if (tile.color) colorSet.add(tile.color);
          if (tile.material) materialSet.add(tile.material);
          if (tile.finish) finishSet.add(tile.finish);
        });

        setColors(Array.from(colorSet));
        setMaterials(Array.from(materialSet));
        setFinishes(Array.from(finishSet));
      } catch (err) {
        console.error('Error fetching tiles:', err);
      }
    };

    fetchTiles();
  }, []);

  // Handle filtering when filter changes
  useEffect(() => {
    if (!filterType) {
      setTiles(allTiles);
    } else if (filterType === 'Price') {
      // Price filter
      const filtered = allTiles.filter(tile => {
        const price = Number(tile.price);
        const min = minPrice ? Number(minPrice) : 0;
        const max = maxPrice ? Number(maxPrice) : Infinity;
        return price >= min && price <= max;
      });
      setTiles(filtered);
    } else if (filterType && selectedOption) {
      // Other filters (Color/Material/Finish)
      const filtered = allTiles.filter(tile => {
        if (filterType === 'Color') {
          return tile.color === selectedOption;
        } else if (filterType === 'Material') {
          return tile.material === selectedOption;
        } else if (filterType === 'Finish') {
          return tile.finish === selectedOption;
        }
        return true;
      });
      setTiles(filtered);
    } else {
      setTiles(allTiles);
    }
  }, [filterType, selectedOption, minPrice, maxPrice, allTiles]);
  

  // Handle delete tile
  const handleDelete = async (tileId) => {
    try {
      await axios.delete(`https://bogantilesbackend.onrender.com/api/tiles/${tileId}`);
      const updatedTiles = allTiles.filter(tile => tile._id !== tileId);
      setAllTiles(updatedTiles);
      setTiles(updatedTiles);
    } catch (error) {
      console.error('Error deleting tile:', error.response ? error.response.data : error.message);
    }
  };

  // Filter tiles for search
  const filteredTiles = tiles.filter(tile => {
    const lowerQuery = searchQuery.toLowerCase();
    return tile.name.toLowerCase().includes(lowerQuery);
  });
  

  return (
    <div className="admin-view kitchen-tile-container">
    <div className="kitchen-tile-container">
      <h2>Outdoor Tiles</h2>

      {/* Search Bar */}
<div className="search-container">
<input
  type="text"
  id="searchQuery"   // Add an id
  name="searchQuery"  // Add a name
  placeholder="Search by name"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>

</div>


      {/* Filter Section */}
      <div className="filter-container">
  <select 
    onChange={(e) => {
      setFilterType(e.target.value);
      setSelectedOption('');
      setMinPrice('');
      setMaxPrice('');
    }}
    value={filterType}
  >
    <option value="">Select Filter</option>
    <option value="Color">Color</option>
    <option value="Material">Material</option>
    <option value="Finish">Finish</option>
    <option value="Price">Price</option> {/* 🔥 New Option */}
  </select>

  {/* Based on filter type show options */}
  {filterType === 'Color' && (
    <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
      <option value="">Select Color</option>
      {colors.map((color, index) => (
        <option key={index} value={color}>{color}</option>
      ))}
    </select>
  )}

  {filterType === 'Material' && (
    <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
      <option value="">Select Material</option>
      {materials.map((material, index) => (
        <option key={index} value={material}>{material}</option>
      ))}
    </select>
  )}

  {filterType === 'Finish' && (
    <select onChange={(e) => setSelectedOption(e.target.value)} value={selectedOption}>
      <option value="">Select Finish</option>
      {finishes.map((finish, index) => (
        <option key={index} value={finish}>{finish}</option>
      ))}
    </select>
  )}

  {/* 🔥 New inputs for Price */}
{filterType === 'Price' && (
  <div className="price-filter">
    <input 
      type="number"
      placeholder="Min Price"
      value={minPrice}
      onChange={(e) => setMinPrice(e.target.value)}
      className="price-input"
    />
    <input 
      type="number"
      placeholder="Max Price"
      value={maxPrice}
      onChange={(e) => setMaxPrice(e.target.value)}
      className="price-input"
    />
  </div>
)}

</div>

      {/* Tile Grid */}
      <div className="tile-grid">
        {filteredTiles.length === 0 ? (
          <p>No tiles found matching your filters or search query.</p>
        ) : (
          filteredTiles.map(tile => (
            <div key={tile._id} className="tile-card">
              <div className="tile-image-container">
                <img 
                  src={`https://bogantilesbackend.onrender.com${tile.imageUrl}`} 
                  alt={tile.name} 
                  className="tile-image" 
                />
              </div>
              <h3>{tile.name}</h3>
              <p className="tile-description">{tile.shortDescription}</p>
              <div className="tile-details">
                <p>Price: ${tile.price}</p>
              </div>
              <div className="tile-actions">
                <Link to={`/admin-dashboard/adminkitchentile/edit/${tile._id}`} className="edit-button">Edit</Link>
                <button onClick={() => handleDelete(tile._id)} className="delete-button">Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
  );
};

export default AdminOutdoorTile;