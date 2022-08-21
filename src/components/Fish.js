import { useEffect, useState } from "react";
import { memo } from "react";

// A fish component with a relevant gif passed as background image.
const Fish = (props) => {
    const [swimming, setSwimming] = useState(false);

    // Animate random swimming patterns.
    const swim = () => {

        // Set initial random position for fish.
        if (!swimming) {
            setSwimming(true);
            setTimeout(() => {
                assignPosition();
            }, 0);
        }
    }

    // Assign the fish a random new position, and angle it accordingly.
    const assignPosition = () => {

        const target = document.getElementById(props.fishID);
        const fishBox = document.getElementById(props.box);

        const x = parseInt(target.style.left.slice(0, -2));
        const y = parseInt(target.style.top.slice(0, -2));


        let randX = Math.round(Math.random() * fishBox.offsetWidth - target.offsetWidth);
        let randY = Math.round(Math.random() * fishBox.offsetHeight - target.offsetHeight);

        if (randX < 0) randX = 0;
        if (randY < 0) randY = 0;

        const angle = calculateAngle(Math.abs(x - randX), Math.abs(y - randY), randX, randY);

        target.style.left = `${randX}px`;
        target.style.top = `${randY}px`;

        target.style.transform = `rotate(${angle}deg)`;

        setTimeout(() => {
            assignPosition();
        }, props.timer);
    }


    // Calculate the angle for pointing a fish towards its target.
    const calculateAngle = (sideA, sideB, newX, newY) => {
        const target = document.getElementById(props.fishID);
        const x = parseInt(target.style.left.slice(0, -2));
        const y = parseInt(target.style.top.slice(0, -2));

        const foo = sideB / sideA;
        let angle = Math.atan(foo) * 180 / Math.PI;

        // Calculate the correct angle based on previous/target position.
        if (newX <= x && newY <= y) {
            angle = 270 + angle;

        } else if (newX >= x && newY <= y) {
            angle = 90 - angle;

        } else if (newX >= x && newY >= y) {
            angle = angle + 90;

        } else if (newX <= x && newY >= y) {
            angle = 270 - angle;
        }
        
        return angle;
    }

    return (
        <div className="fish"
            onLoad={swim()}
            id={props.fishID}
            onClick={props.catchFish}
        ></div>
    )
}

export default Fish;