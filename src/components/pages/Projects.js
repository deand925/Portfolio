import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Sphinx from '../../images/sphinex.png';
import Brew from '../../images/brew.jpg';
import Weather from '../../images/weather.png';


export default function Projects() {
    return (
        <div className="m-5">
            <div className='d-flex justify-content-center'>
                <h1 className="mb-5">Projects</h1>
            </div>
            <Container className='d-flex justify-content-evenly cards flex-wrap'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Sphinx} alt="lair of sphinx picture"/>
                    <Card.Body>
                        <Card.Title>Lair of The Sphinx</Card.Title>
                        <Button variant="primary" as="a" target="_blank" className="m-1" href="https://the-lair-of-the-sphinx.herokuapp.com/">View App</Button>
                        <Button variant="primary" as="a" target="_blank" className="m-1" href="https://github.com/Dodgemech/The-Lair-of-the-Sphinx.git">View Repo</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>Ultimate Brewmaster</Card.Title>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Brew} alt="Brewmaster image" />
                    <Card.Body>
                        <Card.Title>Ultimate Brewmaster</Card.Title>
                        <Button variant="primary" as="a" target="_blank" className="m-1" href="https://palminski.github.io/ultimate-brew-master-brewery-finder/">View App</Button>
                        <Button variant="primary" as="a" target="_blank" className="m-1" href="https://github.com/palminski/ultimate-brew-master-brewery-finder.git">View Repo</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Weather} alt="Weather app image" />
                    <Card.Body>
                        <Card.Title>Weather App</Card.Title>
                        <Button variant="primary">No URL</Button>
                        <Button variant="primary" as="a" target="_blank" className="m-1" href="https://github.com/deand925/Weather_Dashboard_Server-Side_APIs.git">View Repo</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Container >
        </div>
    );
}
