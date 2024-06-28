import React from 'react';
import styled from 'styled-components';

const ManageProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
`;

const ProductCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 10px;
`;

const ProductImage = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const ProductName = styled.h3`
    margin: 10px 0;
`;

const ProductDescription = styled.p`
    color: #666;
`;

const ProductPrice = styled.div`
    margin-top: 10px;
    font-weight: bold;
`;

const ManageProducts = ({ mealsData }) => {
    return (
        <ManageProductsWrapper>
            {Object.keys(mealsData).map(category => (
                mealsData[category].map(meal => (
                    <ProductCard key={meal.id}>
                        <ProductImage src={meal.image} alt={meal.name} />
                        <ProductName>{meal.name}</ProductName>
                        <ProductDescription>{meal.description}</ProductDescription>
                        <ProductPrice>${meal.price.toFixed(2)}</ProductPrice>
                    </ProductCard>
                ))
            ))}
        </ManageProductsWrapper>
    );
};

export default ManageProducts;
