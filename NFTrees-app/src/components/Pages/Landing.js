import React from 'react';
import './Landing.css';
import { HashLink } from 'react-router-hash-link';
import {BsChevronCompactDown} from 'react-icons/bs';
import { IconContext } from "react-icons";

function Landing (props){

    return(
        <div className = 'landingContainer' id = 'landing'>
            <div className = 'landingContent'>
            <div className = 'treeCountNumber'> 1XXXXX </div>
            <div className = 'treeCount'> NFTrees Planted</div>
            <div className = 'arrowContainer'>
                <HashLink exact smooth className = "arrow my-auto" to = '/#home'>
                <BsChevronCompactDown size = '40' className = 'icon'/>
                </HashLink>
            </div>
            </div>
        </div>
    );
}

export default Landing;