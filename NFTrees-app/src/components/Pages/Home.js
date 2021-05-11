import React from 'react';
import './Home.css';
import sample from './sample.jpeg';
import {Link, NavLink} from "react-router-dom";
import './background1.jpeg';

function Home (props){

    return(
        <div className = 'homeContainer'>
            <div className = 'homeContent'>
                <div className = 'homeLeft'>
                    <p>
                        NFTrees is the first carbon negative NFT digital art collection. 100% of the proceeds will 
                        be donated to plant trees all over the world. Each token is proof of donation, and the 
                        corresponding number of trees planted is designatd on the top left corner of the card.  
                    </p>
                    <NavLink exact className = "plant-Link my-auto" to = '/plant'> Plant NFTree </NavLink>
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