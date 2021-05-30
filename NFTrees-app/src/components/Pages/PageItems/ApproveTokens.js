import React from 'react';
import './ApproveTokens.css';

function ApproveTokens (props){
    const handleApprove = async () => {
        if(props.isConnected){
            props.approveTokens(props.total);
        }
        else {
            alert('Connect eth account');
        }
    }

    return(
        <button className = 'approve' onClick = {handleApprove}> 
            {'Approve'}
        </button>
    );
}

export default ApproveTokens;