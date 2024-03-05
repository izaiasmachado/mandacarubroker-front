import React from "react";
import * as S from "./styles";
import {
  Nav,
  Container,
  LogoWrapper,
  LogoImg,
  LogoTextTitle,
  LogoTextSubtitle,
  LogoTextContainer,
} from "./styles";

const Navbar = () => {
  return (
    <S.Nav>
      <Container>
        <LogoWrapper>
          <LogoImg src="./img/b3-icone-white.png" alt="B3 Logo" />
          <LogoTextContainer>
            <LogoTextTitle>Mandacaru</LogoTextTitle>
            <br />
            <LogoTextSubtitle>Broker</LogoTextSubtitle>
          </LogoTextContainer>
        </LogoWrapper>
        <div id="navbar-user"></div>
      </Container>
    </S.Nav>
  );
};

export default Navbar;