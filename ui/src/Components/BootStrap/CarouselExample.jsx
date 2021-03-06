import React, { useState, useCallback } from 'react'
import { Carousel } from 'react-bootstrap'
import image from './img/image.jpeg'
export default function CarouselExample() {

    // const [selected, setSelected] = useState(2);
    // const handleSelect = useCallback((index) => {
    //     setSelected(index)
    // }, [])

    return (
        <div><Carousel fade
            //     defaultActiveIndex={selected}
            controls={false}
        //     onSelect={handleSelect}
        >
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={image}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel></div >
    )
}
