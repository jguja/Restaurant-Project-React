import React, { useState } from 'react';
import '../webLayout/Styles/cart.css';
import { FiX } from 'react-icons/fi';
import PaymentModal from './paymentModal';

const CartItem = ({ meal, onRemove, onQuantityChange }) => {
    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity > 0) {
            onQuantityChange(meal.id, newQuantity);
        }
    };

    return (
        <div className="cart-item">
            <div className="item-details">
                <h4>{meal.name}</h4>
                <p>{meal.description}</p>
            </div>
            <div className="item-quantity">
                <input
                    type="number"
                    min="1"
                    value={meal.quantity}
                    onChange={handleQuantityChange}
                />
            </div>
            <div className="item-price">${(meal.price * meal.quantity).toFixed(2)}</div>
            <div className="item-remove" onClick={() => onRemove(meal.id)}>
                <FiX />
            </div>
        </div>
    );
};

const Cart = ({ selectedMeals, totalAmount, onRemove, onQuantityChange }) => {
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const openPaymentModal = () => {
        setIsPaymentModalOpen(true);
    };

    const closePaymentModal = () => {
        setIsPaymentModalOpen(false);
    };

    const clearSelectedMeals = () => {
        onRemove(selectedMeals.map(meal => meal.id)); 
    };

    return (
        <div className="cart">
            <h3 className="cart-header">Cart</h3>
            {Object.values(selectedMeals).map((meal) => (
                <CartItem
                    key={meal.id}
                    meal={meal}
                    onRemove={onRemove}
                    onQuantityChange={onQuantityChange}
                />
            ))}
            <div className="cart-summary">
                <div className="summary-item">
                    <span>Order value:</span>
                    <span>${totalAmount.toFixed(2)}</span>
                </div>
                <div className="summary-item">
                    <span>Delivery:</span>
                    <span>$5.00</span>
                </div>
                <hr />
                <div className="summary-item total">
                    <span>Total:</span>
                    <span>${(totalAmount + 5).toFixed(2)}</span>
                </div>
                <button className="cart-modal-button" onClick={openPaymentModal}>Pay</button> 
            </div>
            {/* Payment Modal */}
            {isPaymentModalOpen && (
                    <PaymentModal
                    onClose={() => {
                        closePaymentModal();
                        clearSelectedMeals(); // usuwanie dañ po zap³acie
                    }}
                    selectedMeals={selectedMeals}
                />
            )}
        </div>
    );
};

export default Cart;
