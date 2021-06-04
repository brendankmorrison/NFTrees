import React from 'react';
import './Emissions.css';
import { calculateAddressEmissions } from "ethereum-emissions-calculator";
import CountUp from 'react-countup';


function Emissions (props){


    const handleCalculateEmissions = async () => {
        const address = props.address;
        var apiKey = '4QBBENHPDFF6FAQGF8E71NFE9RNZH1MCPW';
        var totalGas = 0;
        var totalKg = 0;
        var totalTransactions = 0;
        var typeTransaction = ['eth', 'erc20', 'erc721'];
        console.log('loading');
        for (var i = 0; i < 3; i++) {
            const emissions = await calculateAddressEmissions({
                transactionType: typeTransaction[i],
                address,
                etherscanAPIKey: apiKey,
            });
            
            totalGas += emissions['gasUsed'];
            totalKg += emissions['kgCO2'];
            totalTransactions += emissions['transactionsCount'];
        }
            console.log(totalGas);
            console.log(totalKg);
            console.log(totalTransactions);
        console.log('done loading');
    }

    const handleCalculateOffset = async () => {

    }
    
    const handleCalculateNetEmissions = async () => {


    }

    return(
        <div className = 'emissionsContainer' id = 'emissions'>
            <CountUp className = 'netEmissions' end = {-100} duration = {2}/>
            <button onClick = {handleCalculateEmissions} className = 'runEmissionsSummary'> Run emissions summary </button>
        </div>
    );
}

export default Emissions;
