import React, { useState } from "react";
import * as S from "./styles";
import Button from "@/components/UI/Button";
import Balance from "@/components/BalanceGroup";

const Carteira = () => {
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [transactionType, setTransactionType] = useState("deposito");

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Value:", value);
    console.log("Quantity:", quantity);
    console.log("Transaction Type:", transactionType);
  };

  return (
    <S.Container>
      <Balance />
      <form onSubmit={handleSubmit}>
        <S.FormContent>
          <S.InputGroup>
            <S.InputWrapper>
              <S.Label>Valor:</S.Label>
              <S.Input
                placeholder="R$: 0,00"
                type="text"
                value={value}
                onChange={handleValueChange}
              />
            </S.InputWrapper>
          </S.InputGroup>
          <S.InputWrapper>
            <S.Label>Tipo de Transação:</S.Label>
            <S.RadioWrapper>
              <S.RadioLabel>
                <S.RadioButton
                  type="radio"
                  name="transactionType"
                  value="deposito"
                  checked={transactionType === "deposito"}
                  onChange={handleTransactionTypeChange}
                />
                <S.Label>Depósito</S.Label>
              </S.RadioLabel>
              <S.RadioLabel>
                <S.RadioButton
                  type="radio"
                  name="transactionType"
                  value="saque"
                  checked={transactionType === "saque"}
                  onChange={handleTransactionTypeChange}
                />
                <S.Label>Saque</S.Label>
              </S.RadioLabel>
            </S.RadioWrapper>
          </S.InputWrapper>
        </S.FormContent>
        <Button text="Confirmar" width={"100%"} height={"30px"} clicked={false} />
      </form>
    </S.Container>
  );
};

export default Carteira;
