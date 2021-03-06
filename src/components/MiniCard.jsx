import React from "react";
import styled from "styled-components";


const Container = styled.div`
  width: 100%;
  padding: 20px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.58);
  @media only screen and (max-width: 700px) {
    width: 200px
  }
`;

const Image = styled.img`
  width: 100%;
`;

const Text = styled.span`
  margin-top: 10px;
  text-align:center;
  @media only screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

const MiniCard = ({ source, text }) => {
  return (
    <Container>
      <Image src={source} />
      <Text>{text}</Text>
    </Container>
  );
};

export default MiniCard;
