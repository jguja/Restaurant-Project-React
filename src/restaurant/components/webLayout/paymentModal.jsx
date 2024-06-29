import React, { useState } from 'react';
import { FiX } from 'react-icons/fi';
import { FaMoneyBillWave, FaCreditCard, FaPaypal } from 'react-icons/fa';
import '../webLayout/Styles/paymentModal.css';

const PaymentModal = ({ onClose, selectedMeals, updateSelectedMeals }) => {
    const [paymentMethod, setPaymentMethod] = useState(''); // State to hold the currently selected payment method
    const [paymentReceived, setPaymentReceived] = useState(false); // State to determine if payment has been received

    // Function to handle the payment process
    const handlePayment = () => {
        if (paymentMethod) {
            setPaymentReceived(true); // Simulate payment received
        }
    };

    return (
        <div className="modal-wrapper">
            <div className="modal-header">
                <h4 className="modal-title">Choose Payment Method</h4>
                <FiX onClick={onClose} /> {/* modal close button */}
            </div>
            <div className="payment-options">
                <div className="payment-option" onClick={() => setPaymentMethod('cash')}>
                    <FaMoneyBillWave size={40} />
                    <span className="payment-option-label">Cash</span>
                </div>
                <div className="payment-option" onClick={() => setPaymentMethod('creditCard')}>
                    <FaCreditCard size={40} />
                    <span className="payment-option-label">Credit Card</span>
                </div>
                <div className="payment-option" onClick={() => setPaymentMethod('paypal')}>
                    <FaPaypal size={40} />
                    <span className="payment-option-label">PayPal</span>
                </div>
            </div>
            {paymentReceived ? (
                <div>
                    <p>Payment Received!</p>
                    <button className="modal-button" onClick={onClose} disabled={!paymentMethod}>
                        Close
                    </button>
                </div>
            ) : (
                <div>
                    <button className="modal-button" onClick={handlePayment} disabled={!paymentMethod}>
                        Pay
                    </button>
                    <button className="modal-button" onClick={onClose} disabled={!paymentMethod}>
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default PaymentModal;
