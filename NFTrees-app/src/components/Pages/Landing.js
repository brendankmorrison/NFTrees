import React from 'react';
import './Landing.css';
import { HashLink } from 'react-router-hash-link';
import {FiArrowDown} from 'react-icons/fi';

function Landing (props){

    return(
        <div className = 'landingContainer' id = 'landing'>
            <div className = 'landingContent'>
            <div className = 'treeCount'> 1*** NFTrees Planted</div>
            <div className = 'arrowContainer'><HashLink exact smooth className = "arrow my-auto" to = '/#home'> <FiArrowDown/></HashLink></div>
            </div>
        </div>
    );
}

export default Landing;