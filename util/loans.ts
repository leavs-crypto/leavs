import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import LoanABI from "../artifacts/contracts/Loan.sol/Loan.json";
import { createFlow, updateFlow, getFlowRate } from "../util/superfluid";
const LEAVS_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
import {putUpItemForSale, buyItem, getItems} from "./marketplace";



export async function createLoanContract(
  provider: WalletConnectProvider,
  worldCoinCID: string,
  loanAmount: number,
  loanTerm: number,
  APR: number
  
) {
    const ethersProvider = new providers.Web3Provider(provider);

  try {
    let factory = new ethers.ContractFactory(
      LoanABI.abi,
      LoanABI.bytecode,
      ethersProvider.getSigner()
    );

    console.log("Deploying contract...");
    const contract = await factory.deploy(
      worldCoinCID,
      loanAmount,
      loanTerm,
      APR,
      { gasLimit: 80000000 }
    );
    
    console.log('check factory')
    console.log(contract.address);
    return contract.address;
  } catch (e) {
    console.error(e);
  }
}



export async function requestLoan(
    provider: WalletConnectProvider,
    requester: string,
    worldCoinCID: string,
    loanAmount: number,
    loanTerm: number,
    APR: number
  
  ) {
    try {
      const ethersProvider = new providers.Web3Provider(provider);
      
      let deployedAddress = await createLoanContract(provider, worldCoinCID, loanAmount, loanTerm, APR)
      
      let totalLoanAmount = 1000 // TODO
      let flowRate = totalLoanAmount /loanTerm / 31 / 24 / 3600

      await createFlow(requester, String(flowRate), provider); // start Superfluid stream into borrowers account

      await putUpItemForSale(deployedAddress, 1, loanAmount, provider);
    } catch (e) {
      console.error(e);
    }
  }


  export async function acceptLoan(
    provider: WalletConnectProvider,
    nftContractAddress: string,
    worldCoinCID: string,
    loanAmount: Number,
    loanTerm: Number,
    APR: Number
  
  ) {
    try {
      const ethersProvider = new providers.Web3Provider(provider);
      buyItem(nftContractAddress, 1, provider) 
    } catch (e) {
      console.error(e);
    }
  }










  


  




