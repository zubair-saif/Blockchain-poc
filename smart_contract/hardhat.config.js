require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
      accounts: ['e1c1d6bc9e8af3a2d3ddb9622307238fbe528a9e5c89179f05f2bba6a163593d'],
    },
  },
};