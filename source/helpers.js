const Https = require('https');


const getDataFromURL = (url) => {
  const urlPromise = new Promise((resolve, reject) => {
    Https.get(url, (response) => {
      response.on('data', (data) => {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      });
    });
  });
  return urlPromise;
};

module.exports = { getDataFromURL };

