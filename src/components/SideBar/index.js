// SideBar.js
import React from "react";
import { FaUser } from "react-icons/fa";
import { useUser } from "@/contexts/UserContext";
"use client";

import React, { useEffect, useState } from "react";
import * as S from "./styles";

function generateUsername(texto) {
  return "@" + texto.replace(/\s+/g, "").toLowerCase();
}

const SideBar = () => {
  const { userData } = useUser();
  const [userData, setUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.mandacarubroker.com.br/profile/me",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("access_token"),
            },
          }
        );

        if (!response.ok) {
          window.location.href = "/";
          localStorage.removeItem("access_token");
        }

        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
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
          {isLoading ? (
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
    </S.SideBar>
  );
};

export default SideBar;
