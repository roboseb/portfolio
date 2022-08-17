import Garden from "./components/Garden";
import House from "./components/House";
import Shore from "./components/Shore";

import stoneTexture from "./images/stone_texture.png";


function App() {


    // Move the site's focus to the selected id's element.
    const moveFocus = (targetID) => {

        // Update the house's front panel.
        toggleHouseOpen(targetID);

        const island = document.getElementById('islandbox');

        island.classList.remove('gardenfocus', 'housefocus', 'shorefocus');
        island.classList.add(`${targetID}focus`);
    }

    // Toggle the island's zoom level.
    const toggleZoom = () => {
        const island = document.getElementById('islandbox');
        island.classList.toggle('zoomed');

        const root = document.documentElement;

        if (parseInt(root.style.getPropertyValue('--zoom')) === 1) {
            root.style.setProperty('--zoom', 2);
            toggleHouseOpen(null, 2);
        } else {
            root.style.setProperty('--zoom', 1);
            toggleHouseOpen(null, 1);
        }
    }

    //Animate the front of the house moving away.
    const toggleHouseOpen = (targetID, zoom) => {
        const root = document.documentElement;
        const islandBox = document.getElementById('islandbox');

        const houseFront = document.getElementById('housefront');
        const houseInterior = document.getElementById('houseinterior');

        const zoomLevel = root.style.getPropertyValue('--zoom');

        // Handle zooming in and out from the house.
        if (zoom === 1 && islandBox.classList.contains('housefocus')) {
            houseFront.classList.remove('open');
            houseInterior.classList.remove('open');
        } else if (zoom === 2 && islandBox.classList.contains('housefocus')) {
            houseFront.classList.add('open');
            houseInterior.classList.add('open');
        }

        // Handle changing focus to the house.
        if (zoom === undefined && !islandBox.classList.contains(`${targetID}focus`)
            && zoomLevel === '2') {
            houseFront.classList.add('open');
            houseInterior.classList.add('open');
        }

        if (zoom === undefined && targetID !== 'house' &&
            zoomLevel === '2') {
            houseFront.classList.remove('open');
            houseInterior.classList.remove('open');
        }
    }

    return (
        <div id="app">
            <div id='linksbox'>
                <ul>
                    <li><a href="https://roboseb.github.io">Cool Deviantart</a></li>
                    <li><a href="https://roboseb.github.io/odin-recipes/">Odin Recipes</a></li>
                    <li><a href="https://roboseb.github.io/odin-landing-page/">Odin Landing Page</a></li>
                    <li><a href="https://roboseb.github.io/etch-a-sketch/">Etch a Sketch</a></li>
                    <li><a href="https://roboseb.github.io/rock-paper-scissors/">Rock Paper Scissors</a></li>
                    <li><a href="https://roboseb.github.io/calculator/">Calculator</a></li>
                    <li><a href="https://roboseb.github.io/sign-up-form/">Sign-up Form</a></li>
                    <li><a href="https://roboseb.github.io/admin-dashboard/">Admin Dashboard</a></li>
                    <li><a href="https://roboseb.github.io/tic-tac-toe/">Tic-Tac-Toe</a></li>
                    <li><a href="https://roboseb.github.io/library/">Library</a></li>
                    <li><a href="https://roboseb.github.io/restaurant-page/">Restaurant-Page</a></li>
                    <li><a href="https://roboseb.github.io/to-do-list/">To-Do List</a></li>
                    <li><a href="https://roboseb.github.io/mobile-first/">Mobile First</a></li>
                    <li><a href="https://roboseb.github.io/weather-app/">Weather App</a></li>
                    <li><a href="https://roboseb.github.io/js-validate/">JS Validate</a></li>
                    <li><a href="https://roboseb.github.io/hearthstone-api/">Hearthstone API</a></li>
                    <li><a href="https://roboseb.github.io/battleship/">Battleship</a></li>
                    <li><a href="https://roboseb.github.io/cv-project/">CV Project</a></li>
                    <li><a href="https://roboseb.github.io/memory-card-real/">Memory Card</a></li>
                    <li><a href="https://roboseb.github.io/shopping-cart/">Shopping Cart</a></li>
                    <li><a href="https://roboseb.github.io/dragon-quest/">Dragon Quest</a></li>
                    <li><a href="https://roboseb.github.io/js-final-project/">JS Final Project</a></li>
                </ul>
            </div>

            <div id='nav'>
                <button onClick={toggleZoom}>Toggle Zoom</button>
                <button onClick={(e) => moveFocus('garden')}>Garden</button>
                <button onClick={(e) => moveFocus('house')}>House</button>
                <button onClick={(e) => moveFocus('shore')}>Shore</button>
            </div>

            <div id='islandbox' className='shorefocus'>
                <House />
                <Garden />

                <Shore />
                <div id='islandbase'>
                    <div id='stonepathbox'>
                        <div id='stonepath' style={{ backgroundImage: `url(${stoneTexture})` }}></div>
                    </div>

                </div>
            </div>















        </div>
    );
}

export default App;
