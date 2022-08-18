import houseFront from "../images/house_front.png";
import houseInterior from "../images/house_interior.png";
import houseRoof from "../images/house_roof.png";

import linkedin from "../images/linkedin_rug.png";
import emailArt from "../images/email_art.png";
import github from "../images/github_art.png";

const House = () => {

    // Copy sebastienapril@rocketmail.com to the clipboard.
    const copyEmail = () => {
        navigator.clipboard.writeText('sebastienapril@rocketmail.com');
    }

    return (
        <div id='house'>
            <div id='housebox'>
                <div id='houseshadow'></div>
                <div id='houseinterior' style={{ backgroundImage: `url(${houseInterior})` }}></div>

                
                <div id='emailart' className='art' style={{ backgroundImage: `url(${emailArt})` }} onClick={copyEmail}></div>
                <div id='githubart' className='art' style={{ backgroundImage: `url(${github})` }}><a href='https://github.com/roboseb' target="_blank" rel="noopener noreferrer"></a></div>
                <div id='linkedinart' className='art' style={{ backgroundImage: `url(${linkedin})` }}><a href='https://www.linkedin.com/in/sebastien-april-1ab236249/' target="_blank" rel="noopener noreferrer"></a></div>

                <div id='houseroof' style={{ backgroundImage: `url(${houseRoof})` }}></div>
                <div id='housefront' style={{ backgroundImage: `url(${houseFront})` }}></div>
            </div>
        </div>
    )
}

export default House;