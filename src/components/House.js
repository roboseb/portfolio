import houseFront from "../images/house_front.png";
import houseInterior from "../images/house_interior.png";
import houseRoof from "../images/house_roof.png";

const House = () => {
    return (
        <div id='house'>
            <div id='housebox'>
                <div id='houseshadow'></div>
                <div id='houseinterior' style={{ backgroundImage: `url(${houseInterior})` }}></div>
                
                <div id='houseroof' style={{ backgroundImage: `url(${houseRoof})` }}></div>
                <div id='housefront' style={{ backgroundImage: `url(${houseFront})` }}></div>
            </div>
        </div>
    )
}

export default House;