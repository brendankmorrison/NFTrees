import React ,{useEffect, useState} from 'react';
import './Plant.css';
import BuyNFTree from './PageItems/BuyNFTree';
import sample from './art/sample1-text.jpg';
import { RiContrastDropLine } from 'react-icons/ri';

function Plant (props){
    const[NumTrees, setNumTrees] = useState(1);
    const[Tip, setTip] = useState('Tip devs');
    const[Coin, setCoin] = useState('USDT');
    const[totalCost, setTotalCost] = useState(1);
    const[tipMenuOpen, setTipMenuOpen] = useState(false);
    const[coinMenuOpen, setCoinMenuOpen] = useState(false);
    const[total, setTotal] = useState(0);

    useEffect (() => {
        document.body.addEventListener('click', function(e){
            var ignore = document.getElementById('tipMenuButton');
            if (!(e.target === ignore)){
                setTipMenuOpen(false);
            }
            else {
                return;
            }
        });

        document.body.addEventListener('click', function(e){
            var ignore = document.getElementById('coinMenuButton');
            if (!(e.target === ignore)){
                setCoinMenuOpen(false);
            }
            else {
                return;
            }
        });

    }, []);

    function displayContent (){
        if (NumTrees == 1){
            return(
                <p>
                    Plant 1 NFTree, offsetting X cubic meters of carbon per year, and Recieve
                        NFTree level 1 as proof of donation.
                </p>
            )
        }
        else if(NumTrees == 5){
            return(
                <p>
                    Plant 5 NFTrees, offsetting X cubic meters of carbon per year, and Recieve
                    NFTree level 2 as proof of donation.
                </p>
            )
        }
        else if(NumTrees == 10){
            return(
                <p>
                    Plant 10 NFTrees, offsetting X cubic meters of carbon per year, and Recieve
                    NFTree level 3 as proof of donation.
                </p>
            )
        }
        else if(NumTrees == 100){
            return(
                <p>
                    Plant 100 NFTrees, offsetting X cubic meters of carbon per year, and Recieve
                    NFTree level 4 as proof of donation.
                </p>
            )
        }
        else if(NumTrees == 1000){
            return(
                <p>
                    Plant 1000 NFTrees, offsetting X cubic meters of carbon per year, and Recieve
                    NFTree level 5 as proof of donation.
                </p>
            )
        }
        else if(NumTrees == 10000){
            return(
                <p>
                    Plant 10000 NFTrees, offsetting X cubic meters of carbon per year, and Recieve
                    NFTree level 6 as proof of donation.
                </p>
            )
        }

    }

    function displayTreeMenu (){
        return(
            <div className = 'buttonContainer'>
                <button className = {NumTrees == 1 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(1)} > 1 </button>
                <button className = {NumTrees == 5 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(5)}> 5 </button>
                <button className = {NumTrees == 10 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(10)}> 10 </button>
                <button className = {NumTrees == 100 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(100)}> 100 </button>
                <button className = {NumTrees == 1000 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(1000)}> 1000 </button>
                <button className = {NumTrees == 10000 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(10000)}> 10000</button>
            </div>
            )
    }

    function displayTipMenu (){
        if (tipMenuOpen){
            return(
                <div>
                    <button className = 'tipButton' onClick = {() => setTip('none')} > none </button>
                    <button className = 'tipButton' onClick = {() => setTip('5')} > 5% </button>
                    <button className = 'tipButton' onClick = {() => setTip('10')}> 10% </button>
                    <button className = 'tipButton' onClick = {() => setTip('15')}> 15% </button>
                    <button className = 'tipButton' onClick = {() => setTip('20')}> 20% </button>
                    {/*<div className = 'customTipButton' onClick = {() => setTip('custom')}> custom </div>*/}
                </div>
            )
        }
        else{
            return
        }
    }

    function displayTipSelection (){
        if(isNaN(Tip)){
            return(
                Tip
            )
        } else {
            return(
                '% ' + Tip
            )
        }
    }

    function displayCoinMenu (){
        if (coinMenuOpen){
            return(
                <div>
                    <button className = 'coinButton' onClick = {() => setCoin('USDT')} > USDT </button>
                    <button className = 'coinButton' onClick = {() => setCoin('USDC')} > USDC </button>
                </div>

            
            )
        }
        else{
            return
        }
    }

    function calculateTotal (){
        if(isNaN(Number(Tip))){
            return(
                NumTrees    
            )
        } else{
            return(
                NumTrees + NumTrees*Number(Tip)*.01
            )
        }

    }



    return(
        <div className = 'plantContainer' id = 'plant'>
            <div className = 'plantContent'>
                <div className = 'plantLeft'>
                    <div className = 'plantLeftContainer'>
                        <div className = 'plantHeaderContainer'>
                        <div className = 'plantHeader'> How many <span style = {{color: '#9dba94', fontSize: '30px'}}> NFTrees </span> would you like to plant? </div>
                        </div>
                        <div className = 'line'></div>
                        <div>
                            {displayTreeMenu()}
                        </div>

                        <div className = 'textContainer'>
                            {displayContent()}
                        </div>

                        <div className = 'paymentContainer'>
                            <div className = 'tipContainer'>
                                <button onClick = {() => setTipMenuOpen(true)} id = 'tipMenuButton' className = 'tipMenuButton'> {displayTipSelection()} </button>
                                {displayTipMenu()}
                            </div>

                            <div className = 'coinContainer'>
                                <button onClick = {() => setCoinMenuOpen(true)} id = 'coinMenuButton' className = 'coinMenuButton'> { Coin } </button>
                                {displayCoinMenu()}
                            </div>

                            <div className = 'totalContainer'>
                                <p className = 'total'> Total = {calculateTotal()} {Coin} </p>
                                <BuyNFTree mintToken = {props.mintToken} isConnected = {props.isConnected}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = 'spacer'></div>
                <div className = 'plantRight'>
                    <img src = {sample} width = '300px'></img>
                </div>
            </div>
        </div>
    );
}

export default Plant;