import React from 'react';
import BuyNFTree from './PageItems/BuyNFTree';
import './Home.css';

function Home (props){

    return(
        <div className = 'homeContainer'>
            <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
        </div>
    );
}

export default Home;