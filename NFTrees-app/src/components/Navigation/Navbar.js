import React from 'react';
import {NavLink} from "react-router-dom";
import { NavHashLink } from 'react-router-hash-link';
import './Navbar.css';

function Navbar (props){

    function SubstringAddress () {
        // if address variable is an address, substring to save space
        if(props.account){
            if (props.account.length > 40){
                return(props.account.substring(0, 5) + "..." + props.account.substring(36, 42))
            }
            // if network is wrong display 'wrong network'
            else if (props.account === 'wrong network'){
                return(props.account)
            }
            else{
                return(<button onClick = {props.connectWallet} className = 'connectWallet'> connect wallet </button>)
            }
        }
        else {
            return(<button onClick = {props.connectWallet} className = 'connectWallet'> connect wallet </button>)
        }
    }

    return(
        <nav className = 'navbar'>
            {/* display navbar links */}
            <NavHashLink exact smooth className = "navbar-Brand my-auto" to = '/#landing'> NFTrees </NavHashLink>
            <p className = 'spacer'/>
            <NavHashLink exact smooth activeClassName = "active-navbar-Link my-auto" className = "navbar-Link my-auto" to = '/#home'> Home </NavHashLink>
            <p className = 'spacer'/>
            <NavHashLink exact smooth activeClassName = "active-navbar-Link my-auto" className = "navbar-Link my-auto" to = '/#plant'> Plant </NavHashLink>
            <p className = 'spacer'/>
            <NavLink exact activeClassName = "active-navbar-Link my-auto" className = "navbar-Link my-auto" to = '/wallet'> My impact </NavLink>
            <p className = 'spacer'/>
            <NavLink exact activeClassName = "active-navbar-Link my-auto" className = "navbar-Link my-auto" to = '/about'> About </NavLink>
            <p className = 'spacer'/>

            {/* display user address */}
            <p className = "address my-auto"> <SubstringAddress/> </p>

        </nav>
    );
}

export default Navbar;