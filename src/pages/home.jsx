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
import button from "bootstrap/js/src/button";

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
                    Hi! I'm kaiiisaka (real name - Aleksandr). I am a 4th year student at BSTU "VOENMEH" in St. Petersburg and I am a junior front-end developer.
                </p>
                <p>
                    This site is my portfolio. Studying it, you will understand what I can do here and now. But do not think that I am not learning anything. Even if there is no functionality here, then I am only learning to implement it.
                </p>
                <Accordion1 />
            </Container>
            <Slider/>
            <Container className="content-home">
            <Jumbotron />
                {isUserLoading
                    ? <Loader/>
                    : <UserList users={users} title='Online users' />
                }
            </Container>
        </div>
    );
};

export default Home;