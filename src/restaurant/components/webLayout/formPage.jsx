import React from 'react';
import styled from 'styled-components';
import DetailsBar from '../webLayout/detailsBar';    
import InputSide from '../webLayout/inputSide';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  background-color: white;
  padding-bottom: 50px;
`;

const PageHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const FormContainer = styled.div`
  display: flex; 
  width: 70%;
  background-color: #fff;
  padding: 5px;
  border-radius: 5px;
  height: 70vh;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const TextOne = styled.b`
  font-size: 30px;
  color: rgb(4, 4, 34);
  text-align: center;
`;

const TextTwo = styled.p`
  color: rgb(4, 4, 34);
  font-size: 15px;
  text-align: center;
`;

const FormPage = () => {
    return (
        <PageWrapper>
            <PageHeadingWrapper>
                <TextOne>Contact</TextOne>
                <TextTwo>We appreciate your inquiry, and someone from our team will respond shortly.</TextTwo>
            </PageHeadingWrapper>
            <FormContainer>
                <DetailsBar />
                <InputSide />
            </FormContainer>
        </PageWrapper>
    );
};

export default FormPage;
