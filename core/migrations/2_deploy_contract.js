const DSToken = artifacts.require("DSToken");
const OvidexToken = artifacts.require("OvidexToken.sol");
const Utils = artifacts.require("Utils.sol");
const Owned = artifacts.require("Owned.sol");
const TokenHolder = artifacts.require("TokenHolder.sol");
const ContractRegistry = artifacts.require("ContractRegistry.sol");
const BancorFormula = artifacts.require("BancorFormula.sol");
const BancorNetwork = artifacts.require("BancorNetwork.sol");
const ConverterBase = artifacts.require("ConverterBase.sol");
const ConverterFactory = artifacts.require("ConverterFactory.sol");
const ConverterUpgrader = artifacts.require("ConverterUpgrader.sol");
const ConverterRegistry = artifacts.require("ConverterRegistry.sol");
const XTransferRerouter = artifacts.require("XTransferRerouter.sol");
const Whitelist = artifacts.require("Whitelist.sol");

module.exports = async function (deployer, network, addresses) {
    // deployer.deploy(Migrations);
    let tokenAdress;
    if(network == 'mainnet') {

    } else {
        deployer.deploy(Utils);
        deployer.deploy(Owned);
        deployer.deploy(TokenHolder);

        await deployer.deploy(ContractRegistry);
        registryAddress = await ContractRegistry.deployed();

        deployer.deploy(Whitelist);

        await deployer.deploy(OvidexToken, 'Ovidex Token', 'OVX');
        tokenAdress = await OvidexToken.deployed();

        deployer.deploy(BancorFormula);
        deployer.deploy(BancorNetwork, registryAddress);
        deployer.deploy(ConverterBase, tokenAdress, registryAddress, 0);

        await deployer.deploy(ConverterFactory);
        await deployer.deploy(ConverterUpgrader, registryAddress);
        await deployer.deploy(ConverterRegistry);
        deployer.deploy(XTransferRerouter, true);
    }
};
