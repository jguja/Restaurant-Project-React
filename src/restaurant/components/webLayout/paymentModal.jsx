import React, { useState } from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import { FaMoneyBillWave, FaCreditCard, FaPaypal } from 'react-icons/fa'; 

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    z-index: 1000;
`;

const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

const ModalTitle = styled.h4`
    margin: 0;
    font-size: 1.2rem;
`;

const PaymentOptions = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
`;

const PaymentOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

const PaymentOptionLabel = styled.span`
    margin-top: 5px;
`;

const ModalButton = styled.button`
    padding: 10px 20px;
    margin-right: 10px;
    background-color: ${({ disabled }) => (disabled ? '#ccc' : 'rgb(128, 203, 196)')};
    color: white;
    border: none;
    border-radius: 5px;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 0.3s;

    &:hover {
        background-color: ${({ disabled }) => (disabled ? '#ccc' : 'rgb(102, 163, 157)')};
    }
`;

const PaymentModal = ({ onClose, selectedMeals, updateSelectedMeals }) => {
    const [paymentMethod, setPaymentMethod] = useState('');
    const [paymentReceived, setPaymentReceived] = useState(false);

    const handlePayment = () => {
        if (paymentMethod) {
            setPaymentReceived(true);
        }
    };

    return (
        <ModalWrapper>
            <ModalHeader>
                <ModalTitle>Choose Payment Method</ModalTitle>
                <FiX onClick={onClose} />
            </ModalHeader>
            <PaymentOptions>
                <PaymentOption onClick={() => setPaymentMethod('cash')}>
                    <FaMoneyBillWave size={40} />
                    <PaymentOptionLabel>Cash</PaymentOptionLabel>
                </PaymentOption>
                <PaymentOption onClick={() => setPaymentMethod('creditCard')}>
                    <FaCreditCard size={40} />
                    <PaymentOptionLabel>Credit Card</PaymentOptionLabel>
                </PaymentOption>
                <PaymentOption onClick={() => setPaymentMethod('paypal')}>
                    <FaPaypal size={40} />
                    <PaymentOptionLabel>PayPal</PaymentOptionLabel>
                </PaymentOption>
            </PaymentOptions>
            {paymentReceived ? (
                <div>
                    <p>Payment Received!</p>
                    <ModalButton onClick={onClose} disabled={!paymentMethod}>
                    Close
                </ModalButton>
                </div>
            ) : (
                <div>
                <ModalButton onClick={handlePayment} disabled={!paymentMethod}>
                    Pay
                </ModalButton>
                <ModalButton onClick={onClose} disabled={!paymentMethod}>
                    Close
                </ModalButton>
            </div>
            )}
        </ModalWrapper>
    );
};

export default PaymentModal;
