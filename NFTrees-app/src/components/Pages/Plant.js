import React ,{useEffect, useState} from 'react';
import './Plant.css';
import BuyNFTree from './PageItems/BuyNFTree';
import sample from './art/sample1-text.jpg';

function Plant (props){
    const[NumTrees, setNumTrees] = useState(1);
    const[Tip, setTip] = useState('none');
    const[Coin, setCoin] = useState('USDT');
    const[totalCost, setTotalCost] = useState(1);

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

    return(
        <div className = 'plantContainer' id = 'plant'>
            <div className = 'plantContent'>
                <div className = 'plantLeft'>
                    <div className = 'plantLeftContainer'>
                        <div className = 'textContainer'>
                            {displayContent()}
                        </div>
                        <div className = 'buttonContainer'>
                            <button className = {NumTrees == 1 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(1)} > 1 </button>
                            <button className = {NumTrees == 5 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(5)}> 5 </button>
                            <button className = {NumTrees == 10 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(10)}> 10 </button>
                            <button className = {NumTrees == 100 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(100)}> 100 </button>
                            <button className = {NumTrees == 1000 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(1000)}> 1000 </button>
                            <button className = {NumTrees == 10000 ? 'activeTreeButton': 'treeButton'} onClick = {() => setNumTrees(10000)}> 10000</button>

                        </div>

                        <div className = 'paymentContainer'>
                            <div className = 'tipContainer'>
                                <button className = {Tip == 'none' ? 'activeTipButton': 'tipButton'} onClick = {() => setTip('none')} > none </button>
                                <button className = {Tip == '5' ? 'activeTipButton': 'tipButton'} onClick = {() => setTip('5')} > 5% </button>
                                <button className = {Tip == '10' ? 'activeTipButton': 'tipButton'} onClick = {() => setTip('10')}> 10% </button>
                                <button className = {Tip == '15' ? 'activeTipButton': 'tipButton'} onClick = {() => setTip('15')}> 15% </button>
                                <button className = {Tip == '20' ? 'activeTipButton': 'tipButton'} onClick = {() => setTip('20')}> 20% </button>
                                <div className = {Tip == 'custom' ? 'activeCustomTipButton': 'customTipButton'} onClick = {() => setTip('custom')}>
                                    <p className = 'dollarsign'>$</p>
                                    <input className = 'customInput' placeholder = '20'/>
                                </div>
                            </div>
                            <div className = 'coinContainer'>
                                <button className = {Coin == 'USDT' ? 'activeCoinButton': 'coinButton'} onClick = {() => setCoin('USDT')} > USDT </button>
                                <button className = {Coin == 'USDC' ? 'activeCoinButton': 'coinButton'} onClick = {() => setCoin('USDC')} > USDC </button>
                            </div>
                            <div className = 'totalContainer'>
                                <p> Total = {NumTrees + NumTrees*Number(Tip)*.01} {Coin} </p>
                                <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
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