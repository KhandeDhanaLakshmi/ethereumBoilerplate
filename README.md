
# Simple Hardhat Boilerplate

It comes with a MyToken contract, a test for that contract, a sample script that deploys that contract, etherscan config for verify contract, all test network and main network configuration ready just put your API_KEY & PRIVATE_KEY.



## Important Step

```bash
create .env file in root directory. 
```
```bash
Add this to your .env file
```

```bash
MATIC_API_URL = "https://polygon-mainnet.g.alchemy.com/v2/"
MUMBAI_API_URL = "https://polygon-mumbai.g.alchemy.com/v2/GEBGzqHSSfY13CbRHCP7GKlU04fVxsZH" 
ETHEREUM_API_URL = "https://eth-mainnet.alchemyapi.io/v2/"
RINKEBY_API_URL = "https://eth-rinkeby.alchemyapi.io/v2/" 
ROPSTEN_API_URL = "https://eth-ropsten.alchemyapi.io/v2/"
PRIVATE_KEY = "YOUR-METAMASK-PRIVATE_KEY" 
ETHERSCAN_API_KEY = "YOUR-ETHERSCAN_API_KEY"
```
-Get Your API Key
 - [Alchemy](https://alchemy.com/?r=36af7883c4699196)
 - [Etherscan](https://etherscan.io/register)

-Get Your Rinkeby Faucet 

 - [Rinkeby Faucet](https://faucets.chain.link/rinkeby)

-Get Your Rinkeby Faucet 

 - [Ropsten Faucet](https://faucet.metamask.io/)

-Get Your Mumbai Faucet 

 - [Mumbai Faucet](https://faucet.polygon.technology/) 

-Get Your Matic 

 - [Matic](https://matic.supply/) 


## NPM Packages 

- [Openzeppelin](https://www.npmjs.com/package/@openzeppelin/contracts)
- [Hardhat-Ethers](https://www.npmjs.com/package/hardhat-ethers)
- [Chai](https://www.npmjs.com/package/chai)
- [Ethers](https://www.npmjs.com/package/ethers)
- [Ethereum-Waffle](https://www.npmjs.com/package/ethereum-waffle)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Hardhat-Etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan)
## Tech Stack

 - [Node](https://nodejs.org/en/)
 - [Hardhat](https://hardhat.org/)
 - [Solidity](https://docs.soliditylang.org/)
 - [Openzepplin](https://openzeppelin.com/)

## Check out Explorer

- [Eterscan Exploere](https://etherscan.io/)
- [Rinkeby Explorer](https://rinkeby.etherscan.io/)
- [Ropsten Explorer](https://ropsten.etherscan.io/)
- [Polygon Explorer](https://polygonscan.com/)
- [Mumbai Explorer](https://mumbai.polygonscan.com/)
## Run Locally

Clone the project

```bash
  git clone https://github.com/karangorania/hardhat-boilerplate
```

Go to the project directory

```bash
  cd hardhat-boilerplate
```

Install dependencies

```bash
  npm install
```

Compile

```bash
  npx hardhat compile 
```

Test

```bash
  npx hardhat test
```

Deploy

```bash
  node scripts/deploy.js
```

Deploy on Ropsten

```bash
  npx hardhat run scripts/deploy.js --network ropsten
```  

Deploy on Rinkeby 

```bash
  npx hardhat run scripts/deploy.js --network rinkeby
```  

Deploy on Mumbai

```bash
  npx hardhat run scripts/deploy.js --network mumbai
```  

Deploy on Ropsten

```bash
  npx hardhat run scripts/deploy.js --network matic
```  
Verify Contract
```bash
npx hardhat verify --network <ANY_NETWORK> <YOUR_CONTRACT_ADDRESS>
```

Help

```bash
  npx hardhat help
```
