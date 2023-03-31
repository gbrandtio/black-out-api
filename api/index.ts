const app = require('express')();
const request = require('request');

app.get('/api', (req: any, res: any) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Black Out API`);
});

app.get('/api/outagesOfPrefecture/:prefectureId', (req: any, res: any) => {
  let prefectureId = req.params.prefectureId;
  res.setHeader('Access-Control-Allow-Origin', '*');

  request('https://siteapps.deddie.gr/Outages2Public/?Length=4&PrefectureID='+prefectureId, 
  function (error: any, response: { statusCode: number; }, body: any) {
      if (!error && response.statusCode == 200) {
          res.status(200).send(body);
      }
      else {
          res.status(500).send(error);
      }
  });
});

module.exports = app;
export default app;