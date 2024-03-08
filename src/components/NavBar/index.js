"use client";
import { FaUser } from "react-icons/fa";
import { useUser } from "@/contexts/UserContext";

import React from "react";
import * as S from "./styles";

function generateUsername(texto) {
  return "@" + texto.replace(/\s+/g, "").toLowerCase();
}

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
  const { userData } = useUser();

  return (
    <S.Nav>
      <Container>
        <LogoWrapper>
          <LogoImg
            src="./img/logoMandacaruBroker.png"
            alt="Mandacaru Broker Logo"
          />
        </LogoWrapper>
        <S.ContainerProfile>
          <S.ContainerUser>
            <S.Icon>
              <FaUser size={25} color={"orange"} />
            </S.Icon>
          </S.ContainerUser>
          <S.InformationUser>
            {userData === null ? (
              <>
                <S.Name>Loading...</S.Name>
                <S.UserName>Loading...</S.UserName>
              </>
            ) : (
              <>
                <S.Name>Olá,</S.Name>
                <S.UserName>{generateUsername(userData.username)}</S.UserName>
              </>
            )}
          </S.InformationUser>
        </S.ContainerProfile>
      </Container>
    </S.Nav>
  );
};

// }

export default Navbar;
