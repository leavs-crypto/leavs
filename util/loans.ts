import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers, providers } from "ethers";
import LoanABI from "../artifacts/contracts/Loan.sol/Loan.json";
export async function createLoanContract(
  provider: WalletConnectProvider,
  loanDetailsCID: string,
  worldCoinCID: string
) {
  try {
    const ethersProvider = new providers.Web3Provider(provider);
    let factory = new ethers.ContractFactory(
      LoanABI.abi,
      LoanABI.bytecode,
      ethersProvider.getSigner()
    );
    const contract = await factory.deploy(loanDetailsCID, worldCoinCID);
  } catch (e) {
    console.error(e);
  }
}
