import React from 'react';
import { Form, Button } from 'react-bootstrap';

export function Contact() {
    return (
        <div className="App" id="outer-container">
            {/* <Navbar /> */}
            <div style={{ marginTop: '20px', marginLeft: '20px' }}>
                <h2>Contact</h2>
                <p className="description-text">
                    Varsovia is a relaxed neighborhood restaurant and wine bar in the heart of Warsaw.
                    We're open seven days a week until late, and we serve our full menu in the dining
                    room and bar. We appreciate your inquiry, and someone from our team will respond shortly.
                </p>
                <Form style={{ width: '-webkit-fill-available', maxWidth: '600px' }}>
                    <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} style={{ border: '1px solid #ced4da', borderRadius: '0.25rem', width: '-webkit-fill-available' }} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}
