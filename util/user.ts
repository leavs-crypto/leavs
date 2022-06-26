import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import LeavsABI from "../artifacts/contracts/Leavs.sol/Leavs.json";
import { Leavs } from "../artifacts/contracts/types";
const LEAVS_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
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
    await contract.addUser(wid, provider.accounts[0], cid);
    console.log("hu");
  } catch (e) {
    console.error(e);
  }
  console.log("haau");
}
