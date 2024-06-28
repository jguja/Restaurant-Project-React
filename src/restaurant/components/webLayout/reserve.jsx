import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { ExampleCarouselImage } from '../ExampleCarouselImage';
import '../webLayout/Styles/reserve.css';

export function Reserve() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="reserve-container" id="outer-container">
            <Carousel className="reserve-carousel">
                <Carousel.Item>
                    <ExampleCarouselImage src="https://img.freepik.com/free-photo/restaurant-setting-with-wooden-chairs-tables-beautiful-view_181624-9887.jpg?t=st=1714816867~exp=1714820467~hmac=2d26a6cbb17067768cb0c806906eaec4d1082c5c37b18d7f4c3bfaaceac737ed&w=1060" text="First slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage src="https://img.freepik.com/free-photo/drinks-glasses-new-year-eve-celebration_23-2150901946.jpg?t=st=1713539181~exp=1713542781~hmac=ff570c97b32899870d3a4ac1dc5e7736b03c845ad4aa158358509eba3137b029&w=1060" text="Second slide" />
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage src="https://img.freepik.com/free-photo/assortment-korean-traditional-dishes-ai-generated-image_511042-1651.jpg?t=st=1714817798~exp=1714821398~hmac=d7b58e092b0e88db81a7da0c615719f7ed2bed65b00c970969b8649fe28a663e&w=1060" text="Third slide" />
                </Carousel.Item>
            </Carousel>

            <h1 className="reserve-title">Reserve</h1>
            <div className="reserve-info">
                <p>We accept reservations seven days a week, up to 30 days in advance.</p>
                <p>For parties of nine or more, please email <a href="mailto:feasts@varsovia.com">feasts@varsovia.com</a>.</p>
                <p>Please note, reservations are not available for bar seats. Varsovia is a neighborhood restaurant, and we always reserve a number of seats for walk-in guests in our dining room and at our bar. When the restaurant is full, we are happy to take a name and number and let you know when a table becomes available.</p>
                <Button className="btn-custom" onClick={handleShow}>
                    Reserve Now
                </Button>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Reservations</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formDate">
                            <Form.Label>Reservation Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>

                        <Form.Group controlId="formTime">
                            <Form.Label>Reservation Time</Form.Label>
                            <Form.Control type="time" />
                        </Form.Group>

                        <Form.Group controlId="formPartySize">
                            <Form.Label>Table Size</Form.Label>
                            <Form.Control type="number" placeholder="Number of guests" min="1" max="8" />
                        </Form.Group>

                        <Button className="btn-custom" type="submit">
                            Reserve a table
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    );
}
