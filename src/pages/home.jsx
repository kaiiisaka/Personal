import React, {useEffect, useState} from 'react';
import Slider from "../components/UI/slider/slider";
import {Container} from "react-bootstrap";
import Accordion1 from "../components/UI/accordion/accordion";
import Jumbotron from "../components/UI/jumbotron/jumbotron";
import UserList from "../components/userList";
import axios from "axios";
import {useFetching} from "../components/hooks/useFetching";
import Loader from "../components/UI/loader/loader";
import PostService from "../components/API/PostService";
import styled, {keyframes} from "styled-components";
import {shake, fadeOutLeft, fadeOutRight, pulse} from "react-animations";
import scheme from '../pictures/scheme.jpeg'

const shakeAnimation = keyframes`${shake}`;
const outLeftAnimation = keyframes `${fadeOutLeft}`
const inLeftAnimation = keyframes `${fadeOutRight}`
const pulseAnimation = keyframes`${pulse}`

const PulseDiv = styled.div`
  &:hover{
    animation: 1s ${pulseAnimation};
  }
`;

const ShakeDiv = styled.div`
  &:hover{
    animation: 1s ${shakeAnimation};
  }
`;

const OutDiv = styled.div`
  &:hover{
    animation: 0.5s ${outLeftAnimation};
  }
`;

const InDiv = styled.div`
  &:hover{
    animation: 0.5s ${inLeftAnimation};
    animation-iteration-count: 1;
  }
`;

const Home = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
    getUsers();
    }, [])

    async function getUsers(){
        const usersURL = 'https://jsonplaceholder.typicode.com/users'
        const response = await axios.get(usersURL);
        setUsers(response.data);
    }

    const [fetchUsers, isUserLoading] = useFetching (async () => {
        const response = PostService.getAll();
        setUsers(response.data);
    })

    const reload = async () => {
        const usersURL = 'https://jsonplaceholder.typicode.com/users'
        const response = await axios.get(usersURL);
        setUsers(response.data);
    }

    return (
        <div>
            <h1 style={{'font-family': 'Roboto Mono'}}>Kaiiisaka's page</h1>
            <Container id='containerhome'>
                <p>
                    Hi! I'm kaiiisaka (real name - Aleksandr). I am a 4th year student at BSTU "VOENMEH"
                    in St. Petersburg and I am a junior front-end developer.
                </p>
                <p>
                    This site is my portfolio. Studying it, you will understand what I can do here and now.
                    But do not think that I am not learning anything. Even if there is no functionality here,
                    then I am only learning to implement it.
                </p>
                <Accordion1 />
            </Container>
            <Slider/>
            <Container className="content-home">
            <Jumbotron />
                <h2 style={{margin: '1rem', border: '2px solid black', borderRadius: '10px', padding: '10px'}}>Okay, crypto, what else?</h2>
                <div className='apiWrapper'>
                    <div className='users'>
                        {isUserLoading
                            ? <Loader/>
                            : <UserList users={users} title='Online users' />
                        }
                    </div>
                    <div className='tiles'>
                        <div className='tile1'>
                        <ShakeDiv>
                                <h2>Fake API</h2>
                                <p>Is it real users? No! It's just API demo.</p>
                                <p>Let's see how it works.</p>
                        </ShakeDiv>
                        </div>
                        <div className='tile2'>
                            <OutDiv>
                            <h2>Request</h2>
                            <p>My site is requesting data that is on a site jsonplaceholder.com.
                                There they are stored in a special format.
                            </p>
                            </OutDiv>
                        </div>
                        <div className='tile3'>
                            <InDiv>
                            <h2>Answer</h2>
                            <p>
                                When a site receives a request, it sends data to that site using the http protocol.
                            </p>
                            </InDiv>
                        </div>
                        <div className='tile4'>
                            <PulseDiv>
                            <h2>The picture is clearer!</h2>
                            <img src={scheme} width='100%'/>
                            </PulseDiv>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Home;