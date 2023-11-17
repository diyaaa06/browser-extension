// content.js

// Function to fetch data from the IPQualityScore API
async function fetchUrlDetails(url) {
  const API_KEY = '9Rw9fBJqkowjlcQv3AZQdEs0nY2EDJMR'; // Replace with your actual API key
  const apiUrl = `https://www.ipqualityscore.com/api/json/url/${API_KEY}/${encodeURIComponent(url)}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching URL details:', error);
    return null;
  }
}

// Function to handle received data from the API
function handleUrlDetails(data) {
  if (data) {
    // Process the received data here and perform necessary actions
    console.log('Received data:', data);
    // Example: Accessing specific information from the API response
    const { domain, risk_score, phishing, malware } = data;
    console.log(`Domain: ${domain}, Risk Score: ${risk_score}, Phishing: ${phishing}, Malware: ${malware}`);
  } else {
    console.error('No data received from the API');
  }
}

// Retrieve the current URL
const currentUrl = window.location.href;

// Call the API and handle the response
fetchUrlDetails(currentUrl)
  .then(handleUrlDetails)
  .catch(error => console.error('Error:', error));
