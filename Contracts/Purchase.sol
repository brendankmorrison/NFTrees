// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "./INFTree.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

/* Contract for NFtrees */

contract Purchase is Ownable{
    mapping(string => IERC20) coins;
    address offrampWallet;
    address tipWallet;
    mapping(uint256 => string) tokenHash;
    uint256 totalOffset;

    constructor()
    {
        offrampWallet = 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2;
        tipWallet = 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db;
        totalOffset = 0;
    }

    function addToken(address _address, string memory _coin) external onlyOwner{
        coins[_coin] = IERC20(_address);
    }
    
    function setOfframpWallet(address _address) external onlyOwner{
        offrampWallet = _address;
    }
    
    function getOfframpWallet() external view onlyOwner returns(address){
        return(offrampWallet);
    }
    
    function setTipWallet(address _address) external onlyOwner{
        tipWallet = _address;
    }
    
    function setTokenHash(uint256 _level, string memory _hash) public onlyOwner{
        require(_level >= 1 && _level <= 5, 'Invalid level');
        
        tokenHash[_level] = _hash;
    }
    
    function getTokenHashes() external view onlyOwner returns(string[] memory){
        
    }
    
    function getTotalOffset() external view returns(uint256){
        return(totalOffset);
    }

    function buyNFTree(uint256 _numCredits, uint256 _amount, uint256 _tip, string memory _coin) external {
        require(msg.sender != address(0) && msg.sender != address(this), 'Sending from zero address');
        require(coins[_coin].balanceOf(msg.sender) >= _amount + _tip, 'Not enough balance');
        require(_amount >= _numCredits * 10, 'Not enough value');
        require(coins[_coin].allowance(msg.sender, address(this)) >= _amount + _tip, 'Not enough allowance');
        
        // transfer tokens
        coins[_coin].transferFrom(msg.sender, offrampWallet, _amount);
        coins[_coin].transferFrom(msg.sender, tipWallet, _tip);
        
        //_safeMint(msg.sender, tokenId);
        
        if(_numCredits == 1){
           
        } else if (_numCredits == 10){
           
        } else if (_numCredits == 100){
            
        } else if (_numCredits == 1000){
            
        } else {
            
        }
        
        // add to total carbon offset log
        totalOffset = totalOffset + _numCredits;
    }


}


