// SideBar.js
import React from "react";
import { FaUser } from "react-icons/fa";
import { useUser } from "@/contexts/UserContext";
import * as S from "./styles";

function generateUsername(texto) {
  return "@" + texto.replace(/\s+/g, '').toLowerCase();
}

const SideBar = () => {
  const { userData } = useUser();

  return (
    <S.SideBar>
      <S.ContainerProfile>
        <S.ContainerUser>
          <S.Icon>
            <FaUser size={25} color={"orange"} />
          </S.Icon>
        </S.ContainerUser>
        <S.InformationUser>
          {userData ? (
            <>
              <S.Name>Olá,</S.Name>
              <S.UserName>{generateUsername(userData.username)}</S.UserName>
            </>
          ) : (
            <>
              <S.Name>Loading...</S.Name>
              <S.UserName>Loading...</S.UserName>
            </>
          )}
        </S.InformationUser>
      </S.ContainerProfile>
    </S.SideBar>
  );
};

export default SideBar;
