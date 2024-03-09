"use client";
import { FaUser } from "react-icons/fa";
import { useUser } from "@/contexts/UserContext";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";

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

const handleLogout = async () => {
  try {
    localStorage.removeItem("access_token");
    window.location.href = "/";
  } catch (error) {
    console.error("Erro ao fazer logout:", error);
  }
};

const Navbar = () => {
  const { userData } = useUser();

  return (
    <S.Nav>
      <Container>
        <LogoWrapper>
          <LogoImg
            src="./img/logoMandacaruBroker.webp"
            alt="Mandacaru Broker Logo"
          />
        </LogoWrapper>
        <S.ContainerProfile>
          <S.ContainerUser>
            <FaUser size={25} color={"#FFF"} />
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
          <S.iconLogout>
            <Link href="/">
              <IoLogOut size={30} color={"#FFF"} onClick={handleLogout} />
            </Link>
          </S.iconLogout>
        </S.ContainerProfile>
      </Container>
    </S.Nav>
  );
};

export default Navbar;
