// SPDX-License-Identifier: MIT

pragma solidity ^0.8.2;

import "./OpenZepplin/token/ERC721/extensions/ERC721URIStorage.sol";
import "./OpenZepplin/token/ERC20/IERC20.sol";
import "./OpenZepplin/access/Ownable.sol";

/* Contract for NFtrees */

contract NFTree is Ownable, ERC721URIStorage{
    uint256 public hardCap;
    uint256 public currentPrice;
    bool public locked;
    uint256 tokenId;
    IERC20[] tokenList;

    constructor() ERC721('NFTree', 'TREE')
    {
        hardCap = 1000;
        currentPrice = 1 * (10 ** 18); // 1 ether
        locked = false;
        tokenId = 1;
    }

    function addToken(address _address) public onlyOwner{
        tokenList.push(IERC20(_address));
    }

    function buyNFTree(string memory tokenHash) public payable {
        require(!locked, 'Buying NFTrees is locked.');
        require(msg.sender != address(0) && msg.sender != address(this), 'error');
        require(msg.value >= currentPrice, 'Not enough ether.');
        require(!_exists(tokenId), 'Token already minted.');
        require(tokenId <= hardCap, 'Sale has ended.');
        _safeMint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenHash); 
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

    function setCurrentPrice(uint256 _currentPrice) public onlyOwner {
        currentPrice = _currentPrice * (10 ** 18);
    }
    
    function getCurrentPrice() public view returns(uint256){
        return(currentPrice);
    }

    function getNextTokenId() public view returns(uint256){
        return(tokenId);
    }

    function unlock() public onlyOwner {
        require(locked, 'Contract is unlocked.');
        locked = false;
    }

    function lock() public onlyOwner {
        require(!locked, 'Contract is locked.');
        locked = true;
    }
}


