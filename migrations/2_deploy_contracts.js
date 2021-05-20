const NFTree = artifacts.require("NFTree");
const Mycoin = artifacts.require("Mycoin");

module.exports = function (deployer) {
  const coin = deployer.deploy(Mycoin);
  deployer.deploy(NFTree);
};