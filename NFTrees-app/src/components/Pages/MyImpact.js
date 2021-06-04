import React ,{useEffect, useState} from 'react';
import NFTreeCard from './PageItems/NFTreeCard';
import './MyImpact.css';
import sample from './art/sample1-text.jpg';
import { calculateAddressEmissions } from "ethereum-emissions-calculator";
import { NavHashLink } from 'react-router-hash-link';
import {BsChevronCompactDown} from 'react-icons/bs';

function MyImpact (props){
    const [images, setImages] = useState([]);
    const [emissions, setEmissions] = useState(0);

    useEffect(() => {
        handleSearch();
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


    return(
        <div className = 'walletContainer'>
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
            <div className = "viewEmissions"> View emissions summary </div>
            <div className = 'arrowContainer'>
                <NavHashLink exact smooth className = "arrow" to = '/myimpact#emissions'>
                <BsChevronCompactDown size = {30} className = 'icon'/>
                </NavHashLink>
            </div>
        </div>

    );
}

export default MyImpact;