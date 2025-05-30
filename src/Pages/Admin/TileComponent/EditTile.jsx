

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './EditTile.css';

const EditTile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [tileData, setTileData] = useState({
    name: '',
    shortDescription: '',
    description: '',
    price: '',
    imageUrl: '',
    size: '',
    material: '',
    finish: '',
    color: '',
    category: '',
    isTrending: false,
    isFastSelling: false
  });
  
  const [newImage, setNewImage] = useState(null); // Handle new image

  // Fetch tile data when the component mounts
  useEffect(() => {
    const fetchTile = async () => {
      try {
        const res = await axios.get(`https://bogantilesbackend.onrender.com/api/tiles/${id}`);
        setTileData({
          ...res.data,
          isTrending: res.data.isTrending || false,  // Default to false if undefined
          isFastSelling: res.data.isFastSelling || false  // Default to false if undefined
        });
      } catch (err) {
        console.error('Error fetching tile:', err);
      }
    };
    fetchTile();
  }, [id]);

  // Handle image file change
  const handleImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append all form data fields to formData
    Object.keys(tileData).forEach(key => {
      if (key === 'price') {
        formData.append(key, Number(tileData[key]));  // Ensure price is a number
      } else {
        formData.append(key, tileData[key]);
      }
    });

    // Append new image if selected
    if (newImage) {
      formData.append('image', newImage);
    }

    try {
      await axios.put(`https://bogantilesbackend.onrender.com/api/tiles/${id}`, formData);
      alert('Tile updated successfully!');
      
      // Redirect based on selected category
      let categoryRoute = '';

      switch (tileData.category) {
        case 'Kitchen Tile':
          categoryRoute = 'adminkitchentile';
          break;
        case 'Bathroom Tile':
          categoryRoute = 'adminbathroomtile';
          break;
        case 'Outdoor Tile':
          categoryRoute = 'adminoutdoortile';
          break;
        case 'Floor Tile':
          categoryRoute = 'adminfloortile';
          break;
        default:
          categoryRoute = 'adminkitchentile'; // Default fallback
          break;
      }

      navigate(`/admin-dashboard/${categoryRoute}`);
    } catch (err) {
      console.error('Error updating tile:', err);
      alert('Failed to update tile');
    }
  };

  return (
    <div className="edit-tile-container">
      <h2>Edit Tile</h2>
      <form onSubmit={handleSubmit}>
        <label>Tile Name:</label>
        <input
          type="text"
          value={tileData.name}
          onChange={(e) => setTileData({ ...tileData, name: e.target.value })}
        />

        <label>Short Description:</label>
        <input
          type="text"
          value={tileData.shortDescription}
          onChange={(e) => setTileData({ ...tileData, shortDescription: e.target.value })}
        />

        <label>Description:</label>
        <textarea
          value={tileData.description}
          onChange={(e) => setTileData({ ...tileData, description: e.target.value })}
        />

        <label>Price:</label>
        <input
          type="number"
          value={tileData.price}
          onChange={(e) => setTileData({ ...tileData, price: e.target.value })}
        />

        <label>Size:</label>
        <input
          type="text"
          value={tileData.size}
          onChange={(e) => setTileData({ ...tileData, size: e.target.value })}
        />

        <label>Material:</label>
        <input
          type="text"
          value={tileData.material}
          onChange={(e) => setTileData({ ...tileData, material: e.target.value })}
        />

        <label>Finish:</label>
        <input
          type="text"
          value={tileData.finish}
          onChange={(e) => setTileData({ ...tileData, finish: e.target.value })}
        />

        <label>Color:</label>
        <input
          type="text"
          value={tileData.color}
          onChange={(e) => setTileData({ ...tileData, color: e.target.value })}
        />

        <label>Category:</label>
        <select
          value={tileData.category}
          onChange={(e) => setTileData({ ...tileData, category: e.target.value })}
        >
          <option value="">-- Select Category --</option>
          <option value="Bathroom Tile">Bathroom Tile</option>
          <option value="Kitchen Tile">Kitchen Tile</option>
          <option value="Outdoor Tile">Outdoor Tile</option>
          <option value="Floor Tile">Floor Tile</option>
        </select>

        <label>Current Image:</label>
        {tileData.imageUrl && <img src={tileData.imageUrl} alt="Tile" width="150" />}

        <label>New Image (optional):</label>
        <input type="file" onChange={handleImageChange} />

        <div className="checkbox-container">
          <label>Is Trending</label>
          <input
            type="checkbox"
            checked={tileData.isTrending}
            onChange={(e) =>
              setTileData({ ...tileData, isTrending: e.target.checked })
            }
          />
        </div>

        <div className="checkbox-container">
          <label>Is Fast Selling</label>
          <input
            type="checkbox"
            checked={tileData.isFastSelling}
            onChange={(e) =>
              setTileData({ ...tileData, isFastSelling: e.target.checked })
            }
          />
        </div>

        <button type="submit">Update Tile</button>
      </form>
    </div>
  );
};

export default EditTile;
