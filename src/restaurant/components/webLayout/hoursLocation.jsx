import React from 'react';
import { Form, Button } from 'react-bootstrap';
import '../webLayout/Styles/hoursLocation.css';

export function HoursLocation() {
    return (
        <div className="home-container">
            <div className="top-image">
                <img src="https://img.freepik.com/premium-photo/blurred-restaurant-background-with-some-people-eating-chefs-waiters-working-generative-ai_438099-14399.jpg?w=1060" alt="Top" />
            </div>
            <div className="middle-content">
                <div className="left-content">
                    <div className="hours-location">
                        <h3>Hours & Location</h3>
                        <p>plac Powstancow Warszawy 9,<br />
                            00-039 Warszawa </p>
                        <h4>Seven Days a Week</h4>
                        <p>Monday - Wednesday, Noon - 10 PM</p>
                        <p>Thursday & Friday, Noon - 11 PM</p>
                        <p>Saturday, 11 AM - 11 PM</p>
                        <p>Sunday, 11 AM - 10 PM</p>
                    </div>
                </div>
                <div className="right-content">
                    <div className="restaurant-description">
                        <p>
                            Equal parts restaurant, wine bar, cafe, and later-evening haunt, Varsovia's sits on a charming block in plac Powstancow Warszawy 9. Guests can choose to while away in our cozy cafe, tuck in to the spirited bar, or settle in to on our sidewalk patio when the weather allows. We're a neighborhood restaurant at our core, and we always reserve room for walk-in guests.
                        </p>
                        <p>
                            We're open every day until 11 PM!
                        </p>
                        <p>
                            Monday - Friday, Noon - 11 PM
                        </p>
                        <p>
                            Saturday & Sunday, 11 AM - 11 PM
                        </p>
                        <p>
                            We're happy to continue to offer take away and delivery so guests can enjoy our food and drink in the comfort of home.
                        </p>
                    </div>
                </div>
            </div>
            <div className="bottom-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2443.4799430471144!2d21.011631220457733!3d52.23466563644976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2sjp!4v1716435746193!5m2!1spl!2sjp"
                    allowFullScreen
                    title="Google Maps"
                ></iframe>
            </div>
        </div>
    );
}
