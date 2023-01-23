import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import Sphinx from '../../images/sphinex.png';
import Brew from '../../images/brew.jpg';
import Weather from '../../images/weather.png';
import First  from '../../images/first_website.png';
import Run from '../../images/run-buddy.jpeg';
import Globo from '../../images/globo_gains.png';


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
                    <Card.Img variant="top" src={Globo} alt="Globo Gains image"/>
                    <Card.Body>
                        <Card.Title>Globo Gains</Card.Title>
                        <Button variant="primary" as="a" target="_blank" className="m-1" href="https://globogains.herokuapp.com/">View App</Button>
                        <Button variant="primary" as="a" target="_blank" className="m-1" href="https://github.com/palminski/perfidious-gains-goblins.git">View Repo</Button>
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
                    <Card.Img variant="top" src={First} />
                    <Card.Body>
                        <Card.Title>First Website</Card.Title>
                        <Button variant="primary" as="a" target="_blank" className="m-1" href="">No URL</Button>
                        <Button variant="primary" as="a" target="_blank" className="m-1" href="https://github.com/deand925/First_Website.git">View Repo</Button>
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
                    <Card.Img variant="top" src={Run} alt="Run-Buddy app image"/>
                    <Card.Body>
                        <Card.Title>Run Buddy</Card.Title>
                        <Button variant="primary" as="a" target="_blank" className="m-1" href="https://deand925.github.io/Professional_Portfolio/">View URL</Button>
                        <Button variant="primary" as="a" target="_blank" className="m-1" href="https://github.com/deand925/Professional_Portfolio.git">View Repo</Button>
                    </Card.Body>
                </Card>
            </Container >
        </div>
    );
}
