import { ethers } from "ethers";
import {contractAddress} from './contractAddress'
import contractABI from './WavePortal.json'

export const getAllWaves = async (setAllWaves) => {
    try {
        const { ethereum } = window;
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const wavePortalContract = new ethers.Contract(contractAddress, contractABI.abi, signer);
  
          /*
           * Call the getAllWaves method from your Smart Contract
           */
          const waves = await wavePortalContract.getAllWaves();
          
  
          /*
           * We only need address, timestamp, and message in our UI so let's
           * pick those out
           */
          let wavesCleaned = [];
          waves.forEach(wave => {
            wavesCleaned.push({
              address: wave.waver,
              timestamp: new Date(wave.timestamp * 1000),
              message: wave.message
            });
          });
  
          /*
           * Store our data in React State
           */
          setAllWaves(wavesCleaned);
          /**
           * Listen in for emitter events!
           */
          wavePortalContract.on("NewWave", (from, timestamp, message) => {
            console.log("NewWave", from, timestamp, message);
  
            setAllWaves(prevState => [...prevState, {
              address: from,
              timestamp: new Date(timestamp * 1000),
              message: message
            }]);
          });
        } else {
          console.log("Ethereum object doesn't exist!")
        }
      } catch (error) {
        console.log(error);
      }  
    }