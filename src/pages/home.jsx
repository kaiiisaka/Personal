import React from 'react';
import Slider from "../components/UI/slider/slider";
import {Container} from "react-bootstrap";
import Accordion1 from "../components/UI/accordion/accordion";

const Home = () => {
    return (
        <div>
            <h1 style={{'font-family': 'Roboto Mono'}}>Kaiiisaka's page</h1>
            <Container id='containerhome'>
                <p>
                    Hi! I'm kaiiisaka (real name - Aleksandr). I am a 4th year student at BSTU "VOENMEH" in St. Petersburg and I am a junior front-end developer.
                </p>
                <p>
                    This site is my portfolio. Studying it, you will understand what I can do here and now. But do not think that I am not learning anything. Even if there is no functionality here, then I am only learning to implement it.
                </p>
                <Accordion1 />
            </Container>

            <Slider/>
        </div>
    );
};

export default Home;