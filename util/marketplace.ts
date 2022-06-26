import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import LoanABI from "../artifacts/contracts/Loan.sol/Loan.json";

const MARKETPLACE_CONTRACT = "";

// put up item for sale
// fetch all items for sale
// buy item

export async function putUpItemForSale(
  contractAddress: string,
  tokenId: number,
  price: number,
  provider: WalletConnectProvider
) {
  const ethersProvider = new providers.Web3Provider(provider);
  const contract = new ethers.Contract(
    MARKETPLACE_CONTRACT,
    ActionABI.abi,
    provider
  );
  try {
    let marketItemId = await contract.createMarketItem(
      contractAddress,
      tokenId,
      price
    );
  } catch (e) {
    console.error(e);
  }
}

export async function buyItem(
  contractAddress: string,
  itemId: number,
  provider: WalletConnectProvider
) {
  const ethersProvider = new providers.Web3Provider(provider);
  const contract = new ethers.Contract(
    MARKETPLACE_CONTRACT,
    ActionABI.abi,
    provider
  );
  try {
    let marketItemId = await contract.createMarketSale(contractAddress, itemId);
  } catch (e) {
    console.error(e);
  }
}
