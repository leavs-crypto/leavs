import { useContext } from "react";
import divide from "divide-bigint";
import { OpenSeaSDK, Network } from 'opensea-js';
import { AuthContext } from "../components/WithWalletConnect";

const provider = useContext(AuthContext);

const openseaSDK = new OpenSeaSDK(provider, {
    networkName: Network.Main,
    // apiKey: 'YOUR_API_KEY' not needed for the testnet
  })

  export const sellNFT = async (ownerAddress: string, tokenAaddress: string, tokenId: number, days: number, amount: number) => {
  
    // Expire this auction one day from now.
    // Note that we convert from the JavaScript timestamp (milliseconds):
    
    const expirationTime = Math.round(Date.now() / 1000 + 60 * 60 * 24 * days)

    const listing = await openseaSDK.createSellOrder({
        asset: {
            tokenId,
            tokenAaddress,
        },
        ownerAddress,
        amount: 3,
        // If `endAmount` is specified, the order will decline in value to that amount until `expirationTime`. Otherwise, it's a fixed-price order:
        expirationTime
    })
}

export const buyNFT = async (ownerAddress: string, tokenAddress: string) => {
    const order = await openseaSDK.api.getOrder({ protocol: 'seaport', side: "ask" })
    //ownerAddress The buyer's wallet address, also the taker
    const transactionHash = await openseaSDK.fulfillOrder({ order, accountAddress: ownerAddress })
    console.log(transactionHash)
}
