import React from 'react';
import { Carousel } from 'react-bootstrap';
import stock from '../../../img/stock-market.jpg'
import coins from '../../../img/coins-bottles.jpg'
import graph from '../../../img/stock-market-graph.jpg'

import './Banner.css'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    const navigateToContact = () => {
        navigate('/contact')
    }
    const navigateToAbout = () => {
        navigate('/about')
    }
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={stock}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <button onClick={navigateToContact} className='carousel-btn'>Contact us</button>
                        <button onClick={navigateToAbout} className='carousel-btn '>Learn More</button>
                        {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={coins}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <button onClick={navigateToAbout} className='carousel-btn '>Learn More</button>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={graph}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <button onClick={navigateToAbout} className='carousel-btn '>Learn More</button>
                        {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;