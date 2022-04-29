import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline #0a6ec7;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: gray;

  &:hover{
    color: #4282FA;
    cursor: pointer; 
  }
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: #82ca9d;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>getPassbook</Logo>

          <Menu>
            <MenuItem><Link to="home" spy={true} smooth={true}>Home</Link></MenuItem>
            <MenuItem><Link to="product" spy={true} smooth={true}>Product</Link></MenuItem>
            <MenuItem><Link to="feature" spy={true} smooth={true}>Features</Link></MenuItem>
            <MenuItem><Link to="price" spy={true} smooth={true}>Pricing</Link></MenuItem>
            <MenuItem><Link to="contact" spy={true} smooth={true}>Contact</Link></MenuItem>

          </Menu>
        </Left>
        <Button><Link to="contact" spy={true} smooth={true}>Request a Demo</Link></Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
