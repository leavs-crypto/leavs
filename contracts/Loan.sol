// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;
import "TradeableCashflow" from "./TradeableCashflow.sol";

contract Loan is TradeableCashflow {
    address public borrower;
    address public host="0x00000";
    address public acceptedToken="0x00000";
    string public loanDetailsCID;
    string public worldCoinID;
    enum STATUS{"NOT STARTED","PAYING","DEFAULTED","REPAID"}
    constructor (
        string _loanDetailsCID,
        string _worldCoinID;
    ) TradeableableCashflow(msg.sender,"Loan","LOAN",host,acceptedToken){
        borrower=msg.sender;
        loanDetailsCID=_loanDetailsCID;
        worldCoinID=_worldCoinID;
    }
    function _beforeTokenTransfer(
        address /*from*/,
        address to,
        uint256 /*tokenId*/
    ) internal override {
         _changeReceiver(to);
        STATUS="PAYING"
    }
}