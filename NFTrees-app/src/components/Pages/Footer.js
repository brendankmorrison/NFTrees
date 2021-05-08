import React from 'react';
import './Footer.css';
import {RiDiscordLine, RiTwitterLine, RiInstagramLine, RiGithubLine} from 'react-icons/ri';
import { IconContext } from "react-icons";

function  Footer (props){

    return(
        <div className = 'footerContainer'>
            <div className = 'footerContent'>
                <div className = 'footerLeft'>
                    <p className = 'leftTitle'>NFTrees</p>
                    <div className = 'socials'>
                        <RiDiscordLine className = 'socialLink'/>
                        <RiTwitterLine className = 'socialLink'/>
                        <RiInstagramLine className = 'socialLink'/>
                        <RiGithubLine className = 'socialLink'/>
                    </div>
                </div>

                <div className = 'footerRight'>
                    <p className = 'rightTitle'>Links</p>
                    <ul className = 'links'>
                        <li className = 'listItem'> Home </li>
                        <li className = 'listItem'> Wallet </li>
                        <li className = 'listItem'> About </li>
                        <li className = 'listItem'> Research </li>
                    </ul>
                </div>
            </div>
            <div className = 'copyrightContainer'>
                <p className = 'copyright'> copyright &#169; 2021 NFTrees </p>
            </div>
        </div>
    );
}

export default Footer;