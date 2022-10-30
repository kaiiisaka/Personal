import React from 'react';
import {Container} from "react-bootstrap";

const About = () => {
    return (
        <div>
            <Container style={{'text-align': 'left', 'padding-left': '2rem', 'fontSize': 20}}>
                <h1>About</h1>
                <h3 >It's just for fun and learning</h3>
                <p>I'm in developing progress. This website is my training ground and portfolio at the same time. The site will develop along with me and will become much better over time.</p>
            </Container>
        </div>
    );
};

export default About;