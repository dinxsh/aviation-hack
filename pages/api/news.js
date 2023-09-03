import axios from 'axios';
export default async function handler(req, res) {
  if (req.method === 'GET') {
    var options = {
      method: 'GET',
      url: 'https://bing-news-search1.p.rapidapi.com/news',
      params: { safeSearch: 'Off', textFormat: 'Raw' },
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '5c9a287956mshfa1cbf9072c01f0p10e74cjsnef3d1a887f1e',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };
    axios
      .request(options)
      .then(function (response) {
        const { data } = response;
        const { value } = data;
        res.status(200).json(value);
      })
      .catch(function (error) {
        console.error(error);
      });
  } else {
    res.status(400);
  }
}