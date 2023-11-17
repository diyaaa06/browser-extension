// Popup.js
import React, { useState } from 'react';

const Popup = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState(null);
  const API_KEY = '9Rw9fBJqkowjlcQv3AZQdEs0nY2EDJMR'; // Replace with your actual API key

  const fetchUrlData = async () => {
    try {
      const response = await fetch(`https://www.ipqualityscore.com/api/json/url/${API_KEY}/${encodeURIComponent(url)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1 style={{color:"red"}}>Phishing Website Detector</h1>
      <input placeholder="Type URL..." type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={fetchUrlData}>Check URL</button>
      {result && (
        <div style={{color:result.phishing?"red":"green"}}>
          <p>Domain: {result.domain}</p>
          <p>Risk Score: {result.risk_score || 'N/A'}</p>
          <p>Unsafe: {result.unsafe ? 'Yes' : 'No'}</p>
          <p>Phishing: {result.phishing ? 'Yes' : 'No'}</p>
          {/* Add more fields based on the response */}
        </div>
      )}
    </div>
  );
};

export default Popup;
