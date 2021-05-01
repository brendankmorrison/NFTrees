import React from 'react';
import './NFTreeCard.css'

function NFTreeCard(props){

    return(
        <div className = 'card'>
            <img src= {props.image} alt="alternatetext"
            width = '400' height = '400' className = 'image rounded'></img>
        </div>
    );
}

export default NFTreeCard;