import React from 'react';
import './Landing.css';
import { HashLink } from 'react-router-hash-link';
import {AiOutlineArrowDown} from 'react-icons/ai';
import { IconContext } from "react-icons";

function Landing (props){

    return(
        <div className = 'landingContainer' id = 'landing'>
            <div className = 'landingContent'>
            <div className = 'treeCount'> 100000 NFTrees Planted</div>
            <div className = 'arrowContainer'>
                <HashLink exact smooth className = "arrow my-auto" to = '/#home'>
                <AiOutlineArrowDown size = '30' style={{fill: '#D4D4D4'}}/>
                </HashLink>
            </div>
            </div>
        </div>
    );
}

export default Landing;