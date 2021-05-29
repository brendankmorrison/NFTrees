// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;


import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

/* Contract for NFtrees */

contract NFTree is Ownable, ERC721URIStorage{
    uint256 tokenId;
    mapping(string => IERC20) coins;
    address donationWallet;
    address tipWallet;

    constructor() ERC721('NFTree', 'TREE')
    {
        tokenId = 1;
    }

    function addToken(address _address, string memory _coin) public onlyOwner{
        coins[_coin] = IERC20(_address);
    }
    
    function setDonationWallet(address _address) public onlyOwner{
        
    }
    
    function setTipWallet(address _address) public onlyOwner{
        
    }

    function buyNFTree(uint256 _amount, uint256 _tip, string memory _coin) public payable {
        require(msg.sender != address(0) && msg.sender != address(this), 'error');
        require(coins[_coin].balanceOf(msg.sender) >= _amount + _tip, 'not enough balance');
        require(coins[_coin].allowance(msg.sender, address(this)) >= _amount + _tip, 'not enough balance');
        
        // transfer tokens
        coins[_coin].transferFrom(msg.sender, 0xAb8483F64d9C6d1EcF9b849Ae677dD3315835cb2, _amount);
        coins[_coin].transferFrom(msg.sender, 0x4B20993Bc481177ec7E8f571ceCaE8A9e22C02db, _tip);
        
        _safeMint(msg.sender, tokenId);
        
        if(_amount == 1){
            //_setTokenURI(tokenId, tokenHash); 
        } else if (_amount == 10){
            //_setTokenURI(tokenId, tokenHash); 
        } else if (_amount == 10){
            //_setTokenURI(tokenId, tokenHash); 
        } else if (_amount == 10){
            //_setTokenURI(tokenId, tokenHash); 
        } else {
            //_setTokenURI(tokenId, tokenHash); 
        }
        
        // add to total carbon offset log
        
        tokenId = tokenId + 1; 
        
    }

    function tokensOfOwner(address _owner) external view returns(uint256[] memory) {
        uint256 tokenCount = balanceOf(_owner);

        if (tokenCount == 0) {
            // Return an empty array
            return new uint256[](0);
        } else {
            uint256[] memory result = new uint256[](tokenCount);
            uint256 totalNFTrees = tokenId - 1;
            uint256 resultIndex = 0;

            // We count on the fact that all cats have IDs starting at 1 and increasing
            // sequentially up to the totalCat count.
            uint256 NFTreeId;

            for (NFTreeId = 1; NFTreeId <= totalNFTrees; NFTreeId++) {
                if (ownerOf(NFTreeId) == _owner) {
                    result[resultIndex] = NFTreeId;
                    resultIndex++;
                }
            }

            return result;
        }

    }

    function sendTo(address payable _payee) public onlyOwner{
        require(_payee != address(0) && _payee != address(this), 'error');
        //require(_amount > 0 && _amount <= address(this).balance, 'Not enough ether in contract.');
        _payee.transfer(address(this).balance);
    }
    
    function getContractBalance() public view returns(uint256){
        return(address(this).balance);
    }

    function getNextTokenId() public view returns(uint256){
        return(tokenId);
    }

}