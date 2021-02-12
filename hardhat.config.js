require("@nomiclabs/hardhat-truffle5");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.4.18"
      },
      {
        version: "0.4.23"
      },
      {
        version: "0.5.3"
      },
      {
        version: "0.6.3"
      }
    ],
    overrides: {
      "contracts/levels/Locked.sol": {
        version: "^0.4.23",
        settings: { }
      },
      "contracts/levels/LockedFactory.sol": {
        version: "^0.4.23",
        settings: { }
      },
    }
  },
  paths: {
    artifacts: './build'
  }
};
