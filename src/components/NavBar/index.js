// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUser } from "@fortawesome/free-solid-svg-icons";

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
            <LogoTextTitle>MANDACARU</LogoTextTitle>
            <br />
            <LogoTextSubtitle>BROKER</LogoTextSubtitle>
          </LogoTextContainer>
        </LogoWrapper>
      </Container>
    </S.Nav>
  );
};

export default Navbar;
