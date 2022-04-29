import React from "react";
import styled from "styled-components";
import PriceCard from "./PriceCard";

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;


const Price = () => {
  return (
    <Container id="price">
      <PriceCard price="10" type="Basic" access="One Viewer" extra="Basic Plugins"/>
      <PriceCard price="20" type="Premium" access="Team Viewer/Edit" extra="Premium Plugins"/>
      <PriceCard price="30" type="Advanced" access="Enterprise Viewer/Edit" extra="Premium Plugins"/>
    </Container>
  );
};

export default Price;
