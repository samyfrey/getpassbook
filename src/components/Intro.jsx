import React from "react";
import styled from "styled-components";
// import Woman from '../img/woman.png'
// import AnimatedShapes from "./AnimatedShapes";
import LineChart from "./LineChart";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const ChartContainer = styled.div`
  height: 300px;
  display: flex;
  padding: 20px;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 65%;
  font-size: 60px;
  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #4282FA;
  color: white;
  border-radius: 10px;
  font-weight: bold;
  border: none;
  letter-spacing: 2px;
  cursor: pointer;
  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: #0a6ec7;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: gray;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
  color: #0a6ec7;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
    width: 100%;
    display: flex;
    justify-content: center;
`

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>all your portfolio, <br />in one place</Title>
        <Desc>
          Manage your client portfolio by getting a consolidated view of your revenue targets, outstanding loans and tracking your budget performance. All of this while staying up-to-date with news relevant to you. 
        </Desc>
        <Info>
          <Button>START A PROJECT</Button>
          {/* <Contact>
            <Phone>info@passbook.com</Phone>
            <ContactText>For any question or concern</ContactText>
          </Contact> */}
        </Info>
        {/* <ChartContainer>
        <LineChart/>
        </ChartContainer> */}
      </Left>
      <Right><LineChart/></Right>
      {/* <AnimatedShapes/> */}
    </Container>
  );
};

export default Intro;
