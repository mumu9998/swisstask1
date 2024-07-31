require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [39e4a555caa6c0bf07adb9c17cfb4afb39758804883e5e9e4c16333a098b8d6e], //Your private key starting with "0x"
    },
  },
};