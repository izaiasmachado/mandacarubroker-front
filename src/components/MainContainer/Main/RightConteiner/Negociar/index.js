import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import * as S from "./styles";
import Button from "@/components/UI/Button";

import { useBalance } from "@/contexts/BalanceContext";
import { useUser } from "@/contexts/UserContext";
import Balance from "@/components/BalanceGroup";

const Negociar = ({ selectedStockData }) => {
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [transactionType, setTransactionType] = useState("buy");
  const { decrementBalance, incrementBalance, balance } = useBalance();
  const { fetchPortfolio, selectedStockQuantity } = useUser();

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const buyValue = quantity * selectedStockData.price;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        `/portfolio/stock/${value}/${transactionType}`,
        {
          shares: quantity,
        }
      );

      if (transactionType === "buy") {
        decrementBalance(buyValue);
      } else {
        incrementBalance(buyValue);
      }
    } catch (error) {
      if (error.response.status === 422) {
        console.error("Você não possui saldo suficiente");
      }
    } finally {
      fetchPortfolio();
    }
  };

  console.log(selectedStockData);

  return (
    <S.Container>
      <Balance />

      <form onSubmit={handleSubmit}>
        <S.FormContent>
          <S.InputGroup>
            {selectedStockData ? (
              <>
                <S.InputWrapper>
                  <S.Label>Ação selecionada:</S.Label>
                  <S.Input
                    type="text"
                    value={selectedStockData.symbol}
                    onChange={handleValueChange}
                  />
                </S.InputWrapper>
                <S.InputWrapper>
                  <S.Label>Quantidade:</S.Label>
                  <S.Input
                    placeholder="0"
                    value={quantity}
                    type="number"
                    min={0}
                    onChange={handleQuantityChange}
                  />
                </S.InputWrapper>

                <S.InputWrapper>
                  <S.Label>Tipo de Transação:</S.Label>
                  <S.RadioWrapper>
                    <S.RadioLabel>
                      <S.RadioButton
                        type="radio"
                        name="transactionType"
                        value="buy"
                        checked={transactionType === "buy"}
                        onChange={handleTransactionTypeChange}
                      />
                      <S.Label>Compra</S.Label>
                    </S.RadioLabel>
                    <S.RadioLabel>
                      <S.RadioButton
                        type="radio"
                        name="transactionType"
                        value="sell"
                        checked={transactionType === "sell"}
                        onChange={handleTransactionTypeChange}
                      />
                      <S.Label>Venda</S.Label>
                    </S.RadioLabel>
                  </S.RadioWrapper>
                </S.InputWrapper>

                {quantity > 0 ? (
                  <>
                    <S.Resumo>
                      <span>
                        Você está{" "}
                        {transactionType == "buy" ? "comprando" : "vendendo"}{" "}
                        {(quantity * selectedStockData.price).toLocaleString(
                          "pt-BR",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}{" "}
                        em ações de {selectedStockData.companyName}
                      </span>
                    </S.Resumo>
                    <S.Confirm>Deseja confirmar essa transação?</S.Confirm>
                  </>
                ) : (
                  <S.Label>Selecione a quantidade mínima</S.Label>
                )}
              </>
            ) : (
              <S.Label>Não há ativo selecionado</S.Label>
            )}
          </S.InputGroup>
        </S.FormContent>
        <Button
          disabled={
            quantity == 0 || (transactionType == "buy" && buyValue > balance)
          }
          text="Confirmar"
          width={"100%"}
          height={"30px"}
          clicked={false}
        />
      </form>
    </S.Container>
  );
};

export default Negociar;
