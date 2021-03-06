import axios from "axios";
import tatum from "@tatumio/tatum";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "hardhat";
import { providers } from "ethers";
import { LEAVS_CONTRACT_ADDRESS, LEAVS_ABI } from "./constants";
import Web3 from "web3";
// Tatum us api key
const API_KEY = "b3b6c700-aa9a-4de0-811d-057a82c752d1";

// TODO: interface in param
export async function postIPFS(data: object) {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  try {
    const resp = await axios.post(url, JSON.stringify(data), {
      headers: {
        pinata_api_key: "6a09485934c38d2eaa22",
        pinata_secret_api_key:
          "c66ee0e1a50991957a320035d5037dfa0b59b03317c16659e152724234e1ea2b",
      },
    });
    return resp.data.IpfsHash;
  } catch (error) {
    throw Error(error);
  }
}

// tatum not working for ipfs
// export async function postIPFS(data: object) {
//   try {
//     let form = new FormData();
//     form.append("file", "127654187631872620");

//     const resp = await fetch(
//       `https://api-us-west1.tatum.io/v3/ipfs`,
//       {
//         method: 'POST',
//         headers: {
//           'x-api-key': API_KEY
//         },
//         body: form
//       }
//     );
//     console.log('resp', resp.json());
//     return resp.data.ipfsHash as string;
//   } catch (error) {
//     throw Error(error)
//   }
// }

export const toIPFSUrl = (cid: string) => {
  return "https://ipfs.io/ipfs/" + cid;
};

// export async function callSmartContractFunction( //would also call withdraw function from smart contract etc
//   contractAddress: string,
//   methodName: string,
//   methodABI: object,
//   params: string[],
//   provider: WalletConnectProvider
// ) {
//   const ethersProvider = new providers.Web3Provider(provider);
//   // tatum.sendPolygonSmartContractMethodInvocationTransaction(true, {
//   //   contractAddress: contractAddress,
//   //   params: params,
//   //   methodABI: methodABI,
//   //   methodName: methodName,
//   //   signatureId: await ethersProvider.getSigner().signTransaction(),
//   // } as tatum.SmartContractMethodInvocation);
//   const url = `https://api-us-west1.tatum.io/v3/polygon/smartcontract`;
// }

// export async function callSmartContractFunction( //would also call withdraw function from smart contract etc
//   methodName: string,
//   methodABI: object,
//   params: string[]
// ) {
//   const data = {
//     contractAddress: LEAVS_CONTRACT_ADDRESS,
//     methodName: methodName,
//     methodABI: methodABI,
//     params: params,
//   };
//   const url = `https://api-us-west1.tatum.io/v3/polygon/smartcontract`;
//   try {
//     console.log('data', data);
//     const resp = await axios.post(url, data, {
//       headers: {
//         "content-type": "application/json",
//         "x-api-key": API_KEY,
//       },
//     });
//     console.log('resp', resp);
//     return resp.data.IpfsHash;
//   } catch (error) {
//     console.log("error", (error as any).response);
//     throw Error(error)
//   }
// }
