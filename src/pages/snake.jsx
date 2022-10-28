import React from "react";
import game from '../components/snake/game.js'


const Snake = () => {
    return(
        <div id="snake">
            <h1 style={{"color":"lime"," margin-bottom": "2.5rem"}}>Snake game</h1>
            <canvas style={{"border": "3px solid lime"}} id ="board"></canvas>
            <script src={game}></script>
        </div>
    );
};
export default Snake