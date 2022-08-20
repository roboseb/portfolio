import Fish from "./Fish";
import CaughtFish from "./CaughtFish";

import mikoHead1 from "../images/miko_head.png";
import mikoDress from "../images/miko_dress.png";
import mikoTorso from "../images/miko_torso.png";
import mikoArms from "../images/miko_arms.png";
import mikoArmRight from "../images/miko_arm_right.png";
import mikoArmLeft from "../images/miko_arm_left.png";

import headBase1 from "../images/head_base_1.png";
import headBase2 from "../images/head_base_2.png";
import hairBack from "../images/hair_back.png";
import hairBack1 from "../images/hair_back_1.png";
import hairBack2 from "../images/hair_back_2.png";
import bangs from "../images/hair_bangs.png";
import brows from "../images/brows.png";

import rod from "../images/rod.png";
import bucket from "../images/bucket.png";
import fishRack from "../images/fishrack.png";
import stoneTexture from "../images/stone_texture.png";

import uniqid from "uniqid";
import { useState } from "react";

const Shore = () => {

    const sources = [{ src: 'CDFCG', url: '', title: 'Cool Deviantart', desc: "This site is included for the sake of completeness. It's essentially just a collection of images masquerading as a copy of deviantart." },
    { src: 'OdinRecipes', url: 'odin-recipes', title: 'Odin Recipes', desc: "The beginning of my journey with the Odin Project. A simple site that navigates between a home page and three recipe pages." },
    { src: 'OdinLandingPage', url: 'odin-landing-page', title: 'Odin Landing Page', desc: "A site which aims to copy the reference images on the site itself. Another early Odin Project project." },
    { src: 'EtchASketch', url: 'etch-a-sketch', title: 'Etch-a-Sketch', desc: "This is essentially a grid-based drawing tool. Your two options are to reset the grid, or to generate a new grid with your choice of dimensions." },
    { src: 'RockPaperScissors', url: 'rock-paper-scissors', title: 'Rock Paper Scissors', desc: "A relatively simple version of rock paper scissors. You play as an elf who is afraid of losing. Watch her react as you either beat or lose to the computer opponent. Also included are buttons to play both animations on their own." },
    { src: 'Calculator', url: 'calculator', title: 'Calculator', desc: "A calculator. Similar to rock paper scissors, a little pumpkin guy will give reactions to your inputs, including some secret ones. A colorful banner will randomly choose a welcome message each time you load the page, and cries in pain as you click it away." },
    { src: 'SignUpForm', url: 'sign-up-form', title: 'Sign-up Form', desc: "A straightforward sign-up form that signs you up for nothing. Many customized animations and custom styling for input elements, creating a better feel. Click the little head and see what happens." },
    { src: 'AdminDashboard', url: 'admin-dashboard', title: 'Waifunet', desc: "A static mock up for a fake social media site focused on anime/manga waifus. Click on kurippi, your virtual assistant, for her tip of the day. Scrolling elements have custom styling for getting to the top or bottom, and the site also features a dark mode." },
    { src: 'TicTacToe', url: 'tic-tac-toe', title: 'Tic-Tac-Toe', desc: "It's likely you've though to yourself, 'Why doesn't tic-tac-toe have a deep lore stuffed with complicated characters and suspensful stories?' Well, wonder no more. In this version of tic-tac-toe, you must aid Isaac, an apparent android who has been cursed to play the game until he has lost. Unfortunately for him, it seems he has also been cursed to play perfectly..." },
    { src: 'Library', url: 'library', title: 'Library', desc: "An app that could theoretically track books which you've read. Includes some retro styling, and some randomly chosen cover art." },
    { src: 'RestaurantPage', url: 'restaurant-page', title: 'Restaurant Page', desc: "A fake page for a real restaurant. The home page includes a unique dynamic image grid, which expands and shrinks images as you hover around it. Also includes some of the funniest copy I've ever written, so either hire me to write for you or give me heads up that I should really stick to writing code instead of copy." },
    { src: 'ToDoList', url: 'to-do-list', title: 'To-Do List', desc: "A unique spin on the to-do list. Or it was, but after some research it may be slightly less clever than I thought. Complete tasks to earn coins, which are saved to your local machine. Save up enough coins, and you can purchase hats for loretta, your waifu. Caution: waifu satisfaction is not guaranteed with hat purchase." },
    { src: 'MobileFirst', url: 'mobile-first', title: 'Mocchan and Jake', desc: "A simple app designed initially with mobile in mind. Learn the heartwarming tale of Mocchan, a precocious little girl, and Jake, her baseball bat." },
    { src: 'WeatherApp', url: 'weather-app', title: 'Weather App', desc: "An API-connected weather app. Get current temperatures as well as current time for any location in the world, without having to tune into Josh from chemistry on the local news! Displays time with animations of a sun and moon. Also displays cloudiness and rain based on API data." },
    { src: 'JSValidate', url: 'js-validate', title: 'JS Validate', desc: "A simple validation form that uses Javascript for custom validation parameters. The background image changes based on current amount a valid inputs." },
    { src: 'HearthstoneAPI', url: 'hearthstone-api', title: 'Hearthstone Memory', desc: "A game which tests your memory of hearthstone card costs. Yes, this site looks ugly. As of writing this, this site does not use an API. It did originally, but the API went down during developement, so its data was replaced with static data." },
    { src: 'Battleship', url: 'battleship', title: 'Battleship', desc: "A game of battleship where you are accompanied by your doting shipgirls. Don't fail them, for their love may begin to dwindle. Includes some art by me and some 'borrowed' art." },
    { src: 'CVProject', url: 'cv-project', title: 'CVGenDUO', desc: "A resume building app. Enter some basic info to create a simple resume. Then, click the button labeled, 'click me' to be greeted with a modern digital resume suited for you, a king, but also an expert NFT bro and trader." },
    { src: 'MemoryCard', url: 'memory-card-real', title: 'Memory Card', desc: "An API-based game of memory. Click each card in a set of 9 once, but the cards change place between each click. Card API takes from the Modern Masters magic set." },
    { src: 'ShoppingCart', url: 'shopping-cart', title: 'laythere.ca', desc: "Remember that thing wayfair was accused of with exchanging children via expensive furniture? This is if that actually happened. Browse a handful of listings, and then add your favourites to your cart! Or, if you like, create a new listing based on a keyword, which will generate a wayfair clone page with an image taken from the upsplash API." },
    { src: 'DragonQuest', url: 'dragon-quest', title: 'Dragon Quest', desc: "In short, Where's Waldo but better. Image taken from a book called, 'Dragon's Quest' Find 95 hidden items, tracked for you in the app and aided by a customizable magnifying glass. Then upload your time and item count to the leaderboards, powered by a Firebase DB." },
    { src: 'NubeClicker', url: 'js-final-project', title: 'Nube', desc: "A mobile-focused app in which you buy and sell Bored Apes. Finally, funged tokens in the palm of your hand. Of course, these aren't 'real' apes, but isn't the feeling of 'right-click - save as' much more empowering? Play a minigame where you mine resources from space as a cyber-angel to earn coins for the store. Sign-in with google, and your account info can be tracked with Firebase." }];


    const [fishSet1, setFishSet1] = useState(['CDFCG', 'OdinRecipes', 'OdinLandingPage']);
    const [fishSet2, setFishSet2] = useState(['RestaurantPage', 'ToDoList', 'MobileFirst',]);

    const [caughtSet, setCaughtSet] = useState([]);

    // Toggle the expanded fish rack display.
    const toggleExpandedRack = () => {
        const rack = document.getElementById('fishrack');
        const shade = document.getElementById('shadebox');
        const miko = document.getElementById('mikobox');

        // Handle wind animation overriding transition animation.
        if (rack.classList.contains('noani')) {
            rack.classList.remove('expanded');
            setTimeout(() => {
                rack.classList.remove('noani');
            }, 300)
        } else {
            rack.classList.add('noani');
            setTimeout(() => {
                rack.classList.add('expanded');
            }, 0)
        }

        miko.classList.toggle('shadowed');
        shade.classList.toggle('shadowed');

    }


    const catchFish = () => {
        console.log('catching...')
    }

    return (
        <div id='shore'>
            <div id='stonepathbox'>
                <div id='stonepath' style={{ backgroundImage: `url(${stoneTexture})` }}></div>
            </div>
            <div id='mikobox'>
                <div id='fishrackshadow' style={{ backgroundImage: `url(${fishRack})` }}>
                    <div className='fishrackbox'>
                        {sources.map((item, index) => {
                            return < CaughtFish
                                key={uniqid()}
                                info={item}
                                fishID={`fish1-${index}`}
                                timer={index * 2000 + 1000}
                                box='fishbox1'
                                catchFish={catchFish}
                            />
                        })}
                    </div>
                </div>
                <div id='fishrack' style={{ backgroundImage: `url(${fishRack})` }}>
                    <button id='rackreturnbtn' onClick={toggleExpandedRack}>Touch Me</button>
                    <div className='fishrackbox'>
                        {sources.map((item, index) => {
                            return < CaughtFish
                                key={uniqid()}
                                info={item}
                                fishID={`fish1-${index}`}
                                timer={index * 2000 + 1000}
                                box='fishbox1'
                                catchFish={catchFish}
                            />
                        })}
                    </div>

                </div>


                <div id='mikoshadow'></div>
                <div id='bucketshadow'></div>
                <div id='bucket' onClick={toggleExpandedRack} style={{ backgroundImage: `url(${bucket})` }}></div>

                <div id='mikohairback1' style={{ backgroundImage: `url(${hairBack1})` }}></div>
                <div id='mikohairback2' style={{ backgroundImage: `url(${hairBack2})` }}></div>

                <div id='mikohead' style={{ backgroundImage: `url(${headBase1})` }}></div>
                <div id='mikobangs' style={{ backgroundImage: `url(${bangs})` }}></div>
                <div id='mikobrows' style={{ backgroundImage: `url(${brows})` }}></div>

                <div id='mikoarmleft' style={{ backgroundImage: `url(${mikoArmLeft})` }}></div>
                <div id='mikoarmright' style={{ backgroundImage: `url(${mikoArmRight})` }}>
                    <div id='mikorod' style={{ backgroundImage: `url(${rod})` }}></div>
                </div>
                <div id='mikotorso' style={{ backgroundImage: `url(${mikoTorso})` }}></div>

                <div id='mikodress' style={{ backgroundImage: `url(${mikoDress})` }}></div>
            </div>

            <div id='fishbox1'>
                {fishSet1.map((item, index) => {
                    return < Fish
                        key={uniqid()}
                        src={item}
                        fishID={`fish1-${index}`}
                        timer={index * 2000 + 1000}
                        box='fishbox1'
                        catchFish={catchFish}
                    />
                })}

                {/* < Fish
                    key={uniqid()}
                    src={"https://roboseb.github.io/battleship/04bdafe9c2fb62b2d62d.png"}
                    fishID={`fish1-0`}
                    timer={0 * 2000 + 1000}
                    box='fishbox1'
                /> */}

            </div>
            <div id='fishbox2'>
                {fishSet1.map((item, index) => {
                    return < Fish
                        key={uniqid()}
                        src={item}
                        fishID={`fish2-${index}`}
                        timer={index * 1000 + 1000}
                        box='fishbox2'
                    />
                })}
            </div>
            <div id='shadebox'></div>
        </div>
    )
}

export default Shore;