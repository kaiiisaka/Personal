import React from 'react';
import {Carousel} from "react-bootstrap";
import Bo from "./pictures/Bo.jpg"
import Pop from "./pictures/Pop2.jpg"
import Dino from "./pictures/Dino.jpg"
import classes from "./slider.module.css";

const Slider = () => {
    return (
        <Carousel className={classes.homeSlider}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src = {Pop}
                    alt = "Popheadz here"
                />
                <Carousel.Caption>
                    <h3 style={{'color': 'black'}}>Popheadz</h3>
                    <p style={{'color': 'black'}}>My fav project</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src = {Dino}
                    alt = "Dino here"
                />
                <Carousel.Caption>
                    <h3>Claynosaurs</h3>
                    <p>Might will imbalance collection</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src = {Bo}
                    alt = "Bo here"
                />
                <Carousel.Caption>
                    <h3>ᏰᎧᎶᎧᏂ'Ꮥ</h3>
                    <p style={{'color': 'black'}}>Just cool art</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;