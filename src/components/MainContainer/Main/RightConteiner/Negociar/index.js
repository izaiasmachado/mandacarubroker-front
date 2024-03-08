import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import * as S from "./styles";
import Button from "@/components/UI/Button";

import { useBalance } from "@/contexts/BalanceContext";
import { useUser } from "@/contexts/UserContext";
import Balance from "@/components/BalanceGroup";
import { useStock } from "@/contexts/StockContext";
import { useTransactionType } from "@/contexts/TransationTypeContext";

const Negociar = () => {
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState("");  
  const { selectedTransactionType } = useTransactionType();
  const { selectedStock } = useStock();
  const { decrementBalance } = useBalance();
  const { fetchPortfolio } = useUser();

  useEffect(() => {
    if (selectedStock) {
      setValue(selectedStock.id);
    }
  }, [selectedStock]);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(`/portfolio/stock/${value}/buy`, {
        shares: quantity,
      });

      const buyValue = quantity * selectedStock.price;
      decrementBalance(buyValue);
    } catch (error) {
      if (error.response.status === 422) {
        console.error("Você não possui saldo suficiente");
      }
    } finally {
      fetchPortfolio();
    }
  };

  return (
    <S.Container>
      <Balance />

      <form onSubmit={handleSubmit}>
        <S.FormContent>
          <S.InputGroup>
            {selectedStock ? (
              <>
                <S.InputWrapper>
                  <S.Label>Ação selecionada:</S.Label>
                  <S.Input
                    type="text"
                    value={selectedStock.symbol}
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
                {quantity > 0 ? (
                  <>
                    <S.Resumo>
                      <span>
                        Você está comprando{" "}
                        {(quantity * selectedStock.price).toLocaleString(
                          "pt-BR",
                          {
                            style: "currency",
                            currency: "BRL",
                          }
                        )}{" "}
                        em ações de {selectedStock.companyName}
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
          disabled={quantity == 0}
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
