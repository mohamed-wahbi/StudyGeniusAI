import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import BackgroundImage1 from '../../Assets/carocelImg/t1.webp';
import BackgroundImage2 from '../../Assets/carocelImg/t2.webp';
import BackgroundImage3 from '../../Assets/carocelImg/t3.webp';
import './headerCarocel.css';

const HeaderCarousel = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <div
                    className="carousel-item-background"
                    style={{ backgroundImage: `url(${BackgroundImage1})` }}
                >
                    <h1 className='titreHreaderCarocel'>StudyGeniusIA-About</h1>
                    <Carousel.Caption>
                        <h5>Get More Information About Our Platform!</h5>
                        <Button variant="outline-success">About Infos</Button>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    className="carousel-item-background"
                    style={{ backgroundImage: `url(${BackgroundImage2})` }}
                >
                    <h1 className='titreHreaderCarocel'>StudyGeniusIA-Objectives</h1>
                    <Carousel.Caption>
                        <h5>Get More Information About Our Objectives!</h5>
                        <Button variant="outline-success">View Objectives</Button>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <div
                    className="carousel-item-background"
                    style={{ backgroundImage: `url(${BackgroundImage3})` }}
                >
                    <h1 className='titreHreaderCarocel'>StudyGeniusIA-Statistics</h1>
                    <Carousel.Caption>
                        <h5>Get More Information About Our Statistics!</h5>
                        <Button variant="outline-success">Study Statistics</Button>
                    </Carousel.Caption>
                </div>
            </Carousel.Item>
        </Carousel>
    );
};

export default HeaderCarousel;
