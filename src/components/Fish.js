import { useEffect, useState } from "react";
import { memo } from "react";

// A fish component with a relevant gif passed as background image.
const Fish = (props) => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const [angle, setAngle] = useState(0);
    const [swimming, setSwimming] = useState(false);

    // Animate random swimming patterns.
    const swim = () => {


        // Set initial random position for fish.
        if (!swimming) {
            setSwimming(true);
            setTimeout(() => {
                const target = document.getElementById(props.fishID);
                const fishBox = document.getElementById(props.box);
                let randX = Math.round(Math.random() * fishBox.offsetWidth - target.offsetWidth);
                let randY = Math.round(Math.random() * fishBox.offsetHeight - target.offsetHeight);

                if (randX < 0) randX = 0;
                if (randY < 0) randY = 0;

                setAngle(calculateAngle(Math.abs(x - randX), Math.abs(y - randY), randX, randY));

                setX(randX);
                setY(randY);
            }, 0)
        }

        setTimeout(() => {
            const target = document.getElementById(props.fishID);
            const fishBox = document.getElementById(props.box);

            let randX = Math.round(Math.random() * fishBox.offsetWidth - target.offsetWidth);
            let randY = Math.round(Math.random() * fishBox.offsetHeight - target.offsetHeight);

            if (randX < 0) randX = 0;
            if (randY < 0) randY = 0;

            setAngle(calculateAngle(Math.abs(x - randX), Math.abs(y - randY), randX, randY));


            setX(randX);
            setY(randY);

        }, (Math.random() * 6000) + 2000);
    }

    // useEffect(() => {
    //     if (props.fishID === 'fish1-0') {
    //         console.log(Math.round(angle));
    //     }
    // }, [angle])

    // Calculate the angle for pointing a fish towards its target.
    const calculateAngle = (sideA, sideB, newX, newY) => {

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
            style={{
                backgroundImage: `url(https://roboseb.github.io/battleship/04bdafe9c2fb62b2d62d.png)`,
                left: x, top: y,
                transform: `rotate(${angle}deg)`
            }}
            onLoad={swim()}
            id={props.fishID}
        ></div>
    )
}

export default Fish;