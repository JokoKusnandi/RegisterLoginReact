import React, { useState } from 'react';
import axios from 'axios';

function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/login', { email: 'yuke@gmail.com',password: '123456', });
      setToken(response.data.token); // Simpan token ke state
      alert('Login berhasil!');
    } catch (error) {
      alert('Login gagal, periksa email dan password');
    }
  };

  return (
    <div class="form-login">
    <form onSubmit={handleLogin}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: '8px', width: '200px', margin: '5px 0' }}/>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: '8px', width: '120px', margin: '5px 0' }}/>
      <button type="submit" style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>Login</button>
    </form>
    </div>

  );
}

export default Login;
