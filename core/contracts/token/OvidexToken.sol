// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./DSToken.sol";

contract OvidexToken is DSToken {
    constructor(string memory _name, string memory _symbol, uint8 _decimals) DSToken(_name, _symbol, _decimals) public {}
}