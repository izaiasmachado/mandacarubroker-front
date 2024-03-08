"use client";
import { FaUser } from "react-icons/fa";
import { useUser } from "@/contexts/UserContext";

import React from "react";
import * as S from "./styles";

function generateUsername(texto) {
  return "@" + texto.replace(/\s+/g, "").toLowerCase();
}

const SideBar = () => {
  const { userData } = useUser();

  return (
    <S.SideBar>
    </S.SideBar>
  );
};

export default SideBar;
