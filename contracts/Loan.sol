// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import "TradeableCashflow" from "./TradeableCashflow.sol";

contract Loan is TradeableCashflow {
    address public borrower;
    address public host="0x3E14dC1b13c488a8d5D310918780c983bD5982E7";
    address public acceptedToken="0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f"; // DAIx superfluid contract address
    string public loanDetailsCID;
    string public worldCoinID;

    enum STATUS{"NOT STARTED","PAYING","DEFAULTED","REPAID"}

    constructor (
        string _loanDetailsCID,
        string _worldCoinID;
    ) TradeableableCashflow(msg.sender,"Loan","LOAN",host,acceptedToken){
        borrower = msg.sender;
        loanDetailsCID=_loanDetailsCID;
        worldCoinID=_worldCoinID;
    }

    //function requestLoan(uint32 loanId){
    //    require(_owners[loanId] == address(0), 'Loan with loan id already exists')
    //    _mint(msg.sender, loanId);
    //}


    function grantLoan() {
        address borrower = _owners[1]; // as we only have 1 NFT per contract 

        // transfer funds to the borrower 
        address(borrower).call{value:loanAmount}("");
        borrower 

    }
}