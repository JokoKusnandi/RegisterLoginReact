import React, { useEffect, useState } from 'react';
import axios from 'axios';

function APIList() {
  const [apis, setApis] = useState([]);

  useEffect(() => {
    const fetchApis = async () => {
      try {
        const response = await axios.get('/api/apis');
        setApis(response.data);
      } catch (error) {
        console.error('Error fetching APIs:', error);
      }
    };
    fetchApis();
  }, []);

  return (
    <div>
      <h2>Daftar API</h2>
      <ul>
        {apis.map(api => (
          <li key={api.id}>
            {api.name} - ${api.price}
            <button>Beli Akses</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default APIList;
