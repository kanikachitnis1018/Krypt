//https://eth-sepolia.g.alchemy.com/v2/oOOWiUetE_LKqPvqVHB0UMZWOYMwZMEH

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/oOOWiUetE_LKqPvqVHB0UMZWOYMwZMEH',
      accounts: ['90d202fbcd81219af6acb35d90088e5a63cbccfa23ec282f4825c8caa1ebb0de']
    }
  }
}