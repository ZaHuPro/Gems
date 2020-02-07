/* eslint-disable no-undef */
const Lottery = artifacts.require('./Lottery.sol');
const Election = artifacts.require('./Election.sol');

module.exports = function Deploy(deployer) {
    deployer.deploy(Election);
    deployer.deploy(Lottery);
};
