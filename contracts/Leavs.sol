// SPDX-License-Identifier: MIT
pragma solidity 0.8.13;

contract Leavs {
    mapping(address=>string) public wids;
    mapping(address=>string) public cids;
    address[] public addresses;

    string[] public deployedContracts;

    function addUser(string memory _wid,address _walletAddress,string memory _cid) public{
        wids[_walletAddress]=_wid;
        cids[_walletAddress]=_cid;
        addresses.push(_walletAddress);
    }

    function updateCid(address _walletAddress, string memory _cid) public{
        cids[_walletAddress]=_cid;
    }


    function addContract(address contractAddress) public{
        // deployedContracts.push(contractAddress);
    }


}