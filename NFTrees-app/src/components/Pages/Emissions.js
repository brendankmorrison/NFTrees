import React from 'react';
import './Emissions.css';
import { calculateAddressEmissions } from "ethereum-emissions-calculator";

function Emissions (props){

    const handleCalculateEmissions = async () => {
        const address = props.address;
        const apiKey = "4QBBENHPDFF6FAQGF8E71NFE9RNZH1MCPW";
        const emissions = await calculateAddressEmissions({
            transactionType: "eth",
            address,
            apiKey,
        });

        console.log(emissions);
    }

    return(
        <div className = 'emissionsContainer'>
            <button onClick = {handleCalculateEmissions}> calculate emissions</button>
        </div>
    );
}

export default Emissions;
