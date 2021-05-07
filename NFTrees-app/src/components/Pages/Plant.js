import React from 'react';
import './Plant.css';
import BuyNFTree from './PageItems/BuyNFTree';

function Plant (props){

    return(
        <div className = 'plantContainer'>
            <div className = 'plantContent'>
                <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
                <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
                <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
                <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
                <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
            </div>
        </div>
    );
}

export default Plant;