import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import * as S from "./styles";
import {
  Nav,
  Container,
  LogoWrapper,
  LogoImg,
  LogoTextTitle,
  LogoTextSubtitle,
  LogoTextContainer,
  ContainerProfile,
  ContainerUser,
  InformationUser,
  Name,
  UserName,  
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
        <ContainerProfile>
          <ContainerUser>
            <S.Icon width={20} height={18}>
              <FontAwesomeIcon icon={faUser} />
            </S.Icon>
          </ContainerUser>
            <InformationUser>
              <Name>Iris Costa</Name>
              <UserName>coxtairis</UserName>
            </InformationUser>
        </ContainerProfile>
      </Container>
    </S.Nav>
  );
};

export default Navbar;
