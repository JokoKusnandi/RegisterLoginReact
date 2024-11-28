import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
       // Simulate using the test values
       const response = await axios.post('/api/auth/register', {
        email: 'yuke@gmail.com',
        password: '123456',
      });

        // Handle the response (check the status)
        if (response.status === 200) {
          alert('Registrasi berhasil!');
        }
      } catch (error) {
      alert('Registrasi gagal, coba lagi');
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div style={{ marginBottom: '10px' }}>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ padding: '8px', width: '200px', margin: '5px 0' }}/>
      </div>
      <div style={{ marginBottom: '10px' }}>
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ padding: '8px', width: '200px', margin: '5px 0' }}/>
      </div>
      <button type="submit" style={{
            padding: '10px 20px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}>Register</button>
    </form>
  );
}

export default Register;
