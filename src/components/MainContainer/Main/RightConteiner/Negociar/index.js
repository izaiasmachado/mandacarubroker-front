import React, { useState, useEffect } from "react";
import { api } from "@/lib/api";
import * as S from "./styles";
import Button from "@/components/UI/Button";

const Negociar = ({ selectedStockData }) => {
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [transactionType, setTransactionType] = useState("compra");

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

  const handleTransactionTypeChange = (e) => {
    setTransactionType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("stock.id", value);
    console.log("shares:", quantity);
    console.log("type:", transactionType);

    try {
      const response = await api.post(
        `/portfolio/stock/${value}/buy`,
        {
          shares: quantity,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("access_token"),
          },
        }
      );
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
                  <S.Label>Stock selecionada:</S.Label>
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
                {/* Se a quantidade for maior que 0, exibe as informações */}
                {quantity > 0 ? (
                  <>
                    <S.Label>Informações:</S.Label>
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
                        em ações de {selectedStockData.companyName}.
                      </span>
                    </S.Resumo>
                    <S.Label>Deseja confirmar a transação?</S.Label>
                  </>
                ) : (
                  <S.Label>Selecione a quantidade mínima</S.Label>
                )}
              </>
            ) : (
              <S.Label>Não há Stock selecionada</S.Label>
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
