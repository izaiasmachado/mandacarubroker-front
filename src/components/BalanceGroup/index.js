"use client";

import { useState } from "react";
import { useBalance } from "@/contexts/BalanceContext";
import { useUser } from "@/contexts/UserContext";

import { FaWallet, FaEye, FaEyeSlash } from "react-icons/fa6";
import * as S from "./styles";

const Balance = () => {
  const [showPassword, setShowPassword] = useState(true);
  const { balance } = useBalance();
  const { isLoading } = useUser();

  const balanceToLocalePtBr = (b) => {
    return Number(b).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const balanceString = isLoading ? "..." : balanceToLocalePtBr(balance);

  return (
    <S.Balance>
      <S.BalanceRightcontent>
        <FaWallet size={25} color={"#fff"} />
        <S.Currency>
          <h3>Saldo</h3>
          <span>{showPassword ? balanceString : <hr></hr>}</span>
        </S.Currency>
        <S.Icon onClick={togglePasswordVisibility}>
          {showPassword ? (
            <FaEye size={15} color={"#fff"} />
          ) : (
            <FaEyeSlash
              size={15}
              color={"#fff"}
              style={{ cursor: "pointer" }}
            />
          )}
        </S.Icon>
      </S.BalanceRightcontent>
    </S.Balance>
  );
};

export default Balance;
