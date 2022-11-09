import React, {useState} from 'react';
import {Container} from "react-bootstrap";
import axios from "axios";
import WeatherItem from "../components/weatherItem";

const About = () => {
    const [weather, setWeather] = useState({name: 'kaka'})

    const URL = 'http://api.openweathermap.org/data/2.5/weather?id=498817&lang=ru&units=metric&appid=4378d2ffa56766ffdba00df78fbafcc6'

    const getWeather = async () => {
        const response = await axios.get(URL)
        console.log(response.data)
        setWeather(response.data);
    }

    return (
        <div>
            <Container style={{'text-align': 'left', 'padding-left': '2rem', 'fontSize': 20}}>
                <h1>About</h1>
                <h3 >It's just for fun and learning</h3>
                <p>I'm in developing progress. This website is my training ground and portfolio at the same time. The site will develop along with me and will become much better over time.</p>
            </Container>
            <WeatherItem weather = {weather}/>
            <button onClick={getWeather}> get weather</button>
        </div>
    );
};

export default About;