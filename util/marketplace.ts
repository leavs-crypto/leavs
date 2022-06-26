

import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import LoanABI from "../artifacts/contracts/Loan.sol/Loan.json";


// put up item for sale 
// fetch all items for sale
// buy item

 const contract = new ethers.Contract(
    ACTIONS_CONTRACT_ADDRESS,
    ActionABI.abi,
    provider
  ) 


export async function putUpItemForSale(
  contractAddress: string,
  tokenId: number,
  price: number
) {
  try {
    await contract.createMarketItem(id);


    const contract = await factory.deploy(loanDetailsCID, worldCoinCID);
  } catch (e) {
    console.error(e);
  }
}
