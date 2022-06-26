import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";

dotenv.config();
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  defaultNetwork: "pokt",
  solidity: "0.8.13",
  typechain: {
    outDir: "artifacts/contracts/types",
    target: "ethers-v5",
  },
  networks: {
    pokt: {
      url: "https://poly-archival.gateway.pokt.network/v1/lb/62b7cdfa123e6f0039851f92",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    ropsten: {
      url: process.env.ROPSTEN_URL || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/d62fb642f5ad46ec98639ad9d23de080",
      accounts:
        process.env.MUMBAI_PRIVATE_KEY != undefined
          ? [process.env.MUMBAI_PRIVATE_KEY]
          : [],
    },
  },
};

export default config;
