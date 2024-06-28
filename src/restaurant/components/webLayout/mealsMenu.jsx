import React, { useState } from 'react';
import Cart from '../webLayout/cart';
import '../webLayout/Styles/mealsMenu.css';

const mealsData = {
    mains: [
        {
            id: "m1",
            name: "Chicken Marsala",
            description: "Boneless chicken breast sauteed with mushrooms and finished in a marsala and cream reduction.",
            price: 22.99,
            image: "https://www.yourhomemadehealthy.com/wp-content/uploads/2023/04/Featured-Chicken-Marsala-Fettuccine.jpg"
        },
        {
            id: "m2",
            name: "The Caesar",
            description: "Crisp romaine lettuce tossed with our homemade Caesar dressing, croutons, and shredded parmesan cheese.",
            price: 16.5,
            image: "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg"
        },
        {
            id: "m3",
            name: "BB's Tenderloin",
            description: "Tenderloin tips, sauteed with bacon and mushrooms and finished with a bourbon-BBQ sauce.",
            price: 12.99,
            image: "https://prospermeats.com/cdn/shop/products/FiletMignonCooked_ce5a68c1-65bb-45b0-aacf-8b2acb7cf888_2048x.png?v=1603808960"
        },
        {
            id: "m4",
            name: "Surf & Turf",
            description: "A grilled, queen-cut ribeye served with shrimp and scallop alfredo.",
            price: 18.99,
            image: "https://natashaskitchen.com/wp-content/uploads/2022/02/Surf-and-Turf-Steak-and-Shrimp-SQ.jpg"
        },
        {
            id: "m5",
            name: "Creamy Sage",
            description: "Chicken breast sauteed with fresh sage and prosciutto. Served atop creamy asiago linguini.",
            price: 18.99,
            image: "https://img.delicious.com.au/QuI2vrr7/del/2022/02/chicken-with-creamy-mustard-sage-sauce-163391-2.jpg"
        },
        {
            id: "m6",
            name: "From the Sea",
            description: "Fresh haddock, gulf shrimp, and sea scallops dipped in beer batter and fried to a golden brown.",
            price: 18.99,
            image: "https://www.triedandtruerecipe.com/wp-content/uploads/2021/01/Simple-Shrimp-and-Bay-Scallops-Recipe_Hero.jpg"
        },
    ],
    sides: [
        {
            id: "s1",
            name: "French Fries",
            description: "Crispy golden fries.",
            price: 4.99,
            image: "https://thissillygirlskitchen.com/wp-content/uploads/2020/02/homemade-french-fries-8-1-500x375.jpg"
        },
        {
            id: "s2",
            name: "Onion Rings",
            description: "Battered and fried onion rings.",
            price: 5.99,
            image: "https://thecozycook.com/wp-content/uploads/2020/07/Onion-Rings-Recipe-f.jpg"
        },
        {
            id: "s3",
            name: "Chicken Nuggets",
            description: "Parmesan baked chicken nuggets",
            price: 7.99,
            image: "https://www.kitchenathoskins.com/wp-content/uploads/2020/09/air-fryer-chicken-nuggets-21-cover.jpg"
        },
    ],
    drinks: [
        {
            id: "d1",
            name: "Coca Cola",
            description: "Classic Coke.",
            price: 1.99,
            image: "https://frenchgourmand.eu/5464-large_default/coca-cola-glass-bottle-025cl.jpg"
        },
        {
            id: "d2",
            name: "Pepsi",
            description: "Refreshing Pepsi.",
            price: 1.99,
            image: "https://houseofpepsico.com/cdn/shop/products/HOP-CanGlassware-1x1-pepsi4.jpg?v=1670599204"
        },
        {
            id: "d3",
            name: "Orange Juice",
            description: "Freshly squeezed orange juice.",
            price: 3.99,
            image: "https://pacefit.org/cdn/shop/products/68562297_1ebc26f5-c386-4cee-929a-3496650cbd27.jpg?v=1596651797"
        }
    ],
};

const MealsMenu = ({ handleSelectMeal,handleMealInventory }) => {
    const [activeCategory, setActiveCategory] = useState('mains');
    handleMealInventory(mealsData);
    const categories = Object.keys(mealsData);

    return (
        <div style={containerStyle}>
            <div className="meals-menu">
                <h2>Menu</h2>
                <p>Our kitchen is rooted in an appreciation for exceptional homegrown ingredients, thoughtful-yet-simple preparations, and a passion for breathing new life into Old World recipes. Desserts borrow from treasured family recipes extending back four generations. In addition to the menus listed here, we offer a selection of daily specials.</p>

                <div className="category-tabs">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-tab ${category === activeCategory ? 'active' : ''}`}
                            onClick={() => setActiveCategory(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="meals-grid">
                    {mealsData[activeCategory].map((meal) => (
                        <div key={meal.id} className="meal-card" onClick={() => handleSelectMeal(meal)}>
                            <img src={meal.image} alt={meal.name} className="meal-image" />
                            <div className="meal-info">
                                <h3>{meal.name}</h3>
                                <p>{meal.description}</p>
                                <div className="meal-price">${meal.price.toFixed(2)}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const containerStyle = {
    textAlign: 'center',
    maxWidth: '45rem',
    width: '90%',
    margin: 'auto',
    marginTop: '1rem',
    position: 'relative',
    backgroundColor: 'white',
    color: '#333',
    borderRadius: '14px',
    padding: '1rem',
    boxShadow: '0 1px 18px 10px rgba(0, 0, 0, 0.25)'
};

export default MealsMenu;
