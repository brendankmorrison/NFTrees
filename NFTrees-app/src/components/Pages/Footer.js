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
                    <div className = 'linkContainer'>
                        <p className = 'rightTitle'> Pages </p>
                        <ul className = 'links'>
                            <li className = 'listItem'> Home </li>
                            <li className = 'listItem'> Plant </li>
                            <li className = 'listItem'> Wallet </li>
                            <li className = 'listItem'> About </li>
                        </ul>
                    </div>
                    <div className = 'linkContainer'>
                        <p className = 'rightTitle'> Information </p>
                        <ul className = 'links'>
                            <li className = 'listItem'> Research</li>
                            <li className = 'listItem'> Contract </li>
                            <li className = 'listItem'> ... </li>
                        </ul>
                    </div>
                    <div className = 'linkContainer'>
                        <p className = 'rightTitle'> Other </p>
                        <ul className = 'links'>
                            <li className = 'listItem'> Team Trees </li>
                            <li className = 'listItem'> Open Sea </li>
                            <li className = 'listItem'> Contact </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className = 'copyrightContainer'>
                <p className = 'copyright'> copyright &#169; 2021 NFTrees </p>
            </div>
        </div>
    );
}

export default Footer;