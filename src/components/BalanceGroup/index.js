"use client";

import React, { useState } from "react";
import { faWallet, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../UI/Button";

import * as S from "./styles";

const Balance = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Balance>
      <S.BalanceLeftContent>
        <S.Icon width={21} height={18}>
          <FontAwesomeIcon icon={faWallet} />
        </S.Icon>
      </S.BalanceLeftContent>
      <S.BalanceRightcontent>
            <S.Currency>
            <h3>Saldo</h3>
            <span>{showPassword ? <hr></hr> : "R$ 0,00"}</span>
            </S.Currency>
            <S.Icon width={15} height={18} onClick={togglePasswordVisibility}>
            <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
            </S.Icon>
      </S.BalanceRightcontent>
    </S.Balance>
  );
};

export default Balance;
