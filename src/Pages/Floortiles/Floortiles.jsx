import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Floortiles.css'; // 👈 Make sure to create/update this CSS file

function Floortiles() {
  const [tiles, setTiles] = useState([]);
  const [allTiles, setAllTiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [colors, setColors] = useState([]);
  const [materials, setMaterials] = useState([]);
  const [finishes, setFinishes] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTiles = async () => {
      try {
        const response = await axios.get('https://bogantilesbackend.onrender.com/api/tiles/category/floor');
        const tilesData = response.data;
        setTiles(tilesData);
        setAllTiles(tilesData);

        const colorSet = new Set();
        const materialSet = new Set();
        const finishSet = new Set();
        tilesData.forEach(tile => {
          if (tile.color) colorSet.add(tile.color);
          if (tile.material) materialSet.add(tile.material);
          if (tile.finish) finishSet.add(tile.finish);
        });
        setColors([...colorSet]);
        setMaterials([...materialSet]);
        setFinishes([...finishSet]);
      } catch (error) {
        console.error('Error fetching floor tiles:', error);
      }
    };
    fetchTiles();
  }, []);

  useEffect(() => {
    let filtered = allTiles;

    if (searchTerm) {
      filtered = filtered.filter(tile =>
        tile.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filterType === 'Color' && selectedOption) {
      filtered = filtered.filter(tile => tile.color === selectedOption);
    }
    if (filterType === 'Material' && selectedOption) {
      filtered = filtered.filter(tile => tile.material === selectedOption);
    }
    if (filterType === 'Finish' && selectedOption) {
      filtered = filtered.filter(tile => tile.finish === selectedOption);
    }
    if (filterType === 'Price') {
      const min = minPrice ? Number(minPrice) : 0;
      const max = maxPrice ? Number(maxPrice) : Infinity;
      filtered = filtered.filter(tile => tile.price >= min && tile.price <= max);
    }

    setTiles(filtered);
  }, [searchTerm, filterType, selectedOption, minPrice, maxPrice, allTiles]);

  const handleViewDetails = (tileId) => {
    navigate(`/floor/${tileId}`);
  };

  return (
    <div className="user-container">
      <div className="tiles-page">
        <div className="top-controls">
          <div className="search-bar-container">
            <input
              type="text"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-container">
            <select 
              value={filterType}
              onChange={(e) => {
                setFilterType(e.target.value);
                setSelectedOption('');
                setMinPrice('');
                setMaxPrice('');
              }}
            >
              <option value="">Select Filter</option>
              <option value="Color">Color</option>
              <option value="Material">Material</option>
              <option value="Finish">Finish</option>
              <option value="Price">Price</option>
            </select>

            {filterType === 'Color' && (
              <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="">Select Color</option>
                {colors.map((color, idx) => (
                  <option key={idx} value={color}>{color}</option>
                ))}
              </select>
            )}
            {filterType === 'Material' && (
              <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="">Select Material</option>
                {materials.map((material, idx) => (
                  <option key={idx} value={material}>{material}</option>
                ))}
              </select>
            )}
            {filterType === 'Finish' && (
              <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                <option value="">Select Finish</option>
                {finishes.map((finish, idx) => (
                  <option key={idx} value={finish}>{finish}</option>
                ))}
              </select>
            )}
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
        </div>

        <div className="tiles-container">
          {tiles.length > 0 ? (
            tiles.map(tile => (
              <div key={tile._id} className="tile-card">
                <img 
                  src={`https://bogantilesbackend.onrender.com${tile.imageUrl}`} 
                  alt={tile.name} 
                  className="tile-image"
                />
                <h3 className="tile-name">{tile.name}</h3>
                <p><strong>Price:</strong> ₹{tile.price}</p>
                <p><strong>Size:</strong> {tile.size}</p>
                <button 
                  className="view-details-button"
                  onClick={() => handleViewDetails(tile._id)}
                >
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p className="no-results">No tiles found matching your search or filters.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Floortiles;
