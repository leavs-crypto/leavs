import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import MarketplaceABI from "../artifacts/contracts/Marketplace.sol/Marketplace.json";
import { Marketplace } from "../artifacts/contracts/types";

const MARKETPLACE_CONTRACT = "0x2d7dBE8269562C5479a0b8f5d680a0378B5BB7a1";

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
    MarketplaceABI.abi,
    ethersProvider
  ) as Marketplace;
  try {
    await contract.createMarketItem(contractAddress, tokenId, price);
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
    MarketplaceABI.abi,
    ethersProvider
  ) as Marketplace;
  try {
    await contract.createMarketSale(contractAddress, itemId);
  } catch (e) {
    console.error(e);
  }
}

export async function getItems(provider: WalletConnectProvider) {
  const ethersProvider = new providers.Web3Provider(provider);
  const contract = new ethers.Contract(
    MARKETPLACE_CONTRACT,
    MarketplaceABI.abi,
    ethersProvider
  ) as Marketplace;
  try {
    const items = await contract.fetchAvailableMarketItems();
    console.log("items", items);
  } catch (e) {
    console.error(e);
  }
}
