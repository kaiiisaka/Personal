import React from 'react';
import {Carousel, Container} from "react-bootstrap";
import Bo from "./pictures/Bo.jpg"
import Pop from "./pictures/Pop2.jpg"
import Dino from "./pictures/Dino.jpg"


const Slider = () => {
    return (
        <Container style={{padding: '1rem'}}>
        <Carousel className='homeSlider' style={{'height': '500px'}}>
            <Carousel.Item style={{'height': '500px'}}>
                <a href='https://twitter.com/pop_headz'>
                    <img
                        className="d-block w-100"
                        src = {Pop}
                        alt = "Popheadz here"
                    />
                </a>
                <Carousel.Caption>
                    <h3 style={{'color': 'black'}}>Popheadz</h3>
                    <p style={{'color': 'black'}}>My fav project</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '500px'}}>
                <a href='https://twitter.com/Claynosaurz'>
                <img
                    className="d-block w-100"
                    src = {Dino}
                    alt = "Dino here"
                />
                </a>
                <Carousel.Caption>
                    <h3>Claynosaurs</h3>
                    <p>Might will imbalance collection</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': '500px'}}>
                <a href='https://twitter.com/BOGOHS_'>
                <img
                    className="d-block w-100"
                    src = {Bo}
                    alt = "Bo here"
                />
                </a>
                <Carousel.Caption>
                    <h3>ᏰᎧᎶᎧᏂ'Ꮥ</h3>
                    <p >Just cool art</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Container>
    );
};

export default Slider;