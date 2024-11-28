import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import APIList from './components/APIList';

function App() {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100vw', // Memastikan lebar elemen sesuai dengan lebar layar
          textAlign: 'center',
          backgroundColor: '#87CEEB', // Warna hijau langit (Sky Blue)
          border: '100px solid green', // Border dengan warna hijau
          borderRadius: '10px', // Opsional: membuat sudut border melengkung
          boxSizing: 'border-box', // Memastikan border dihitung dalam ukuran elemen
          padding: '20px', // Opsional: memberikan jarak ke dalam
          margin: 'auto', // Menghapus margin default browser
        }}
      >
         {/* Latar Belakang Lingkaran */}
  <div
    style={{
      position: 'relative',
      width: '300px', // Diameter lingkaran
      height: '300px',
      borderRadius: '50%', // Membuat bentuk lingkaran
      backgroundColor: '#ffffff', // Warna dasar lingkaran
      border: '10px solid #007bff', // Border biru (mirip tema gambar)
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Efek bayangan
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {/* Logo di Tengah */}
    <img
      src="https://drive.google.com/file/d/1JOiql1OJPo8Rfh4Kc9Sq0wex8wDo8YnP/view?usp=sharing" // Ganti dengan path logo Anda
      alt="Universitas Asfira Jakarta"
      style={{
        width: 'auto', // Sesuaikan ukuran logo
        height: 'auto',
        borderRadius: '50%', // Membuat gambar menjadi lingkaran
        //border: '5px solid #87CEEB', // Border dengan warna hijau langit (Sky Blue)
       // boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Memberikan efek bayangan untuk estetika
      }}
    />
  </div>

        {/* Nama Universitas */}
        <h1 style={{ marginTop: '20px', color: '#007bff', fontSize: '32px' }}>
          Universitas Asfira Jakarta
        </h1>

        {/* Motto */}
        <p style={{ fontStyle: 'italic', color: '#333' }}>
          Menerangi Masa Depan, Menginspirasi Perubahan
        </p>
        <Routes>
          <Route
            path="/"
            element={
              token ? (
                <>
                  <APIList />
                  <button onClick={() => setToken(null)}>Logout</button>
                </>
              ) : (
                <LoginSection setToken={setToken} />
              )
            }
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

const LoginSection = ({ setToken }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Login setToken={setToken} />
      <button
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={() => navigate('/register')} // Navigasi ke halaman Register
      >
        Register
      </button>
    </div>
  );
};

export default App;
