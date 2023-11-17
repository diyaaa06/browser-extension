// background.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === 'fetchData') {
    fetch(`https://www.ipqualityscore.com/api/json/url/YOUR_API_KEY/${request.url}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle data or send response
        sendResponse({ data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    return true; // Indicates that sendResponse will be sent asynchronously
  }
});
