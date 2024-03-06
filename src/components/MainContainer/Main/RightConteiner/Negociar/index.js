import React, { useState } from "react";
import * as S from "./styles";
import Button from "@/components/UI/Button";

const Negociar = () => {
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [transactionType, setTransactionType] = useState("compra");

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
            <S.InputWrapper>
              <S.Label>Quantidade:</S.Label>
              <S.Input
                placeholder="0"
                value="0"
                type="number"
                onChange={handleQuantityChange}
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
                  value="compra"
                  checked={transactionType === "compra"}
                  onChange={handleTransactionTypeChange}
                />
                <S.Label>Compra</S.Label>
              </S.RadioLabel>
              <S.RadioLabel>
                <S.RadioButton
                  type="radio"
                  name="transactionType"
                  value="venda"
                  checked={transactionType === "venda"}
                  onChange={handleTransactionTypeChange}
                />
                <S.Label>Venda</S.Label>
              </S.RadioLabel>
            </S.RadioWrapper>
          </S.InputWrapper>
        </S.FormContent>
        <Button text="Confirmar" width={"100%"} height={30} />
      </form>
    </S.Container>
  );
};

export default Negociar;
