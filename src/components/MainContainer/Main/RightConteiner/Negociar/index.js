import React, { useState, useEffect } from "react";
import * as S from "./styles";
import Button from "@/components/UI/Button";

const Negociar = ({ selectedStockData }) => {
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState("");
  const [transactionType, setTransactionType] = useState("compra");

  useEffect(() => {
    if (selectedStockData) {
      setValue(selectedStockData.value);
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
