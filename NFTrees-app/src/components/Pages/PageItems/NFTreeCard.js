import React from 'react';
import './NFTreeCard.css'

function NFTreeCard(props){

    return(
        <div className = 'card'>
            <img src= {props.image} alt="alternatetext"
            width = '300' className = 'image'></img>
        </div>
    );
}

export default NFTreeCard;