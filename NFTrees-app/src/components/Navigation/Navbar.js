import React from 'react';
import {Link, NavLink} from "react-router-dom";
import './Navbar.css'

function Navbar (props){

    function SubstringAddress () {
        // if address variable is an address, substring to save space
        if(props.account){
            if (props.account.length > 40){
                return(props.account.substring(0, 5) + "..." + props.account.substring(36, 42))
            }
            // if network is wrong display 'wrong network'
            else if (props.account == 'wrong network'){
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
            <NavLink exact className = "navbar-Brand my-auto" to = '/'> NFTrees </NavLink>
            <p className = 'spacer'/>
            <NavLink exact activeClassName = "active-navbar-Link my-auto" className = "navbar-Link my-auto" to = '/'> Home </NavLink>
            <p className = 'spacer'/>
            <NavLink exact activeClassName = "active-navbar-Link my-auto" className = "navbar-Link my-auto" to = '/plant'> Plant </NavLink>
            <p className = 'spacer'/>
            <NavLink exact activeClassName = "active-navbar-Link my-auto" className = "navbar-Link my-auto" to = '/wallet'> Wallet </NavLink>
            <p className = 'spacer'/>
            <NavLink exact activeClassName = "active-navbar-Link my-auto" className = "navbar-Link my-auto" to = '/about'> About </NavLink>
            <p className = 'spacer'/>

            {/* display user address */}
            <p className = "address my-auto"> <SubstringAddress/> </p>

        </nav>
    );
}

export default Navbar;