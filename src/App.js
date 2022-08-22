import Garden from "./components/Garden";
import House from "./components/House";
import Shore from "./components/Shore";

import houseIcon from "./images/house_icon.png";
import gardenIcon from "./images/garden_icon.png";
import shoreIcon from "./images/shore_icon.png";

import waterTexture from "./images/water_texture.png";
import beachTexture from "./images/beach_texture.png";

function App() {


    // Move the site's focus to the selected id's element.
    const moveFocus = (targetID) => {

        // Zoom in to the chosen location if zoomed out.
        const root = document.documentElement;
        if (parseInt(root.style.getPropertyValue('--zoom')) === 1) {
            toggleZoom();
        }

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

        const rootStyle = window.getComputedStyle(root);

        const zoomLevel = parseInt(rootStyle.getPropertyValue('--zoom'));

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
            && zoomLevel === 2) {
            houseFront.classList.add('open');
            houseInterior.classList.add('open');
        } else if (zoom === undefined && targetID !== 'house' &&
            zoomLevel === 2) {
            houseFront.classList.remove('open');
            houseInterior.classList.remove('opeconsole.log(zoom, islandBox.className)n');
        }

        

    }

    // Show or hide the entire info box.
    const toggleInfoBox = () => {
        const box = document.getElementById('siteinfobox');
        box.classList.toggle('hidden');
    }

    // Move the placement of the infobox detail text.
    const toggleDetails = () => {
        const box = document.getElementById('infotextbox');
        box.classList.toggle('hidden');
    }

    // Set the given nav button to be focused.
    const setNavFocus = (targetID) => {
        clearNavFocus();

        const buttons = document.getElementById('nav').querySelectorAll('div');
        buttons.forEach(button => {
            if (button.id === 'navtriangle' || button.id === 'navtriangle2') return;
            button.classList.add('unfocused');
        });

        const target = document.getElementById(targetID);
        target.classList.remove('unfocused');
        target.classList.add('focused');


    }

    // Remove the focused/unfocused styling from all nav buttons.
    const clearNavFocus = () => {
        const buttons = document.getElementById('nav').querySelectorAll('div');
        buttons.forEach(button => {
            if (button.id === 'navtriangle' || button.id === 'navtriangle2') return;
            button.className = '';
        });
    }

    return (
        <div id="app" style={{backgroundImage: `url(${waterTexture})`}}>
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
                <div id='navtriangle2'></div>
                <div id='navtriangle'></div>
                
                <div id='housebtn' onMouseEnter={() => setNavFocus('housebtn')} onMouseLeave={clearNavFocus} onClick={(e) => moveFocus('house')} style={{backgroundImage: `url(${houseIcon})`}}></div>
                <div id='gardenbtn' onMouseEnter={() => setNavFocus('gardenbtn')} onMouseLeave={clearNavFocus} onClick={(e) => moveFocus('garden')} style={{backgroundImage: `url(${gardenIcon})`}}></div>
                <div id='shorebtn' onMouseEnter={() => setNavFocus('shorebtn')} onMouseLeave={clearNavFocus} onClick={(e) => moveFocus('shore')} style={{backgroundImage: `url(${shoreIcon})`}}></div>

                <button onClick={toggleZoom}>Toggle Zoom</button>
            </div>

            <div id='islandbox' className='shorefocus'>
                <House />
                <Garden />

                <Shore />
                <div id='islandbase'>
                    <div id='beachbox' style={{backgroundImage: `url(${beachTexture})`}}></div>
                </div>
            </div>
            <div id='siteinfobox' className='hidden'>
                <div
                    id='infoimg'
                    onMouseEnter={toggleDetails}
                    onMouseLeave={toggleDetails}
                    style={{ backgroundImage: `url(${require(`./images/site_images/AdminDashboard.gif`)})` }}>
                </div>
                <div id='infotextbox'>
                    <div id='header'>Admin Dashboard</div>
                    <p id='description'>This project was made by and was a lot of fun and I really tried my hardest. Even though it took me longer, than expected, I think I got through it in the end. Probably the most challenging aspect was the shadows at the bottom of the text panels, as they were quite finicky, and even to this day don't work al ltaht well. Does Kurippi look too much like Miko in this portfolio?</p>
                    <div id='infobtnbox'>
                        <button id='repobtn' href=''>Github Repo
                            <a href='https://github.com/roboseb' target="_blank" rel="noopener noreferrer"></a>
                        </button>
                        <button id='livesitebtn'>Live Site
                            <a href='https://github.com/roboseb' target="_blank" rel="noopener noreferrer"></a>
                        </button>
                    </div>
                </div>
                <button id='hidebtn' onClick={toggleInfoBox}>Back</button>
            </div>
            
        </div>
    );
}

export default App;
