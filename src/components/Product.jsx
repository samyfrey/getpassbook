import React from "react";
import styled from "styled-components";
import multiple from '../img/multiple.png'
import { ButtonMain } from './styles/ButtonMain'

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    padding: 30px 20px;
    font-size: 1vw;
  }
`;

const Left = styled.div`
  width: 50%;
  @media only screen and (max-width: 700px) {
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
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

const Title = styled.span`
  font-size: 50px;
  @media only screen and (max-width: 700px) {
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



const Product = () => {
  return (
    <Container id="product">
      <Left>

        <Image src={multiple} />

      </Left>
      <Right>
        <Title>
          <b>automated</b> dashboards
          <br />
          <b>always</b> 
        </Title>
        <SubTitle>We know that repetitive work is from the past! </SubTitle>
        <Desc>
          Passbook is the leading platform for managing your client portfolio. We help our clients succeed by getting instant access to dashboards and data that communicate clearly, achieve
          marketing goals, and are easy to understand.
        </Desc>
        <Desc>
          Organizations around the world are using Passbook
        </Desc>
        <br/>
        <ButtonMain ><a href="https://github.com/samyfrey/passbook" target='_blank'
								rel='noopener noreferrer'>Learn More</a></ButtonMain>
      </Right>
    </Container>
  );
};

export default Product;
