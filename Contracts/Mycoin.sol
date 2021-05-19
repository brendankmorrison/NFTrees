// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./OpenZepplin/token/ERC20/ERC20.sol";

contract Mycoin is ERC20{
    uint256 public hardCap;

    constructor() ERC20('Mycoin', 'MYC') {
        hardCap = 10000;
        _mint(address(0x04b6867a08E81f2378959ba4b4F41eB086AcAA74), 10000);
    }
}