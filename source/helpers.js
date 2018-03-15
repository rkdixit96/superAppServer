const Https = require('https');


const getDataFromURL = (url) => {
  const urlPromise = new Promise((resolve, reject) => {
    Https.get(url, (response) => {
      response.on('data', (data) => {
        resolve(data);
      });
    });
  });
  return urlPromise;
};

module.exports = { getDataFromURL };

