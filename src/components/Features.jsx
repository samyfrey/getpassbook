import React from "react";
import styled from "styled-components";
// import How from "../img/how.png";
import MiniCard from "./MiniCard";
// import Play from "../img/play.png";
import { ButtonMain } from './styles/ButtonMain'
import searchFeature from '../img/search-feature.gif'
import newsFeature from '../img/news-feature.gif'
import budgetFeature from '../img/budget-feature.gif'
import appOverview from '../img/app-overview.gif'
const Container = styled.div`
  display: flex;
  // width: 100%;
  height: 100%;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 50%;
  position: relative;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;



const Right = styled.div`
  width: 100%;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 480px) {
    padding: 20px;
    flex-direction: column;
    align-items: center;
  }
`;

const Title = styled.h1``;

const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  width: 100%;
    @media only screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;



const Features = () => {

  return (
    <Container id="features">
      <Left>
      </Left>
      <Right>
        <Wrapper>
          <Title>Everything you need to speed up your processes</Title>
          <Desc>
            Passbook has all the features you need to help you get your data quickly and track your targets easily. Plus, you have access to all the information you need thanks to our integrated NewsAPI. 
          </Desc>
          <CardContainer>
            <MiniCard source={searchFeature} text="Manage your Portfolio"/>
            <MiniCard source={budgetFeature} text="Track Budgets"/>
            <MiniCard source={newsFeature} text="Get Latest News"/>
          </CardContainer>
          <br/>
          <ButtonMain><a href="https://github.com/samyfrey/passbook" target='_blank'
								rel='noopener noreferrer'>How it works</a></ButtonMain>
        </Wrapper>
      </Right>

    </Container>
  );
};

export default Features;
