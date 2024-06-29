import React from 'react';
import DetailsBar from '../webLayout/detailsBar';
import InputSide from '../webLayout/inputSide';
import '../webLayout/Styles/formPage.css';

const FormPage = () => {
    return (
        <div className="page-wrapper">
            <div className="page-heading-wrapper">
                <b className="text-one">Contact</b>
                <p className="text-two">We appreciate your inquiry, and someone from our team will respond shortly.</p>
            </div>
            <div className="form-container">
                <DetailsBar />
                <InputSide />
            </div>
        </div>
    );
};

export default FormPage;
