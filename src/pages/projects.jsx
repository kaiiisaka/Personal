import React from 'react';
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Container, Row, Col} from "react-bootstrap";
import snake from '../components/snake/snake.jpg'

const Projects = () => {

        //<Nav.Link> <Link to="/projects/snake"></Link> </Nav.Link>

    return (
        <div>
            <h1>There is my projects with any programming languages</h1>
            <Container style={{padding: '30px'}}>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', padding: '20px'}}>
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
                </Row>
            </Container>
        </div>
    );
};

export default Projects;