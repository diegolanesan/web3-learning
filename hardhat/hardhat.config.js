require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.STAGING_ALCHEMY_KEY, 
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

// Contract address of WavePortal in Rinkeby
// 0xdbdE3A77Cb83FbC07Ff4f423421edF9F627Fd6Dd
// Version de WavePortal que almacena mensajes
// 0x276970079fC5dD79d0a45D20700Fa58432135Fb0
// Version de WavePortal con fondos y que paga a las address que ejecutan la funcion wave
// 0xd49Bb2B031D8935470b52F6F4c218aF2eDf0e63F
// Version de WavePortal que da premios con un 50% de probabilidad
// 0xFd0031ffdE51DcCff3452a9a5Ed4Dd75374843fd
// Ultima versión con 5% de probabilidad
// 0x272b0924D541fd0dFdE3Acb95bb20d3B5394c666