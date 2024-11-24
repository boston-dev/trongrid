import express from 'express';
//const TronWeb = require('tronweb');
import trx from './trx.js';
// Initialize the app
const app = express();

// Middleware
app.use(express.json());

// Basic route
app.get('/', async (req, res) => {
 const [err,result] = await trx.usdtGetBalance()
  res.send({
    err: err,
    result: result
  });
});
// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
