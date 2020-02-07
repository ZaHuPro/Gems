/* eslint-disable no-undef */
const Migrations = artifacts.require('./Migrations.sol');

module.exports = function Migrate(deployer) {
    deployer.deploy(Migrations);
};
