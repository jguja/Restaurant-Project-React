import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './restaurant/components/menu/sidebar';
import { Home } from './restaurant/components/home';
import { Reserve } from './restaurant/components/webLayout/reserve';
import { HoursLocation } from './restaurant/components/webLayout/hoursLocation';
import TopBar from './restaurant/components/menu/topBar';
import MealsMenu from './restaurant/components/webLayout/mealsMenu';
import Cart from './restaurant/components/webLayout/cart';
import FormPage from './restaurant/components/webLayout/formPage';
import CartModal from './restaurant/components/webLayout/cartModal';
import AboutVarsovia from './restaurant/components/webLayout/about'
import NotFoundPage from './restaurant/components/webLayout/notFound'; 
import AdminHome from './restaurant/components/webLayout/admin/adminhome'; 
import './App.css';
import { FiX } from 'react-icons/fi';
//import { MenuManagement }  from './restaurant/components/webLayout/admin/menuManagement'; 

function App() {
    const [selectedMeals, setSelectedMeals] = useState([]);
    const [mealsDataSt, setmealsDataS] = useState([]);
    const [notification, setNotification] = useState(null);
    const [cartVisible, setCartVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [userXD, setUserXD] = useState(null);   
    const handleSelectMeal = (mealToAdd) => {
        const existingMealIndex = selectedMeals.findIndex(meal => meal.id === mealToAdd.id);

        if (existingMealIndex !== -1) {
            // Meal already exists, update its quantity
            const updatedMeals = [...selectedMeals];
            updatedMeals[existingMealIndex].quantity += 1;
            setSelectedMeals(updatedMeals);
        } else {
            // Meal doesn't exist, add it to the selected meals array
            setSelectedMeals(prevMeals => [...prevMeals, { ...mealToAdd, quantity: 1 }]);
        }

        setNotification(`${mealToAdd.name} added to cart!`);
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };
    const toggleCart = () => {
        setCartVisible(!cartVisible);
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    const handleRemoveMeal = (id) => {
        setSelectedMeals((prevMeals) => prevMeals.filter(meal => meal.id !== id));
    };

    const handleQuantityChange = (id, newQuantity) => {
        setSelectedMeals((prevMeals) =>
            prevMeals.map(meal =>
                meal.id === id ? { ...meal, quantity: newQuantity } : meal
            )
        );
    };

    const handleMealInventory =(mealdata) =>{
        setmealsDataS(mealdata);
    }

   
    

 

    const totalAmount = selectedMeals.reduce((acc, meal) => acc + meal.price * meal.quantity, 0);

    return (
        <div className="App" id="outer-container">
            {notification && (
                <div className="notification">
                    {notification}
                    <button className="close-notification" onClick={() => setNotification(null)}>
                        <FiX size={24} />
                    </button>
                </div>
            )}
            <TopBar toggleCart={toggleCart} 
             toggleModal={toggleModal} 
             selectedMeals={selectedMeals}
             totalAmount={totalAmount} 
             setSelectedMeals={setSelectedMeals} 
             setUserXD={setUserXD} userXD={userXD}/>
            <div style={{ display: 'flex' }}>
                <Sidebar userXD = {userXD}/>
                <div style={{ marginLeft: '260px', paddingTop: '80px', width: '100%' }}>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/Contact' element={<FormPage />} />
                        <Route path='/Reserve' element={<Reserve />} />
                        <Route path='/HoursLocation' element={<HoursLocation />} />
                        <Route path='/menu' element={<MealsMenu handleSelectMeal={handleSelectMeal} handleMealInventory={handleMealInventory} />} />
                        <Route path='/about' element={<AboutVarsovia />} />
                        <Route
                            path='/cart'
                            element={
                                <Cart
                                    selectedMeals={selectedMeals}
                                    totalAmount={totalAmount}
                                    onRemove={handleRemoveMeal}
                                    onQuantityChange={handleQuantityChange}
                                />
                            }
                        />                     
                        <Route path='*' element={<NotFoundPage />} />
                        <Route path='/admin' element={<AdminHome user={userXD} mealsData={mealsDataSt} />} />
                    </Routes>
                </div>
            </div>

            {/* Render CartModal component */}
            {cartVisible && (
                <Cart
                    selectedMeals={selectedMeals}
                    totalAmount={totalAmount}
                    onRemove={handleRemoveMeal}
                    onQuantityChange={handleQuantityChange}
                    updateSelectedMeals={setSelectedMeals}
                />
            )}
            {/* Render PaymentModal component */}
            {modalVisible && (
                <CartModal
                    selectedMeals={selectedMeals}
                    totalAmount={totalAmount}
                    updateSelectedMeals={setSelectedMeals}
                />
            )}
        </div>
    );
}

export default App;
