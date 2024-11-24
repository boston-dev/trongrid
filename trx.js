import { TronWeb, utils as TronWebUtils, Trx, TransactionBuilder, Contract, Event, Plugin } from 'tronweb';
import {to} from 'await-to-js';
const myAdrr="TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t"
const tronWeb = new TronWeb({
  fullHost: process.env.fullHost, // TRON 主网节点
  headers: { 'TRON-PRO-API-KEY': '2b4c8a5f-e0c0-48da-a915-f9c99d18bb84' }, // 替换为您的 API Key（可选）
  privateKey: '00b97b8efaa6f785cdcff507b511fdbcd3a8380f424dfc5ae2a34cd14b4ef3e5' 
});
export default{
  //获取trx余额
   async trxGetBalance(adrr=myAdrr){
      return await to(tronWeb.trx.getBalance(adrr))
    },
    //获取usdt余额
   // 获取 USDT 余额
  async usdtGetBalance(adrr = myAdrr) {
    try {
      // 获取合约实例
      const contract = await tronWeb.contract().at('TXYZopYRdj2D9XRtbG411XZZ3kM5VkAeBf');

      // 调用 balanceOf 方法，传入地址，获取余额
      const balance = await contract.balanceOf(adrr).call();
      console.log(balance)
      // 转换为可读格式（USDT 小数点后 6 位）
      return [tronWeb.toDecimal(balance) / 1e6];
    } catch (err) {
      console.error('Error fetching USDT balance:', err);
      return [null];
    }
  },
}