import React ,{useEffect, useState} from 'react';
import './Plant.css';
import BuyNFTree from './PageItems/BuyNFTree';
import sample from './art/sample1-text.jpg';

function Plant (props){
    const[NumTrees, setNumTrees] = useState(1);

    return(
        <div className = 'plantContainer' id = 'plant'>
            <div className = 'plantContent'>
                <div className = 'plantLeft'>
                    <div className = 'plantLeftContainer'>
                    <div className = 'buttonContainer'>
                        

                    </div>

                    {/* router */}

                    <p>
                        Plant 1 NFTree, offsetting X cubic meters of carbon per year, and Recieve
                        NFTree level 1 as proof of donation.
                    </p>
                    <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
                    <p></p>
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