"use client";

import { useState } from "react";
import { faWallet, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as S from "./styles";

const Balance = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Balance>
      <S.BalanceRightcontent>
        <S.Currency>
          <h3>Saldo</h3>
          <span>{showPassword ? "R$ 0,00" : <hr></hr>}</span>
        </S.Currency>
        <S.Icon width={15} height={18} onClick={togglePasswordVisibility}>
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </S.Icon>
      </S.BalanceRightcontent>
    </S.Balance>
  );
};

export default Balance;
