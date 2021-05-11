import React from 'react';
import './Plant.css';
import BuyNFTree from './PageItems/BuyNFTree';
import sample from './sample.jpeg';
import {Link, NavLink} from "react-router-dom";

function Plant (props){

    return(
        <div className = 'plantContainer' id = 'plant'>
            <div className = 'plantContent'>
                <div className = 'plantLeft'>
                    <p>
                        NFTrees is the first carbon negative NFT digital art collection. 100% of the proceeds will 
                        be donated to plant trees all over the world. Each token is proof of donation, and the 
                        corresponding number of trees planted is designatd on the top left corner of the card.  
                    </p>
                    <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
                    <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
                    <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
                    <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
                    <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
                    <p></p>
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