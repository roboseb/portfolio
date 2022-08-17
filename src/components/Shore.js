import Fish from "./Fish";

import cDFCD from "../images/CDFCG.gif";
import recipes from "../images/OdinRecipes.gif";
import landingPage from "../images/OdinLandingPage.gif";
import etchASketch from "../images/EtchASketch.gif";
import rPS from "../images/RockPaperScissors.gif";
import calculator from "../images/Calculator.gif";
import signUp from "../images/SignUpForm.gif";
import adminDashboard from "../images/AdminDashboard.gif";
import ticTacToe from "../images/TicTacToe.gif";
import library from "../images/Library.gif";

import restaurantPage from "../images/RestaurantPage.gif";
import toDoList from "../images/ToDoList.gif";
import mobileFirst from "../images/MobileFirst.gif";
import weatherApp from "../images/WeatherApp.gif";
import jSValidate from "../images/JSValidate.gif";
import hearthstoneAPI from "../images/HearthstoneAPI.gif";
import battleship from "../images/Battleship.gif";
import cVProject from "../images/CVProject.gif";
import memoryCard from "../images/MemoryCard.gif";
import shoppingCart from "../images/ShoppingCart.gif";
import dragonQuest from "../images/DragonQuest.gif";
import nubeClicker from "../images/NubeClicker.gif";


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

import uniqid from "uniqid";

const Shore = () => {

    const sources1 = [cDFCD, recipes, landingPage, etchASketch, rPS,
        calculator, signUp, adminDashboard, ticTacToe, library];

    const sources2 = [restaurantPage, toDoList, mobileFirst, weatherApp,
        jSValidate, hearthstoneAPI, battleship, cVProject,
        memoryCard, shoppingCart, dragonQuest, nubeClicker];

    return (
        <div id='shore'>
            <div id='mikobox'>
                <div id='mikoshadow'></div>
                <div id='bucketshadow'></div>
                <div id='bucket' style={{ backgroundImage: `url(${bucket})` }}></div>

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
                {sources1.map((item, index) => {
                    return < Fish
                        key={uniqid()}
                        src={item}
                        fishID={`fish1-${index}`}
                        timer={index * 2000 + 1000}
                        box='fishbox1'
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
                {sources2.map((item, index) => {
                    return < Fish
                        key={uniqid()}
                        src={item}
                        fishID={`fish2-${index}`}
                        timer={index * 1000 + 1000}
                        box='fishbox2'
                    />
                })}
            </div>
        </div>
    )
}

export default Shore;