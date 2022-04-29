import React, { useState } from "react";
import styled from "styled-components";
// import How from "../img/how.png";
import MiniCard from "./MiniCard";
// import Play from "../img/play.png";
import { ButtonMain } from './styles/ButtonMain'
import searchFeature from '../img/search-feature.gif'
import newsFeature from '../img/news-feature.gif'
import budgetFeature from '../img/budget-feature.gif'
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

const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 100%;
  margin-left: 100px;
`;

const Video = styled.video`
  display: ${(props) => !props.open && "none"};
  height: 300px;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 480px) {
    width: 100%;
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


const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  right: 5px;
  top: 30%;
`;

const Features = () => {
  const [open, setOpen] = useState(false);
  const smallScreen = window.screen.width <= 480 ? true : false;
  return (
    <Container id="features">
      <Left>
        {/* <Image open={open} src={How} /> */}
        {/* <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://recordit.co/v3ndC4HCHg"
        /> */}
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

          <ButtonMain onClick={() => setOpen(true)}>
            {/* <Icon src={Play} /> */}
            How it works
          </ButtonMain>
          </CardContainer>
        </Wrapper>
      </Right>
      {smallScreen && open && (
        <Modal>
          <Video
            open={open}
            autoPlay
            loop
            controls
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
          />
          <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
        </Modal>
      )}
    </Container>
  );
};

export default Features;
