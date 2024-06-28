import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons';
import '../webLayout/Styles/cart.css';
import CartModal from '../webLayout/cartModal';
import LoginModal from '../webLayout/loginModal';

const TopBarWrapper = styled.div`
  background-color: #f0f0f0;
  color: #333;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: calc(100% - 250px);  
  left: 250px; 
  top: 0;
  z-index: 1000; 
`;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  margin-left: 10px;
  padding: 5px;
  border-radius: 15px;
  border: 1px solid #ccc;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: rgb(128, 203, 196);
  }
`;

const CartWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const ModalWrapper = styled.div`
  position: absolute;
  top: calc(100% + 10px); 
  right: 0;
`;

const Icon = styled(FontAwesomeIcon)`
  color: rgb(128, 203, 196);
  margin: 0 10px;
`;

const TopBar = ({ selectedMeals, totalAmount, updateSelectedMeals, setUserXD ,userXD }) => {
    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const cartTimeoutRef = useRef(null);
    const loginTimeoutRef = useRef(null);

    const handleCartMouseEnter = () => {
        clearTimeout(cartTimeoutRef.current);
        setIsCartModalOpen(true);
    };

    const handleCartMouseLeave = () => {
        cartTimeoutRef.current = setTimeout(() => {
            setIsCartModalOpen(false);
        }, 300);
    };

    const handleLoginMouseEnter = () => {
        clearTimeout(loginTimeoutRef.current);
        setIsLoginModalOpen(true);
    };

    const handleLoginMouseLeave = () => {
        loginTimeoutRef.current = setTimeout(() => {
            setIsLoginModalOpen(false);
        }, 300);
    };

    const handleLoginSuccess = (email) => {    
        setUserXD(email.email);      
        setIsLoginModalOpen(false); // Close the login modal after successful login
    };

    return (
        <TopBarWrapper>
            <div></div>
            <CartWrapper>
            {!userXD && (
                    <div onMouseEnter={handleLoginMouseEnter} onMouseLeave={handleLoginMouseLeave}>
                        <Icon icon={faUser} size="lg" />
                        {isLoginModalOpen && (
                            <ModalWrapper onMouseEnter={handleLoginMouseEnter} onMouseLeave={handleLoginMouseLeave}>
                                <LoginModal onClose={handleLoginSuccess} handleLoginSuccess={handleLoginSuccess} />
                            </ModalWrapper>
                        )}
                    </div>
                )}
                <div onMouseEnter={handleCartMouseEnter} onMouseLeave={handleCartMouseLeave}>
                    <NavLink to="/cart" activeClassName="activeClicked">
                        <Icon icon={faShoppingBasket} size="lg" />
                    </NavLink>
                    {isCartModalOpen && (
                        <ModalWrapper onMouseEnter={handleCartMouseEnter} onMouseLeave={handleCartMouseLeave}>
                            <CartModal
                                selectedMeals={selectedMeals}
                                totalAmount={totalAmount}
                                updateSelectedMeals={updateSelectedMeals}
                            />
                        </ModalWrapper>
                    )}
                </div>
                <SearchWrapper>
                    <SearchInput type="text" placeholder="Search..." />
                </SearchWrapper>
            </CartWrapper>
        </TopBarWrapper>
    );
};

export default TopBar;
