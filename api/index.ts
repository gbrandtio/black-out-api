const app = require('express')();
const http = require('http');

app.get('/api', (req: any, res: any) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
  res.end(`Black Out API`);
});

app.get('/api/item/:slug', (req: any, res: any) => {
  res.send(`Item: x`);
});

module.exports = app;
export default app;