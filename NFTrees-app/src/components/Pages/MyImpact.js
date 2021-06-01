import React ,{useEffect, useState} from 'react';
import NFTreeCard from './PageItems/NFTreeCard';
import './MyImpact.css';
import sample from './art/sample1-text.jpg';
import { calculateAddressEmissions } from "ethereum-emissions-calculator";
import CountUp from 'react-countup';

function MyImpact (props){
    const [images, setImages] = useState([]);
    const [emissions, setEmissions] = useState(0);

    useEffect(() => {
        handleSearch();
        handleCalculateEmissions();
    }, [])

    const handleSearch = async () => {
        let tokenList = await props.searchAddress();
        let tokenImages= []; 
        if(tokenList.length === 0){
            // set token images to default image
            tokenImages.push(sample);
            tokenImages.push(sample);
            tokenImages.push(sample);
            tokenImages.push(sample);
            tokenImages.push(sample);
            tokenImages.push(sample);
            tokenImages.push(sample);
            tokenImages.push(sample);

        }
        else {
            for(let token = 0; token < tokenList.length; token ++){
                tokenImages.push('https://gateway.pinata.cloud/ipfs/Qmby6oC9L3nKYCdjySkZrrPSmsx4BtpQXUoQ4MUBKXWnMV');
            }
        }   
        setImages(tokenImages);
    }

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
        setEmissions(totalKg);
        console.log('done loading');
    }

    const handleCalculateOffset = async () => {

    }

    return(
        <div className = 'walletContainer'>
            <button onClick = {handleCalculateEmissions}> calculate emissions</button>
            <CountUp className = '' end = {emissions} duration = {2} separator = {','}/>
            <div className = 'title'> Your NFTrees </div>

            {/*displayNFTrees()*/}
            <div className = 'cards'>
                {images.map(image => 
                    <div className = 'imageContainer'>
                    <NFTreeCard image = {image}/>
                    <div className = 'spacer'></div>
                    </div>
                )}
            </div>
        </div>

    );
}

export default MyImpact;