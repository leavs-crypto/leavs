import axios from "axios";

// TODO change API key
const API_KEY = "f0f95c56-c616-4326-b0b9-d3715ed8233e";

export async function callSmartContractFunction( //would also call withdraw function from smart contract etc
  methodName: string,
  methodABI: object,
  params: string[],
  amount: string,
  privateKey: string
) {
  const data = {
    contractAddress: ACTIONS_CONTRACT_ADDRESS,
    methodName: methodName,
    methodABI: methodABI,
    params: params,
    amount: amount,
    fromPrivateKey: privateKey,
  };
  const url = `https://api-eu1.tatum.io/v3/polygon/smartcontract`;
  try {
    const resp = await axios.post(url, data, {
      headers: {
        "content-type": "application/json",
        "x-api-key": API_KEY,
      },
    });
    return resp.data.IpfsHash;
  } catch (error) {
    console.log("error", (error as any).response);
    throw Error(error);
  }
}

// TODO: interface in param
export async function postIPFS(data: object) {
  try {
    const url = `https://api-eu1.tatum.io/v3/ipfs`;
    const resp = await axios.post(
      url,
      JSON.stringify({ fernando: "Moin", alex: "buenor" }),
      {
        headers: {
          "content-type": "application/json",
          "x-api-key": API_KEY,
        },
      }
    );
    console.log("resp", resp.body, resp.json());
    return resp as any;
  } catch (error) {
    console.log("error: ", error);
    throw Error(error);
  }
}

export async function getIPFS(cid: string) {
  const url = `https://api-eu1.tatum.io/v3/ipfs/${cid}`;
  const response = await axios.get(url);
  return response.data;
}

export const toIPFSUrl = (cid: string) => {
  return "https://ipfs.io/ipfs/" + cid;
};
