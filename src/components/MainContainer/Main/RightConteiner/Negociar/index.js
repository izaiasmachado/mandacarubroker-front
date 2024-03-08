import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import * as S from "./styles";
import Button from "@/components/UI/Button";
import { useStock } from "@/contexts/StockContext";
import { useTransactionType } from "@/contexts/TransationTypeContext";

const Negociar = ({ selectedStockData }) => {
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState("");  
  const { selectedTransactionType } = useTransactionType();
  const [transactionType, setTransactionType] = useState(selectedTransactionType);
  const { selectedStock } = useStock();

  useEffect(() => {
    if (selectedStockData) {
      setValue(selectedStockData.id);
    }
  }, [selectedStockData]);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("stock.id", value);
    console.log("shares:", quantity);
    console.log("type:", transactionType);

    try {
      const response = await api.post(`/portfolio/stock/${value}/buy`, {
        shares: quantity,
      });
      console.log("Status da requisição:", response.status);
      console.log(response.data);
    } catch (error) {
      if (error.response.status === 422) {
        console.error("Você não possui saldo suficiente");
      }
    }
  };

  return (
    <S.Container>
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
                {quantity > 0 ? (
                  <>
                    <S.Resumo>
                      <span>
                        Você está comprando{" "}
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
