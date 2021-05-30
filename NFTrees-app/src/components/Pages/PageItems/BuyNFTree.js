import React from 'react';
import './BuyNFTree.css';

function BuyNFTree (props){
    const handleBuyNFTree = async () => {
        if(props.isConnected){
            props.mintToken();
        }
        else {
            alert('Connect eth account');
        }
    }

    return(
        <button className = 'buy' onClick = {handleBuyNFTree}> 
            {'Plant'}
        </button>
    );
}

export default BuyNFTree;