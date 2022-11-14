import React, {useEffect, useState} from 'react';
import {Container} from "react-bootstrap";
import axios from "axios";
import WeatherItem from "../components/weatherItem";

const About = () => {


    return (
        <div style={{marginLeft: '-50px', marginTop:'2rem'}}>
            <Container style={{'text-align': 'left', 'padding-left': '2rem', 'fontSize': 20}}>
                <h1>About</h1>
                <h3 >It's just for fun and learning</h3>
                <p>I'm in developing progress. This website is my training ground and portfolio at the same time. The site will develop along with me and will become much better over time.</p>
            </Container>
        </div>
    );
};

export default About;