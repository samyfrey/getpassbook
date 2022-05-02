import React from "react";
import styled from "styled-components";
import LineChart from "./LineChart";
import { ButtonMain } from './styles/ButtonMain'


const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 700px) {
    flex-direction: column;

  }
`;

const Title = styled.h1`
  width: 65%;
  font-size: 60px;
  @media only screen and (max-width: 700px) {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;

  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 700px) {

  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    flex-direction: column;

  }
`;



const Contact = styled.div`
  display: flex;
  flex-direction: column;

    @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

const Phone = styled.span`
  color: #0a6ec7;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
`;
const Right = styled.div`
  width: 40%;
  color: #0a6ec7;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width:700px) {
    display: none;

  }
`;


const Intro = () => {
  return (
    <Container>
      <Left>

        <Title>all your portfolio, <br />in one place</Title>
        <Desc>
          Manage your client portfolio by getting a consolidated view of your revenue targets, outstanding loans and tracking your budget performance. All of this while staying up-to-date with news relevant to you. 
        </Desc>
        <Info>
          <ButtonMain ><a href="https://samyfrey.github.io/passbook/" target='_blank'
								rel='noopener noreferrer'>Start Now</a></ButtonMain>
          <Contact>
            <Phone><a style={{color:'#0a6ec7'}} href="https://www.linkedin.com/in/samyfrey/" target='_blank'
								rel='noopener noreferrer'>in/samyfrey</a></Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </Info>

      </Left>
      <Right>

          <LineChart/>

        </Right>
    </Container>
  );
};

export default Intro;
