import React from 'react';
import {Link} from "react-router-dom";
import './Navbar.css'
import {RiDiscordLine, RiTwitterLine} from 'react-icons/ri';
import { IconContext } from "react-icons";

function Navbar (props){

    function substringAddress () {
        // if address variable is an address, substring to save space
        if (props.account.length > 40){
            return(props.account.substring(0, 5) + "..." + props.account.substring(36, 42))
        }
        // otherwise display 'wrong address' or 'connect eth wallet'
        else{
            return(props.account)
        }
    }


    return(
        <nav className = 'navbar'>
            {/* display navbar links */}
            <Link className = "navbar-Brand my-auto" to = '/'> NFTrees </Link>
            <p className = 'spacer'/>
            <Link className = "navbar-Link my-auto" to = '/'> Home </Link>
            <p className = 'spacer'/>
            <Link className = "navbar-Link my-auto" to = '/home'> Plant </Link>
            <p className = 'spacer'/>
            <Link className = "navbar-Link my-auto" to = '/wallet'> Wallet </Link>
            <p className = 'spacer'/>
            <Link className = "navbar-Link my-auto" to = '/about'> About </Link>
            <p className = 'spacer'/>

            {/* display user address */}
            <p className = "address my-auto"> {substringAddress()} </p>

        </nav>
    );
}

export default Navbar;