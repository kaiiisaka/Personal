import React, {useEffect, useState} from 'react';
import {Nav, Navbar, Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom"
import styled from 'styled-components'
import hh from '../navbar/hh.png'
import tg from '../navbar/tg.svg'
import gmail from '../navbar/gmail.png'
import git from '../navbar/git.png'
import axios from "axios";
import WeatherItem from "../../weatherItem";

const Styles = styled.div `
  a, .navbar-brand, .navbar-nav .nav-link{
    color: #adb1b8;
    align-content: start;
    text-decoration: none;
    &:hover{
      color: azure;
    }
  }
`

const NavBar = () => {

    const [weatherInfo, setWeatherInfo] = useState({name: '', main: {}, weather: []})

    useEffect(() => {
        getWeather();
    }, [])

    const getWeather = async () => {
        const URL = 'http://api.openweathermap.org/data/2.5/weather?id=498817&lang=ru&units=metric&appid=4378d2ffa56766ffdba00df78fbafcc6'
        const response = await axios.get(URL)
        setWeatherInfo(response.data);
    }

    return (
        <Styles>
            <Navbar collapseOnSelect expand = "lg" bg = "dark" variant = "dark">

                <Navbar.Brand href='/' style={{alignItems: 'first', marginLeft: '10px'}}>Kaiiisaka</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id = "responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to="/">Home</Link>  </Nav.Link>
                        <Nav.Link> <Link to="/projects">Projects</Link> </Nav.Link>
                        <Nav.Link> <Link to="/about">About</Link> </Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                       <Nav style={{marginRight: '10px'}}>
                           <WeatherItem weatherInfo = {weatherInfo}/>
                           <a href='https://github.com/kaiiisaka' style={{marginRight: '5px'}}>
                               <img
                                   src = {git}
                                   alt = "Github"
                                   width='40px'
                               />
                           </a>
                           <a style={{marginRight: '5px'}} href='https://spb.hh.ru/resume/230cca09ff09c31eba0039ed1f3272776d364c'>
                           <img
                               src = {hh}
                               alt = "HH"
                               width='40px'
                           />
                           </a>
                           <a href='https://t.me/akaplease' style={{marginRight: '6px'}}>
                               <img
                                   src = {tg}
                                   alt = "Telegram"
                                   width='40px'
                               />

                           </a>
                           <a href='mailto:panches2001@gmail.com' style={{paddingTop: '5px'}}>
                               <img
                                   src = {gmail}
                                   alt = "Gmail"
                                   width='40px'
                               />
                           </a>
                       </Nav>
                    </Navbar.Collapse>
                </Navbar.Collapse>

            </Navbar>
        </Styles>
    );
};

export default NavBar;