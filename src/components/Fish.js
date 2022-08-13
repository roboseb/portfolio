import { useState } from "react";

import NubeGif from "../images/NubeClicker.gif";

// A fish component with a relevant gif passed as background image.
const Fish = (props) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const [angle, setAngle] = useState(0);

    const [swimming, setSwimming] = useState(false);

    // Animate random swimming patterns.
    const swim = () => {

        setTimeout(() => {
            const target = document.getElementById(props.fishID);


            const fishBox = document.getElementById('fishbox1');
            let randX = Math.round(Math.random() * fishBox.offsetWidth - target.offsetWidth);
            let randY = Math.round(Math.random() * fishBox.offsetHeight - target.offsetHeight);

            if (randX < 0) randX = 0;
            if (randY < 0) randY = 0;

            setAngle(calculateAngle(Math.abs(x - randX), Math.abs(y - randY), randX, randY));

            setX(randX);
            setY(randY);

           

        }, 1000);
    }

    const calculateAngle = (sideA, sideB, newX, newY) => {

        const foo = sideB/sideA;

        console.log(sideA, sideB);


        let angle = Math.atan(foo) * 180/Math.PI;

        if (newX <= x && newY <= y) {
            console.log('up and left');

            //angle = 315;
            angle = 270 + angle;
        
        } else if (newX >= x && newY <= y) {
            //angle += 90;
            console.log('up and right');

            angle = 90 - angle;
        } else if (newX >= x && newY >= y) {
            angle = angle + 90;
            console.log('down and right')

            //angle = 135;
        } else if (newX <= x && newY >= y) {    

            // correct
            angle = 270 - angle;
            console.log('down and left');

            //angle = 225;
        } else {
            console.log('error?', x, y, sideA, sideB);
        }


        return angle;
    }

    return (
        <div className="fish"
            style={{ backgroundImage: `url(${NubeGif})`,
                    left: x, top: y,
                    transform: `rotate(${angle}deg)` }}
            onLoad={swim()}
            id={props.fishID}
        ></div>
    )
}

export default Fish;