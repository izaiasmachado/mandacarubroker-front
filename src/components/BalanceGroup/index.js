"use client";

import { useState } from "react";

import { FaWallet, FaEye, FaEyeSlash } from "react-icons/fa6";
import * as S from "./styles";

const Balance = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Balance>
      <S.BalanceRightcontent>
        <FaWallet size={25} color={"#fff"} />
        <S.Currency>
          <h3>Saldo</h3>
          <span>{showPassword ? "R$ 0,00" : <hr></hr>}</span>
        </S.Currency>
        <S.Icon onClick={togglePasswordVisibility}>
          {showPassword
            ?  <FaEye size={15} color={"#fff"} />
            :  <FaEyeSlash size={15} color={"#fff"} />
          }
        </S.Icon>
      </S.BalanceRightcontent>
    </S.Balance>
  );
};

export default Balance;
