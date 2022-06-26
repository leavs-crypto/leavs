// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

import {TradeableCashflow} from "./TradeableCashflow.sol";
import {ISuperToken, ISuperfluid} from "./RedirectAll.sol";
contract Loan is TradeableCashflow {
    address public borrower;
    ISuperfluid public host=ISuperfluid(0x3E14dC1b13c488a8d5D310918780c983bD5982E7);
    ISuperToken public acceptedToken=ISuperToken(0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f); // DAIx superfluid contract address
    string public worldCoinID;

    uint32 loanAmount;
    uint32 loanTerm;
    uint32 APR;

    enum STATUS {NOTSTARTED,PAYING,DEFAULTED,REPAID}

    constructor (
        string memory _worldCoinID,
        uint32 _loanAmount,
        uint32 _loanTerm,
        uint32 _APR
    ) TradeableCashflow (msg.sender,"Loan","LOAN",host,acceptedToken){
        borrower = msg.sender;
        worldCoinID=_worldCoinID;
        loanAmount=_loanAmount;
        loanTerm=_loanTerm;
        APR=_APR;
    }
}