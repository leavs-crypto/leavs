import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import LoanABI from "../artifacts/contracts/Loan.sol/Loan.json";

import {createFlow, updateFlow, getFlowRate} from "../util/superfluid";
import {sellNFT} from "../util/opensea";



export async function createLoanContract(
  provider: WalletConnectProvider,
  worldCoinCID: string,
  loanAmount: number,
  loanTerm: number,
  APR:number
) {
  try {
    const ethersProvider = new providers.Web3Provider(provider);
    let factory = new ethers.ContractFactory(
      LoanABI.abi,
      LoanABI.bytecode,
      ethersProvider.getSigner()
    );
    console.log('Deploying contract...')
    const contract = await factory.deploy(worldCoinCID, loanAmount, loanTerm, APR,  {gasLimit:800000});
    console.log(contract.address)
    return contract.address
} catch (e) {
    console.error(e);
  }
}


export async function requestLoan(
    borrower: string,
    provider: WalletConnectProvider,
    worldCoinCID: string,
    loanAmount: number,
    loanTerm: number,
    APR:number
  ) 
  {

    let totalLoan = 1000; // TODO calculate real loan
    const deployedAddress = createLoanContract(provider, worldCoinCID, loanAmount, loanTerm, APR)
    // save the deployed address in the Leavs depled smart contract

    // open up the Superfluid stream
    let flowRate= totalLoan/loanTerm/30/24/60/60
    await createFlow(borrower, String(flowRate), provider)
    

    // put up the NFT on OpenSea marketplace

    sellNFT()
  }
  
