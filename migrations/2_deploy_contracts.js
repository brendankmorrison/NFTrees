const NFTree = artifacts.require("NFTree");
const Mycoin = artifacts.require("Mycoin");

module.exports = function (deployer) {
  deployer.deploy(NFTree);
  deployer.deploy(Mycoin);
};