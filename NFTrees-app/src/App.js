// base imports
import React ,{useEffect, useState} from 'react';
import './App.css';
import NFTreeABI from './contracts/NFTree.json';
import MycoinABI from './contracts/Mycoin.json'; //test

// import packages
import Web3 from 'web3';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import components
import Landing from './components/Pages/Landing';
import Navbar from './components/Navigation/Navbar';
import Home from './components/Pages/Home';
import Plant from './components/Pages/Plant';
import Wallet from './components/Pages/Wallet';
import About from './components/Pages/About';
import Footer from './components/Pages/Footer';
import ScrollToTop from './components/Pages/PageItems/ScrollToTop';

function App() {
  const[Currentaccount, setCurrentaccount] = useState("connect eth account.");
  const[Secondaccount, setSecondaccount] = useState("connect eth account.");
  const[Currentnetwork, setCurrentnetwork] = useState(0);
  const[NFTreeContract, setNFTreeContract] = useState();
  const[MycoinContract, setMycoinContract] = useState();
  const[nextTokenId, setNextTokenId] = useState();
  const[isLoading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      await loadWeb3();
      await loadBlockchainData();
    };

    // initialize web3 and load blockchain data
    load();

    // reload on metamask accountsChanged event
    window.ethereum.on('accountsChanged', function (accounts) {
      load(); 
    });

    // reload on metamask networkChanged event
    window.ethereum.on('networkChanged', function (accounts) {
      load();
    });

    setLoading(false);
  }, []);

  /* ethereum initialization functions */

  // detect ethereum browser 
  const loadWeb3 = async () => {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'no ethereum wallet detected.'
      );
    }
  }

  const connectWallet = async () => {
    if(window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        'no ethereum wallet detected.'
      );
    }

    // fetch user eth account
    const accounts = await window.web3.eth.getAccounts();
    const account = accounts[0];
    // set current account to account[0] if unlocked
    if (account){
      setCurrentaccount(account);
    }
  }

  // load ethereum accounts, network, and smart contracts 
  const loadBlockchainData = async () => {
    // initialize web3
    const web3 = window.web3;
    
    // fetch user eth account
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    // set current account to account[0] if unlocked
    if (account){
      setCurrentaccount(account);
    }

    // get networkId, display error if networkId != 1 (ethereum mainnet)
    // 1337 local host
    const networkId = await web3.eth.net.getId();
    if(networkId !== 5777){
      setCurrentaccount('wrong network');
      setCurrentnetwork(networkId);
    }

    // get smart contracts
    const networkData = NFTreeABI.networks[networkId];
    const networkData2 = MycoinABI.networks[networkId];

    if(networkData){
      
      setNFTreeContract(await new web3.eth.Contract(NFTreeABI.abi, networkData.address));
      setMycoinContract(await new web3.eth.Contract(MycoinABI.abi, networkData2.address));
      console.log(NFTreeContract);
      console.log(MycoinContract);

      /* do not know why i need to do this */
      let contract = await new web3.eth.Contract(NFTreeABI.abi, networkData.address);
      setNextTokenId(await contract.methods.getNextTokenId().call());
    }else{
      //window.alert('Contract Not Deployed')
    }
  }

  /* smart contract interaction functions */

  const mintToken = async () => {
    // get next metadata hash

    // call buyNFTree function
    await NFTreeContract.methods.buyNFTree('QmfUShAbxfXecoxySb9JiMH1Lb8URUw2Cse9Usj5vZmeej').send({from: Currentaccount, value: 10**18});
    //await NFTreeContract.methods.sendTo(Currentaccount).send({from: Currentaccount});
    console.log('contract balance', await NFTreeContract.methods.getContractBalance().call());

    // if transaction went through mark metadata hash as used

    // update next token id
    setNextTokenId(await NFTreeContract.methods.getNextTokenId().call());
  }

  const mint = async () => {
    await MycoinContract.methods.mint(Currentaccount).send({from: Currentaccount, value: 0});
    console.log(await MycoinContract.methods.totalSupply().call())
    console.log(await MycoinContract.methods.balanceOf(Currentaccount).call())

  }

  const balance = async () => {
    console.log(await MycoinContract.methods.balanceOf(Currentaccount).call())

  }

  const transfer = async () => {
    await MycoinContract.methods.transfer('0x2e5228Ab51087B6FFD54F63af375Ebb2d2094e3F', 10000).send({from: Currentaccount, value: 0});
    console.log(await MycoinContract.methods.balanceOf('0x2e5228Ab51087B6FFD54F63af375Ebb2d2094e3F').call())

  }

  const searchAddress = async () => {
    // search only if eth address
    if(Currentaccount === 40){
      let tokens = [];
      let balance = 0;
      balance = await NFTreeContract.methods.balanceOf(Currentaccount).call();
      if(balance >= 1){
        tokens = await NFTreeContract.methods.tokensOfOwner(Currentaccount).call();
      } else {
        //alert('This address does not own any NFTrees.');
      }
      return(tokens);
    } else {
      return []
    }
  }

  const getToken = async (tokenId) => {
    //fetch(await NFTreeContract.methods.tokenURI(1).call())
      //.then(response => response.json())
      //.then(data => console.log(data));
    console.log('getToken');
    return(await NFTreeContract.methods.tokenURI(1).call());
    
  }

  return (
    <div className = 'App'>
      <Router>
        <Switch>
          
          <Route exact path= "/">
            <Landing/>
            <div className= 'home'>
              <Navbar account = {Currentaccount} connectWallet = {connectWallet}/>
              <Home mintToken = {mintToken} nextTokenId = {nextTokenId}/>
              <button onClick = {mint}> mint mycoin </button>
              <button onClick = {balance}> balance </button>
              <button onClick = {transfer}> transfer </button>
              <div className = 'space'></div>
              <Plant mintToken = {mintToken} nextTokenId = {nextTokenId}/>
              <Footer />
            </div>
          </Route>

          <Route path="/wallet">
            <ScrollToTop/>
            <Navbar account = {Currentaccount} connectWallet = {connectWallet}/>
            <Wallet getToken = {getToken} searchAddress = {searchAddress}/>
            <Footer />
          </Route>

          <Route path="/about">
            <ScrollToTop/>
            <Navbar account = {Currentaccount} connectWallet = {connectWallet}/>
            <About />
            <Footer />
          </Route>

        </Switch>
      </Router>
    </div>

  );
}

export default App;
