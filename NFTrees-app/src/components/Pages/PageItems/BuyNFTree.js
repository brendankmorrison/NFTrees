import React from 'react';
import './BuyNFTree.css';

function BuyNFTree (props){
    const handleBuyNFTree = async () => {
        props.mintToken();
    }

    return(
        <div className = 'buy' onClick = {handleBuyNFTree}> 
            {'PLANT NFTREE'}
        </div>
    );
}

export default BuyNFTree;