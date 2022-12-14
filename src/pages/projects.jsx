import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from "react-bootstrap";
import snake from '/home/alex/Storm/portfolio/src/projects/snake/snake.jpg'
import site from '../projects/site.jpg'

const Projects = () => {
    return (
        <div>
            <h1 style={{marginTop: '2rem'}}>There is my projects with any programming languages</h1>
            <Container className='projList'>
                <Row style={{height: '25rem'}}>
                    <Col>
                        <Card style={{ width: '18rem',height: '23rem', padding: '20px'}}>
                            <Card.Img variant="top" src={site} />
                            <Card.Body>
                                <Card.Title>Site from Guide</Card.Title>
                                <Card.Text>
                                    My first React experience with youtube help.
                                </Card.Text>
                                <Button variant="primary" href="https://my-deploy-228.herokuapp.com/posts">
                                    I wanna see!
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '23rem', padding: '20px'}}>
                            <Card.Img variant="top" src={snake} />
                            <Card.Body>
                                <Card.Title>Snake</Card.Title>
                                <Card.Text>
                                    It's my first game with JS!
                                </Card.Text>
                                <Button variant="primary" href="/projects/snake">
                                    Let's play!
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem', height: '23rem', padding: '20px'}}>
                            <Card.Body style={{padding: '50px'}}>
                                <Card.Title>Airport</Card.Title>
                                <Card.Text>
                                    My C++ project, but right now I can't find files for demo...
                                </Card.Text>
                                <Button variant="primary" disabled>
                                    Not yet
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Projects;