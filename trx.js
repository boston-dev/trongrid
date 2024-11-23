import { TronWeb, utils as TronWebUtils, Trx, TransactionBuilder, Contract, Event, Plugin } from 'tronweb';
import {to} from 'await-to-js';
const myAdrr="TRiVbcy4EsB7euenXswjefuTsVH6TBUSGL"
const tronWeb = new TronWeb({
  fullHost: process.env.fullHost, // TRON 主网节点
  headers: { 'TRON-PRO-API-KEY': '2b4c8a5f-e0c0-48da-a915-f9c99d18bb84' }, // 替换为您的 API Key（可选）
  privateKey: '00b97b8efaa6f785cdcff507b511fdbcd3a8380f424dfc5ae2a34cd14b4ef3e5' 
});
export default{
   async trxGetBalance(adrr=myAdrr){
      return await to(tronWeb.trx.getBalance(adrr))
    }
}