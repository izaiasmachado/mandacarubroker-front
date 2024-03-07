'use client'

import { api } from "@/lib/api";
import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa6";

import * as S from "./styles";

function generateUsername(texto) {
  return "@" + texto.replace(/\s+/g, '').toLowerCase();
}

const SideBar = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get("/profile/me", {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("access_token"),
          }
        });

        setUserData(response.data);
      } catch (error) {
        console.error("Erro ao fazer a requisição:", error);
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
