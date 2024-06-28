import React from 'react';
import styled from 'styled-components';
import * as Icon from 'react-feather';

const DetailsBarWrapper = styled.div`
  background-color: rgb(128, 203, 196);
  border-radius: 7px;
  position: relative;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: 100px;
  @media (max-width: 768px) {
    padding-bottom: 80px;
    grid-row: 2;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextOne = styled.p`
  text-align: center;
  color: rgb(4, 4, 34);
  font-size: 18px;
  font-weight: bold;
`;

const TextTwo = styled.p`
  text-align: center;
  color: rgb(4, 4, 34);
  font-size: 12px;
  line-height: 18px;
`;

const ContactsWrapper = styled.a`
  display: flex;
  width: 200px;
  height: 10px;
  margin-top: 50px;
  cursor: pointer;
  text-decoration: none;
`;

const ContactText = styled.div`
  color: rgb(4, 4, 34);

  font-size: 15px;
  margin-left: 10px;
`;

const SocialsWrapper = styled.div`
  display: flex;
  justify-content: center;
  display: flex;
  height: 10px;
  justify-content: center;
  bottom: 30px;
  position: absolute;
  cursor: pointer;
`;

const SocialIconWrapper = styled.a`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(4, 4, 34);
  }
`;

const DetailsBar = () => {
    return (
        <DetailsBarWrapper>
            <TextWrapper>
                <TextOne>Contact Information</TextOne>
                <TextTwo>Fill up the form and our team will get back to you within 24 hours</TextTwo>
            </TextWrapper>
            <div>
                <ContactsWrapper href="tel:+233543201893">
                    <Icon.Phone size={15} color="rgb(4, 4, 34)" />
                    <ContactText>+48321321321</ContactText>
                </ContactsWrapper>

                <ContactsWrapper href="mailto:aljay3334@gmail.com">
                    <Icon.Mail size={15} color="rgb(4, 4, 34)" />
                    <ContactText>varsovia@contact.com</ContactText>
                </ContactsWrapper>
            </div>

            <SocialsWrapper>
                <SocialIconWrapper>
                    <Icon.Facebook color="rgb(4, 4, 34)" size={20} />
                </SocialIconWrapper>
                <SocialIconWrapper>
                    <Icon.Instagram color="rgb(4, 4, 34)" size={20} />
                </SocialIconWrapper>
            </SocialsWrapper>
        </DetailsBarWrapper>
    );
};

export default DetailsBar;
