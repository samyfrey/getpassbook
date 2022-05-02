import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #023e8a;
  color: lightgray;
  height: auto;
  width: 100%;
  position: absolute;
  bottom: 0;

`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;

  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    padding: 10px;
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
  color: #82ca9d;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;

  @media only screen and (max-width: 700px) {
    margin-right: 10px;
    font-size: 14px;
  }

`;
const Copyright = styled.span`
  color: #82ca9d;
  @media only screen and (max-width: 700px) {
    font-size: 14px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Created by Samy Frey</ListItem>
          <ListItem><a href="https://www.linkedin.com/in/samyfrey/" target='_blank'
								rel='noopener noreferrer'>Linkedin</a></ListItem>
          <ListItem><a href="https://github.com/samyfrey/" target='_blank'
								rel='noopener noreferrer'>Github</a></ListItem>
        </List>
        <Copyright><a href="https://samyfrey.github.io/portfolio/" target='_blank'
								rel='noopener noreferrer'>samyfrey.com</a></Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
