"use client";

import { useState } from "react";

import * as S from "./styles";
import Button from "@/components/UI/Button";
import Negociar from "./Negociar";
import Carteira from "./Carteira";

const RightConteiner = () => {
  const [activeButton, setActiveButton] = useState("carteira");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <S.RightConteiner>
      <S.Controls>
        <Button
          text="Carteira"
          clicked={activeButton === "carteira"}
          onClick={() => handleButtonClick("carteira")}
        />
        <Button
          text="Negociar"
          clicked={activeButton === "negociar"}
          onClick={() => handleButtonClick("negociar")}
        />
      </S.Controls>
      {activeButton === "negociar" && <Negociar />}
      {activeButton === "carteira" && <Carteira />}
    </S.RightConteiner>
  );
};

export default RightConteiner;
