import React from 'react';
import './Home.css';
import sample from './sample.jpeg';

function Home (props){

    return(
        <div className = 'homeContainer'>
            <div className = 'homeContent'>
                <div className = 'homeLeft'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id 
                        est laborum.
                    </p>
                    <button>Plant NFTree</button>
                    <p>1*** trees planted</p>
                </div>
                <div className = 'spacer'></div>
                <div className = 'homeRight'>
                    <img src = {sample} width = '300px'></img>
                </div>
            </div>
        </div>
    );
}

export default Home;