import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import '../webLayout/Styles/cartModal.css'; 


const CartModal = ({ selectedMeals, totalAmount, updateSelectedMeals, onClose }) => {
     // function to aggregate meals by name and sum up quantities
    // check if the meal already exists in the accumulator
    const aggregatedMeals = selectedMeals.reduce((acc, meal) => {
        if (acc[meal.name]) {
            acc[meal.name].quantity += meal.quantity; // if the meal already exists, add the quantity
        } else {
            acc[meal.name] = { ...meal }; // if the meal doesn't exist, add a new entry to the accumulator
        }
        return acc;
    }, {});

    return (
        <div className="cart-modal">
            <div className="cart-modal-header">
                <h4>Order Summary</h4>                
            </div>
            <ul>           
                {Object.values(aggregatedMeals).map((meal, index) => (
                    <li key={index}> {/* create a list item for each meal */}
                        {meal.name} - ${meal.price.toFixed(2)} x{meal.quantity}
                    </li>
                ))}
            </ul>
            <div className="cart-modal-summary">
                <div>Order value: ${totalAmount.toFixed(2)}</div>
                <div>Delivery: $5.00</div>
                <div>Total: ${(totalAmount + 5).toFixed(2)}</div>
            </div>
            <NavLink to="/cart" className="cart-modal-button" onClick={onClose}>
                Go to Cart
            </NavLink>
        </div>
    );
};

export default CartModal;