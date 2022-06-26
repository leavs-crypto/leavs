import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import LeavsABI from "../artifacts/contracts/Leavs.sol/Leavs.json";
import { Leavs } from "../artifacts/contracts/types";
const LEAVS_CONTRACT_ADDRESS = "0xAf189FdA9317457600C784dA32F23E98adBA4280";
export async function addUser(
  wid: string,
  cid: string,
  provider: WalletConnectProvider
) {
  const ethersProvider = new providers.Web3Provider(provider);
  const contract = new ethers.Contract(
    LEAVS_CONTRACT_ADDRESS,
    LeavsABI.abi,
    ethersProvider.getSigner()
  ) as Leavs;
  console.log("hh", ethersProvider.getSigner());
  console.log("hh", contract.address);
  console.log("hh", contract.addUser);
  try {
    await contract.addUser(wid, provider.accounts[0], cid, {
      gasLimit: 800000000,
    });
    console.log("hu");
  } catch (e) {
    console.error(e);
  }
  console.log("haau");
}
