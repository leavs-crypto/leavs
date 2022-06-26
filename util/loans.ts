import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import LoanABI from "../artifacts/contracts/Loan.sol/Loan.json";



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
    const contract = await factory.deploy(worldCoinCID, loanAmount, loanTerm, APR);
  } catch (e) {
    console.error(e);
  }
}
