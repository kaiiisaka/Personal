import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Accordion1 = () => {
    return (
        <Accordion>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Who I am</Accordion.Header>
                <Accordion.Body>
                    As I said, I am a fourth-year student at BSTU VOENMEH.
                    My specialty is radio engineering. Although this is not programming,
                    I started learning to write code in my first year. Back then I was
                    programming  in C and C++. Since then, I have used these languages
                    only once, practicing at  the enterprise as a tester. At one point,
                    I realized that I was more interested in programming web applications
                    for general access than narrowly focused desktop ones. Since then,
                    I started learning HTML, CSS, JavaScript, and React. Now I am studying
                    hard, because I want to become a good specialist.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>My activities</Accordion.Header>
                <Accordion.Body>
                    In addition to development, I am also interested in cryptocurrencies.
                    I have little knowledge in various blockchains (analytics).
                    I have been involved in NFT for quite a long time. Below I want to
                    show what is interesting in the field of NFT (solana blockchain) now.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Accordion1;