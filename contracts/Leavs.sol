// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

contract Leavs {
    mapping(address=>string) public wids;
    mapping(address=>string) public cids;
    string[] public addresses;
    function addUser(string memory _wid,address _walletAddress,string memory _cid) public{
        walletAddresses[_walletAddress]=wid;
        cids[_walletAddress]=_cid;
        addresses.push(_walletAddress);
    }
    function updateCid(address memory _walletAddress, string memory _cid) public{
        cids[_walletAddress]=_cid;
    }
}