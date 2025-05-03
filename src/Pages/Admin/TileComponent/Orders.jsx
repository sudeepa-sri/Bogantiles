

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Orders.css';

const Orders = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [updatingId, setUpdatingId] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [statusFilter, setStatusFilter] = useState(''); // Status filter state

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get('https://bogantilesbackend.onrender.com/api/request/fetch');
      setRequests(response.data);
    } catch (err) {
      setError('Failed to fetch tile requests. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    setUpdatingId(id);
    try {
      await axios.put(`https://bogantilesbackend.onrender.com/api/request/${id}/status`, { status: newStatus });
      fetchRequests(); // Refresh the request list after status change
    } catch (err) {
      alert('Failed to update status');
    } finally {
      setUpdatingId(null);
    }
  };

  // Filter requests based on the selected start date, end date, and status
  const filteredRequests = requests.filter((request) => {
    // Filter by date
    const requestDate = new Date(request.requestDate).setHours(0, 0, 0, 0);
    const start = startDate ? new Date(startDate).setHours(0, 0, 0, 0) : null;
    const end = endDate ? new Date(endDate).setHours(23, 59, 59, 999) : null;

    let dateMatches = true;
    if (start && end) {
      dateMatches = requestDate >= start && requestDate <= end;
    } else if (start) {
      dateMatches = requestDate >= start;
    } else if (end) {
      dateMatches = requestDate <= end;
    }

    // Filter by status
    const statusMatches = statusFilter ? request.status.toLowerCase() === statusFilter.toLowerCase() : true;

    return dateMatches && statusMatches;
  });

  if (loading) return <div className="loading-spinner">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="adminrequest">
      <div className="orders-container">
        <h1>Tile Requests</h1>
        <div className="filters">
          <div className="date-filter">
            <label>
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>
            <label>
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label>
          </div>

          {/* Status Filter for Pending and Contacted */}
          <div className="status-filter">
            <label>Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All</option>
              <option value="pending">Pending</option>
              <option value="contacted">Contacted</option>
            </select>
          </div>
        </div>

        {requests.length === 0 ? (
          <p>No requests found</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>User Details</th>
                <th>Tiles</th>
                <th>Preferred Time & Message</th>
                <th>Status</th>
                <th>Request Date</th>
                <th>Reference Images</th>
              </tr>
            </thead>
            <tbody>
              {filteredRequests.map((request) => (
                <tr key={request._id}>
                  <td>
                    <div className="user-details">
                      <p><strong>Name:</strong> {request.name}</p>
                      <p><strong>Email:</strong> {request.email}</p>
                      <p><strong>Phone:</strong> {request.phone}</p>
                      <p><strong>City:</strong> {request.city}</p>
                      <p><strong>Taluk:</strong> {request.taluk}</p>
                      <p><strong>Location:</strong> {request.locationText}</p>
                    </div>
                  </td>
                  <td>
                    <div className="tile-details">
                      {request.tiles.map((tile) => {
                        const tileTotal = tile.price * tile.quantity;
                        return (
                          <div key={tile.tileId} className="tile-item">
                            <img src={`https://bogantilesbackend.onrender.com${tile.imageUrl}`} alt={tile.name} className="tile-image" />
                            <div className="tile-info">
                              <p className="tile-name">{tile.name}</p>
                              <p className="tile-category">Category: {tile.category}</p>
                              <p className="tile-price">Price: ₹{tile.price}</p>
                              <p className="tile-quantity">Qty: {tile.quantity}</p>
                              <p className="tile-total">Total: ₹{tileTotal}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </td>
                  <td>
                    <p><strong>Time:</strong> {request.contactTime}</p>
                    <p><strong>Message:</strong> {request.message || '-'}</p>
                  </td>
                  <td>
                    <select
                      className={`status-dropdown ${request.status.toLowerCase()}`}
                      value={request.status}
                      onChange={(e) => updateStatus(request._id, e.target.value)}
                      disabled={updatingId === request._id}
                    >
                      <option value="Pending">Pending</option>
                      <option value="Contacted">Contacted</option>
                    </select>
                  </td>
                  <td>{new Date(request.requestDate).toLocaleDateString()}</td>
                  <td>
                    {request.referenceImages && request.referenceImages.length > 0 ? (
                      <div className="reference-images">
                        {request.referenceImages.map((image, index) => (
                          <img
                            key={index}
                            src={`https://bogantilesbackend.onrender.com${image}`}
                            alt={`Reference ${index + 1}`}
                            className="reference-image"
                          />
                        ))}
                      </div>
                    ) : (
                      <p>No reference images</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Orders;
