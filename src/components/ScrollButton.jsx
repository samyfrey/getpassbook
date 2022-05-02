import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex; 
  justify-content: flex-end;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;

  background-color: #82ca9d;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 20px
`;

const ScrollButton = () => {
  return (
    <Container>
        <Button>
        
        <Link to="top-scroll" spy={true} smooth={true}>TOP</Link>

        </Button>

    </Container>
  );
};

export default ScrollButton;
