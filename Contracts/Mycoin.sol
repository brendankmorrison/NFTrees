// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol";

contract Mycoin is ERC20{

    constructor() ERC20('Mycoin', 'MYC') {
    }

    function mint(address myaddress) public payable{
        _mint(myaddress, 1000);
    }
}