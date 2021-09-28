import { ethers } from "ethers";
import {contractAddress} from './contractAddress';
import contractABI from './WavePortal.json'

export const wave = async (message) => {
    try {
       const { ethereum } = window;
 
       if (ethereum) {
         const provider = new ethers.providers.Web3Provider(ethereum);
         const signer = provider.getSigner();
 
         /*
         * You are defining contractABI right here. Let's change this!
         */
         const waveportalContract = new ethers.Contract(contractAddress, contractABI.abi, signer);
 
         let count = await waveportalContract.getTotalWaves();
         console.log("Retrieved total wave count...", count.toNumber());
 
         const waveTxn = await waveportalContract.wave(message, {gasLimit: 300000});
         console.log("Mining...", waveTxn.hash);
 
         await waveTxn.wait();
         console.log("Mined -- ", waveTxn.hash);
 
         count = await waveportalContract.getTotalWaves();
         console.log("Retrieved total wave count...", count.toNumber());
       } else {
         console.log("Ethereum object doesn't exist!");
       }
     } catch (error) {
       console.log(error)
     }
   }