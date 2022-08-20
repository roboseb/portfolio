import { useEffect, useState } from "react";
import { memo } from "react";

// A fish component with a relevant gif passed as background image.
const Fish = (props) => {

    // Show or hide the entire info box.
    const toggleInfoBox = (info) => {
        const box = document.getElementById('siteinfobox');
        box.classList.toggle('hidden');

        const img = document.getElementById('infoimg');
        img.style.backgroundImage = `url(${require(`../images/site_images/${props.info.src}.gif`)})`

        const header = document.getElementById('header');
        header.innerText = props.info.title;

        const desc = document.getElementById('description');
        desc.innerText = props.info.desc;

        const liveSite = document.getElementById('livesitebtn').querySelector('a');
        liveSite.href = `https://roboseb.github.io/${props.info.url}`;

        // Route to the correct repo if linking to CDFCG.

        if (props.info.url === '') {
            const repo = document.getElementById('repobtn').querySelector('a');
            repo.href = `https://github.com/roboseb/Cool-Deviantart`;
        } else {
            const repo = document.getElementById('repobtn').querySelector('a');
            repo.href = `https://github.com/roboseb/${props.info.url}`;
        }
    }

    return (
        <div className="caughtfishbox"

            id={props.fishID}
            onClick={props.catchFish}
        >

            <div className="caughtfish"
                style={{
                    backgroundImage: `url(${require(`../images/site_images/${props.info.src}.png`)})`,
                }}
                onClick={() => toggleInfoBox()}
            ></div>
        </div>
    )
}

export default Fish;