import divide from "divide-bigint";
export const sellNFT = async (
  ownerAddress: string,
  tokenAddress: string,
  tokenId: number,
  days: number,
  amount: number
) => {
  // Expire this auction one day from now.
  // Note that we convert from the JavaScript timestamp (milliseconds):

  const expirationTime = Math.round(Date.now() / 1000 + 60 * 60 * 24 * days);
const data= {
    offerer:ownerAddress,
    zone:"?",
    zoneHash:"??",
    start_time:Date.now(),
    endTime:expirationTime,
    orderType:1,
offer:{
    item_type:1,
    token:tokenAddress,
    startAmount:100,
    endAmount:100
}
}
  }
  const url = `https://testnets-api.opensea.io/v2/orders/ethereum/seaport/listings`;
  try {
    const resp = await axios.post(url, data, {
      headers: {
        "content-type": "application/json",
        "x-api-key": API_KEY,
      },
    });
    return resp.data.IpfsHash;
};

export const buyNFT = async (ownerAddress: string, tokenAddress: string) => {
  const order = await openseaSDK.api.getOrder({
    protocol: "seaport",
    side: "ask",
  });
  //ownerAddress The buyer's wallet address, also the taker
  const transactionHash = await openseaSDK.fulfillOrder({
    order,
    accountAddress: ownerAddress,
  });
  console.log(transactionHash);
};
