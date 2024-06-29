import React from 'react';
import * as Icon from 'react-feather';
import '../webLayout/Styles/detailsBar.css';

const DetailsBar = () => {
    return (
        <div className="details-bar-wrapper">
            <div className="text-wrapper">
                <p className="text-one">Contact Information</p>
                <p className="text-two">Fill up the form and our team will get back to you within 24 hours</p>
            </div>
            <div>
                <a className="contacts-wrapper" href="tel:+233543201893">
                    <Icon.Phone size={15} color="rgb(4, 4, 34)" />
                    <div className="contact-text">+48321321321</div>
                </a>

                <a className="contacts-wrapper" href="mailto:varsovia@contact.com">
                    <Icon.Mail size={15} color="rgb(4, 4, 34)" />
                    <div className="contact-text">varsovia@contact.com</div>
                </a>
            </div>

            <div className="socials-wrapper">
                <a className="social-icon-wrapper">
                    <Icon.Facebook color="rgb(4, 4, 34)" size={20} />
                </a>
                <a className="social-icon-wrapper">
                    <Icon.Instagram color="rgb(4, 4, 34)" size={20} />
                </a>
            </div>
        </div>
    );
};

export default DetailsBar;
