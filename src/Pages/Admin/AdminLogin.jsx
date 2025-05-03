// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminLogin.css'; // Reuse the same styling

const AdminLogin = () => {
  // Set default values for admin credentials
  const [email, setEmail] = useState('');  // Default Admin ID
  const [password, setPassword] = useState('');  // Default Password
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
        const res = await axios.post('http://localhost:5000/api/auth/admin/login', {

        email,
        password,
      });

      localStorage.setItem('adminToken', res.data.token);
      alert('✅ Admin login successful!');
      navigate('/admin-dashboard');  // Navigate to the admin dashboard
    } catch (err) {
      alert(`❌ ${err.response?.data?.error || 'Invalid admin credentials'}`);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">
        <h2>Admin Login</h2>  {/* Blue color for Admin Login */}
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}  // Update email if changed
        />
        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}  // Update password if changed
        />
        <button onClick={handleLogin}>Login as Admin</button>
      </div>
    </div>
  );
};

export default AdminLogin;
