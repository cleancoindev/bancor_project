// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.6.12;

// import "@bancor/token-governance/contracts/TokenGovernance.sol";
import "../token-governance/TokenGovernance.sol";

contract TestTokenGovernance is TokenGovernance {
    constructor(IMintableToken mintableToken) public TokenGovernance(mintableToken) {}
}
