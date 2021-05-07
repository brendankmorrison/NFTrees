import React from 'react';
import './Footer.css';

function  Footer (props){

    return(
        <div className = 'footerContainer'>
            <p> Footer </p>

            <div className = 'copyrightContainer'>
                <p className = 'copyright'> copyright &#169; 2021 NFTrees </p>
            </div>
        </div>
    );
}

export default Footer;