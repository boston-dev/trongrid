import express from 'express';
//const TronWeb = require('tronweb');
import { TronWeb, utils as TronWebUtils, Trx, TransactionBuilder, Contract, Event, Plugin } from 'tronweb';

// 配置 TronWeb 实例  privateKey: '00b97b8efaa6f785cdcff507b511fdbcd3a8380f424dfc5ae2a34cd14b4ef3e5'
const tronWeb = new TronWeb({
  fullHost: process.env.fullHost, // TRON 主网节点
  headers: { 'TRON-PRO-API-KEY': '2b4c8a5f-e0c0-48da-a915-f9c99d18bb84' }, // 替换为您的 API Key（可选）
  privateKey: '00b97b8efaa6f785cdcff507b511fdbcd3a8380f424dfc5ae2a34cd14b4ef3e5' 
});


// 获取账户余额
(async () => {
  const balance = await tronWeb.trx.getBalance('TRiVbcy4EsB7euenXswjefuTsVH6TBUSGL');
  console.log('Account balance:', balance);
})();



// Initialize the app
const app = express();

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, Express with ESM!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
