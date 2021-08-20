import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Navbar = ({ toggler }: any) => {
  return (
    <Nav>
      <TextDiv>
        <Link to="/" style={{ textDecoration: "none" }}>
          <TextP>Where in the world?</TextP>
        </Link>
      </TextDiv>
      <ToggleDiv>
        <ToggleInnerDiv>
          <TogglerButton onClick={toggler}>Change Theme</TogglerButton>
        </ToggleInnerDiv>
      </ToggleDiv>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: grid;
  grid-template-areas: "text toggle";
  height: 80px;
  box-shadow: ${({ theme }) => theme.colors.shadow};
  background-color: ${({ theme }) => theme.colors.body};
  align-items: center;
  padding: 0 50px;
`;
const TextDiv = styled.div`
  grid-area: text;
`;
const TextP = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  font-weight: 800;
`;
const ToggleDiv = styled.div`
  grid-area: toggle;
  width: 100%;
`;

const ToggleInnerDiv = styled.div`
  float: right;
  display: flex;
  align-items: center;
  /* width: 14%; */
`;
const TogglerButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  width: 80px;
  float: right;
  font-weight: 600;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;
