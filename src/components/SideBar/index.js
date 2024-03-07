'use client'

import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FaUser } from "react-icons/fa6";

function generateUsername(texto) {
  return "@" + texto.replace(/\s+/g, '').toLowerCase();
}

const SideBar = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://api.mandacarubroker.com.br/profile/me", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("access_token"),
          }
        });

        if (!response.ok) {
          throw new Error("Erro ao fazer a requisição");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

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
