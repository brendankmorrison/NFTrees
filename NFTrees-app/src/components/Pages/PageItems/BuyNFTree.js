import React from 'react';
import './BuyNFTree.css';

function BuyNFTree (props){
    const handleBuyNFTree = async () => {
        props.mintToken();
    }

    return(
        <div className = 'buy rounded-pill' onClick = {handleBuyNFTree}> 
            {'PLANT NFTREE'}
        </div>
    );
}

export default BuyNFTree;