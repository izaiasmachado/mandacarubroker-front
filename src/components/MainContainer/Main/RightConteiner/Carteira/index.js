"use client";

import React, { useState } from "react";
import { useBalance } from "@/contexts/BalanceContext";

import * as S from "./styles";
import Button from "@/components/UI/Button";
import Balance from "@/components/BalanceGroup";
import { InputCurrency } from "@/components/UI/Input";

import { api } from "@/lib/api";

const Carteira = () => {
  const [value, setValue] = useState(1000.0);
  const [transactionType, setTransactionType] = useState("deposit");
  const { balance, saveBalance } = useBalance();

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const amountToNumber = (amount) => {
    if (!amount) return 0;
    if (typeof amount === "number") return amount;
    return parseFloat(amount.replace(",", "."));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const amount = amountToNumber(value);

    try {
      const response = await api.get(
        `/account/${transactionType}?amount=${amount}`
      );

      const data = response.data;
      saveBalance(data.balance);
    } catch (error) {
      console.error(error);
    }
  };

  const amountNumber = amountToNumber(value);
  const isButtonDisabled =
    amountNumber <= 0 ||
    (transactionType === "withdraw" && amountNumber > balance) ||
    (transactionType === "deposit" && amountNumber >= 1000000000);

  return (
    <S.Container>
      <Balance />

      <form onSubmit={handleSubmit}>
        <S.FormContent>
          <S.InputGroup>
            <S.InputWrapper>
              <S.Label>Valor:</S.Label>
              <InputCurrency value={value} setValue={setValue}></InputCurrency>
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
          disabled={isButtonDisabled}
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
