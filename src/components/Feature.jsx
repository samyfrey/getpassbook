import React from "react";
import styled from "styled-components";
// import App from "../img/app.png";
import AnimatedShapes from "./AnimatedShapes";
import frameclient from '../img/frame_client.png'
import framedashboard from '../img/frame_dashboard.png'
import { ButtonMain } from './styles/ButtonMain'

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
    padding: 30px 20px;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 50vw;
  max-width: 80%;
  margin-left: 30px;
  margin-top: 30px;
  
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 50px;
  @media only screen and (max-width: 480px) {
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
  font-size: 24px;
  font-style: italic;
  color: #333;
  margin-top: 30px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: #777;
  margin-top: 30px;
`;

// const Button = styled.button`
//   width: 150px;
//   border: none;
//   padding: 15px 20px;
//   background-color: #4282FA;
//   color: white;
//   font-size: 20px;
//   border-radius: 20px;
//   margin-top: 20px;
//   cursor: pointer;
// `;

const Feature = () => {
  return (
    <Container id="feature">
      <Left>
        {/* <Image src={frameclient} /> */}
        {/* <Image src={frameclients} /> */}
        <Image src={framedashboard} />
          {/* <img src={frameclient} alt='frame1'></img> */}
      </Left>
      <Right>
        <Title>
          <b>automated</b> dashboards
          <br />
          <b>always</b> 
        </Title>
        <SubTitle>We know that your </SubTitle>
        <Desc>
          Passbook is the leading platform for managing your client portfolio. We help our clients succeed by getting instant access to dashboards and data that communicate clearly, achieve
          marketing goals, and are easy to understand.
        </Desc>
        <Desc>
          Organizations around the world are using Passbook
        </Desc>
        <ButtonMain ><a href="https://github.com/samyfrey/passbook" target='_blank'
								rel='noopener noreferrer'>Learn More</a></ButtonMain>
      </Right>
      {/* <AnimatedShapes/> */}
    </Container>
  );
};

export default Feature;
