import React, { useState } from 'react';
import '../webLayout/Styles/loginModal.css';

const LoginModal = ({ onClose ,handleLoginSuccess}) => {
    // State for email input
    const [email, setEmail] = useState('');
    // State for password input
    const [password, setPassword] = useState('');
    // State for displaying notification message
    const [notification, setNotification] = useState('');

    // Function to handle form submission
    const handleLogin = (e) => {
        e.preventDefault();

        // Check if email and password are correct
        if (email === 'exp@pl.com' && password === '1234') {
            // Successful login        
          
            handleLoginSuccess({ email: email });
            setNotification('Successful login');
            onClose();
        } else {
            // Incorrect login credentials
            setNotification('Incorrect email or password');
            // Clear email and password fields
            setEmail('');
            setPassword('');
        }
    };

    return (
        <div className="login-modal">
            <div className="login-modal-header">
                <h4>Login</h4>
            </div>
            <form onSubmit={handleLogin}>
                <div className="login-modal-field">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="login-modal-field">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" onClick={handleLogin} className="login-modal-button">Login</button>
            </form>
            {/* Display notification message */}
            {notification && (
                <div className="notification">
                    {notification}
                    {/* Button to close notification */}
                    <button className="close-notification" onClick={() => setNotification('')}>
                        X
                    </button>
                </div>
            )}
        </div>
    );
};

export default LoginModal;



