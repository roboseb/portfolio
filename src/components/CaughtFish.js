import { useEffect, useState } from "react";
import { memo } from "react";

// A fish component with a relevant gif passed as background image.
const Fish = (props) => {


    return (
        <div className="caughtfish"
            style={{
                backgroundImage: `url(${props.src})`,
            }}
            id={props.fishID}
            onClick={props.catchFish}
        ></div>
    )
}

export default Fish;