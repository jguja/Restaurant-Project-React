import React, { useState, createContext, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import CustomButton from './CustomButton';

const ModalContext = createContext();

export const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <ModalContext.Provider value={{ handleShow, handleClose }}>
            {children}
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

                        <Button type="submit">Reserve a table</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </ModalContext.Provider>
    );
};

export default ModalProvider;
