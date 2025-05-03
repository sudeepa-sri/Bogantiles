

import React, { useState } from 'react';
import './AddTile.css';

const AddTile = () => {
  const [tileData, setTileData] = useState({
    name: '',
    shortDescription: '',
    description: '',
    price: '',
    image: null,
    size: '',
    material: '',
    finish: '',
    color: '',
    category: '',
    isFastSelling: false,
    isTrending: false,
  });

  // Handle image file input change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setTileData({ ...tileData, image: file });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Frontend validation
    for (const key in tileData) {
      if (key !== 'image' && key !== 'isTrending' && key !== 'isFastSelling') {
        if (typeof tileData[key] === 'string' && tileData[key].trim() === '') {
          alert(`Please enter ${key}`);
          return;
        }
      }
    }
  
    if (!tileData.image) {
      alert('Please upload an image');
      return;
    }

    if (tileData.price <= 0) {
      alert('Please enter a valid price');
      return;
    }
  
    const formData = new FormData();
    for (const key in tileData) {
      formData.append(key, tileData[key]);
    }
  
    try {
      const res = await fetch('https://bogantilesbackend.onrender.com/api/tiles', {
        method: 'POST',
        body: formData,
      });
  
      const result = await res.json();
      console.log('Success:', result);
      alert('Tile added successfully!');
  
      // Reset form data
      setTileData({
        name: '',
        shortDescription: '',
        description: '',
        price: '',
        image: null,
        size: '',
        material: '',
        finish: '',
        color: '',
        category: '',
        isFastSelling: false,
        isTrending: false,
      });
  
      // Clear file input (React way)
      document.querySelector('input[type="file"]').value = '';  // Reset file input
    } catch (err) {
      console.error('Upload error:', err);
      alert('Something went wrong');
    }
  };
  
  return (
    <div className="add-tile">
      <h2>Add Tile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Tile Name:
          <input
            type="text"
            required
            value={tileData.name}
            onChange={(e) => setTileData({ ...tileData, name: e.target.value })}
          />
        </label>

        <label>
          Short Description:
          <input
            type="text"
            required
            value={tileData.shortDescription}
            onChange={(e) =>
              setTileData({ ...tileData, shortDescription: e.target.value })
            }
          />
        </label>

        <label>
          Description:
          <textarea
            required
            value={tileData.description}
            onChange={(e) =>
              setTileData({ ...tileData, description: e.target.value })
            }
          />
        </label>

        <label>
          Price:
          <input
            type="number"
            required
            value={tileData.price}
            onChange={(e) => setTileData({ ...tileData, price: e.target.value })}
          />
        </label>

        <label>
          Category:
          <select
            required
            value={tileData.category}
            onChange={(e) => setTileData({ ...tileData, category: e.target.value })}
          >
            <option value="">-- Select Category --</option>
            <option value="Bathroom Tile">Bathroom Tile</option>
            <option value="Kitchen Tile">Kitchen Tile</option>
            <option value="Outdoor Tile">Outdoor Tile</option>
            <option value="Floor Tile">Floor Tile</option>
          </select>
        </label>

        <label>
          Size:
          <input
            type="text"
            required
            value={tileData.size}
            onChange={(e) => setTileData({ ...tileData, size: e.target.value })}
          />
        </label>

        <label>
          Material:
          <input
            type="text"
            required
            value={tileData.material}
            onChange={(e) => setTileData({ ...tileData, material: e.target.value })}
          />
        </label>

        <label>
          Finish:
          <input
            type="text"
            required
            value={tileData.finish}
            onChange={(e) => setTileData({ ...tileData, finish: e.target.value })}
          />
        </label>

        <label>
          Color:
          <input
            type="text"
            required
            value={tileData.color}
            onChange={(e) => setTileData({ ...tileData, color: e.target.value })}
          />
        </label>

        <label>
          Image:
          <input
            type="file"
            required
            onChange={handleImageChange}
          />
        </label>

        <label>
          Is Trending?
          <input
            type="checkbox"
            checked={tileData.isTrending}
            onChange={(e) =>
              setTileData({ ...tileData, isTrending: e.target.checked })
            }
          />
        </label>

        <label>
          Is Fast Selling?
          <input
            type="checkbox"
            checked={tileData.isFastSelling}
            onChange={(e) =>
              setTileData({ ...tileData, isFastSelling: e.target.checked })
            }
          />
        </label>


        <button type="submit">Add Tile</button>
      </form>
    </div>
  );
};

export default AddTile;
