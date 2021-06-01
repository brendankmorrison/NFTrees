import React from 'react';
import './Home.css';
import sample from './art/sample1-text.jpg';
import {NavLink} from "react-router-dom";

function Home (props){

    return(
        <div className = 'homeContainer' id = 'home'>
            <div className = 'homeContent'>
                <div className = 'homeLeft'>
                    <div className = 'homeHeaderContainer'> 
                        <div className = 'homeHeader'> Help reduce Ethereum carbon emmissions by minting <span style = {{color: '#9dba94', fontSize: '30px'}}> NFTrees </span></div>
                    
                    </div>
                    <div className = 'line'></div>
                    <p>
                        NFTrees is the first NFT-based carbon capture platform.
                        Bringing verifiable carbon credits to the cryptocurrency space.
                        Displace your carbon emmissions with NFTrees.
                    </p>
                    <NavLink exact className = "plant-Link" to = '/myimpact'> Calculate your emissions </NavLink>
                    <p></p>
                </div>
                <div className = 'spacer'></div>
                <div className = 'homeRight'>
                    <img src = {sample} width = '300px'></img>
                </div>
            </div>
        </div>
    );
}

export default Home;