import React from "react";
import game from '../projects/snake/game.js'
import styled from "styled-components";

const SnakeWrapper  = styled.div`
  width: 100%;
  min-height: 96vh;
  padding: 2rem;
  background: black;
`

const Snake = () => {
    return(
        <SnakeWrapper id="snake">
            <h1 style={{"color":"lime"," margin-bottom": "2.5rem"}}>Snake game</h1>
            <canvas style={{"border": "3px solid lime"}} id ="board"></canvas>
            <script src={game}></script>
        </SnakeWrapper>
    );
};
export default Snake