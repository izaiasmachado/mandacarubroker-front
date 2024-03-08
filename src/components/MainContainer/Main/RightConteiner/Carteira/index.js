"use cliente";

import React, { useState } from "react";
import * as S from "./styles";
import Button from "@/components/UI/Button";
import Balance from "@/components/BalanceGroup";
import { InputCurrency } from "@/components/UI/Input";

import { api } from "@/lib/api";

const Carteira = () => {
  const [value, setValue] = useState(1000.0);
  const [transactionType, setTransactionType] = useState("deposit");
  const [balance, setBalance] = useState(0);

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Value:", value);
    console.log("Transaction Type:", transactionType);
    const amount = value.toString().replace(",", ".");

    try {
      const response = await api.get(
        `/account/${transactionType}?amount=${amount}`
      );

      const data = response.data;
      setBalance(data.balance);
      localStorage.setItem("balance", data.balance);
    } catch (error) {
      alert("Fundos insuficientes para realizar essa operação");
    }
  };

  return (
    <S.Container>
      <Balance
        balance={
          localStorage.getItem("balance") ? localStorage.getItem("balance") : 0
        }
      />

      <form onSubmit={handleSubmit}>
        <S.FormContent>
          <S.InputGroup>
            <S.InputWrapper>
              <S.Label>Valor:</S.Label>
              <InputCurrency
                value={value}
                setValue={(value) => setValue(Number(value))}
              ></InputCurrency>
            </S.InputWrapper>
          </S.InputGroup>
          <S.InputWrapper>
            <S.Label>Tipo de Transação:</S.Label>
            <S.RadioWrapper>
              <S.RadioLabel>
                <S.RadioButton
                  type="radio"
                  name="transactionType"
                  value="deposit"
                  checked={transactionType === "deposit"}
                  onChange={handleTransactionTypeChange}
                />
                <S.Label>Depósito</S.Label>
              </S.RadioLabel>
              <S.RadioLabel>
                <S.RadioButton
                  type="radio"
                  name="transactionType"
                  value="withdraw"
                  checked={transactionType === "withdraw"}
                  onChange={handleTransactionTypeChange}
                />
                <S.Label>Saque</S.Label>
              </S.RadioLabel>
            </S.RadioWrapper>
          </S.InputWrapper>
        </S.FormContent>
        <Button
          text="Confirmar"
          width={"100%"}
          height={"30px"}
          handleClick={handleSubmit}
        />
      </form>
    </S.Container>
  );
};

export default Carteira;
