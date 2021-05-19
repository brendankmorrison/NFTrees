// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./OpenZepplin/token/ERC20/ERC20.sol";

contract Mycoin is ERC20{

    constructor() ERC20('Mycoin', 'MYC') {
    }

    function mint(address myaddress) public payable{
        _mint(myaddress, 10000000000);
    }
}