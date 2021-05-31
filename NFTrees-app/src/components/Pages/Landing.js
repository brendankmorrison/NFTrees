import React from 'react';
import './Landing.css';
import { HashLink } from 'react-router-hash-link';
import {BsChevronCompactDown} from 'react-icons/bs';
import { IconContext } from "react-icons";
import CountUp from 'react-countup';

function Landing (props){

    return(
        <div className = 'landingContainer' id = 'landing'>
            <div className = 'landingContent'>
            <CountUp className = 'treeCountNumber' end = {10000} duration = {4} separator = {','}/>
            <div className = 'treeCount'> tonnes of C02 displaced </div>
            <div className = 'comingSoon'> Please continue to this site on a computer, mobile site coming soon. </div>
            <div className = 'arrowContainer'>
                <HashLink exact smooth className = "arrow my-auto" to = '/#home'>
                <BsChevronCompactDown size = {40} className = 'icon'/>
                </HashLink>
            </div>
            </div>
        </div>
    );
}

export default Landing;