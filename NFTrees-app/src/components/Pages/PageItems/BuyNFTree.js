import React from 'react';
import './BuyNFTree.css';

function BuyNFTree (props){
    const handleBuyNFTree = async () => {
        props.mintToken();
    }

    return(
        <button className = 'buy' onClick = {handleBuyNFTree}> 
            {'Plant'}
        </button>
    );
}

export default BuyNFTree;