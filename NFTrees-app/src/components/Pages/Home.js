import React from 'react';
import BuyNFTree from './PageItems/BuyNFTree';
import './Home.css';

function Home (props){

    return(
        <div className = 'homeContainer'>
            <div className = 'homeContent'>
                <div className = 'homeLeft'>
                    <div>
                        <BuyNFTree mintToken = {props.mintToken} nextTokenId = {props.nextTokenId}/>
                    </div>
                </div>
                <div className = 'spacer'></div>
                <div className = 'homeRight'>hello</div>
            </div>
        </div>
    );
}

export default Home;