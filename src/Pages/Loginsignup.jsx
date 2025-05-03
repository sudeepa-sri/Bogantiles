import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Loginsignup.css';

const Loginsignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isReset, setIsReset] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      if (isLogin) {
        const res = await axios.post('https://bogantilesbackend.onrender.com/api/auth/login', {
          email,
          password,
        });
        const user = res.data.user;
        localStorage.setItem('userId', user._id);
        localStorage.setItem('userEmail', user.email);
        localStorage.setItem('isLoggedIn', 'true');
        alert(`✅ Login successful!`);
        navigate(-1);
      } else {
        const res = await axios.post('https://bogantilesbackend.onrender.com/api/auth/signup', {
          name,
          email,
          password,
        });
        alert('✅ Signup successful! Please login.');
        setIsLogin(true);
      }
    } catch (err) {
      alert(`❌ ${err.response?.data?.error || 'Invalid Email Or Password'}`);
      console.error(err);
    }
  };

  const handleResetPassword = async () => {
    try {
      console.log('Sending request with:', { email, password, confirmPassword }); // Debugging step
      const res = await axios.post('https://bogantilesbackend.onrender.com/api/auth/reset-password', {
        email,
        newPassword: password,
        confirmPassword,
      });
  
      alert(res.data.message);
      setIsReset(false);
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.error(err); // Log the error for debugging
      alert(`❌ ${err.response?.data?.error || 'Reset failed'}`);
    }
  };
  
  const renderForm = () => {
    if (isReset) {
      return (
        <>
          <h2>Reset Password</h2>
          <input
            type="email"
            placeholder="Registered Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleResetPassword}>Reset Password</button>
          <p>
            Remembered password? <span onClick={() => setIsReset(false)}>Back to Login</span>
          </p>
        </>
      );
    }

    return (
      <>
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleAuth}>{isLogin ? 'Login' : 'Sign Up'}</button>

        <p>
          {isLogin ? 'Don’t have an account? ' : 'Already have an account? '}
          <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Sign up' : 'Sign in'}</span>
        </p>

        
        {isLogin && (
          <>
            <p>
              <span onClick={() => setIsReset(true)} style={{ color: 'blue', cursor: 'pointer' }}>
                Forgot Password?
              </span>
            </p>
            <p>
              Admin?{' '}
              <span
                onClick={() => navigate('/admin-login')}
                style={{ color: 'blue', cursor: 'pointer' }}
              >
                Login here
              </span>
            </p>
          </>
        )}
      </>
    );
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-container">{renderForm()}</div>
    </div>
  );
};

export default Loginsignup;




