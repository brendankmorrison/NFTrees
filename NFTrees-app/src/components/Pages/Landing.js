import React from 'react';
import './Landing.css';
import { NavHashLink } from 'react-router-hash-link';
import {BsChevronCompactDown} from 'react-icons/bs';
import CountUp from 'react-countup';

function Landing (props){

    return(
        <div className = 'landingContainer' id = 'landing'>
            <div className = 'landingContent'>
            <CountUp className = 'treeCountNumber' end = {10000} duration = {2} separator = {','}/>
            <div className = 'treeCount'> tonnes of CO2 displaced </div>
            <div className = 'comingSoon'> Please continue to this site on a computer, mobile site coming soon. </div>
            <div className = 'arrowContainer'>
                <NavHashLink exact smooth className = "arrow my-auto" to = '/#home'>
                <BsChevronCompactDown size = {40} className = 'icon'/>
                </NavHashLink>
            </div>
            </div>
        </div>
    );
}

export default Landing;