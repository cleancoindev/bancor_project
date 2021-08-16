/* global artifacts */

const Migrations = artifacts.require('../contracts/helpers/Migrations.sol');
const BancorFormula = artifacts.require('../contracts/converter/BancorFormula.sol');

module.exports =async (deployer) => {
    deployer.deploy(Migrations);
    deployer.deploy(BancorFormula);
};
