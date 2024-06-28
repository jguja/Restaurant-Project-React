import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('https://cdn.pixabay.com/photo/2016/10/24/18/04/warsaw-1766802_1280.jpg'); 
    background-size: cover;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 800px;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white background */
    border-radius: 10px; /* zaokraglone brzegi */
`;

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 50vh; 
    overflow: hidden;
    border-bottom-left-radius: 50%; /* pó³ okr¹g */
    border-bottom-right-radius: 50%; 
    margin-bottom: 20px; 
`;

const Image = styled.img`
    width: 100%; 
    height: 100%;
    object-fit: cover;
    object-position: center bottom; 
`;

const Story = styled.p`
    font-size: 18px;
    line-height: 1.6;
    text-align: justify; 
    margin-top: 20px;
    font-family: 'Roboto', sans-serif;
    color: #333; 
`;

const AboutVarsovia = () => {
    const storyText = `History: Varsovia is an extraordinary restaurant born out of passion for Polish cuisine and culture. Our history goes deep into the roots of our country, from ancient times to the present. Our goal is to provide our guests with a unique experience by combining traditional flavors with a modern approach to cooking. Our Cuisine: In our menu, you will find a wide selection of dishes inspired by traditional Polish cuisine, using fresh, local ingredients. From pierogi to bigos, from classic meat dishes to vegan specialties - everyone will find something for themselves in Varsovia. Our Team: We are a proud team of chefs, waiters, and culinary enthusiasts who work with passion and dedication to create an unforgettable experience for our guests. Our hospitality and professionalism are unmatched.`;

    return (
        <Wrapper>
            <Container>
                <ImageWrapper>
                    <Image src="https://cdn.pixabay.com/photo/2016/10/24/18/04/warsaw-1766802_1280.jpg" alt="Varsovia Restaurant" />
                </ImageWrapper>
                <Story>{storyText}</Story>
            </Container>
        </Wrapper>
    );
};

export default AboutVarsovia;
