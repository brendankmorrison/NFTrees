import React ,{useEffect, useState} from 'react';
import NFTreeCard from './PageItems/NFTreeCard';
import './Wallet.css';
import sample from './art/sample1-text.jpg';

function Wallet (props){
    const [images, setImages] = useState([]);

    useEffect(() => {
        handleSearch();
    }, [])

    const handleSearch = async () => {
        let tokenList = await props.searchAddress();
        let tokenImages= []; 
        if(tokenList.length === 0){
            // set token images to default image
            tokenImages.push(sample)

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
        </div>

    );
}

export default Wallet;