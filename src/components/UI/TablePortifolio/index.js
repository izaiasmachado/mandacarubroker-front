"use client";

import { useState, useEffect } from "react";
import { useUser } from "@/contexts/UserContext";
import { useStock } from "@/contexts/StockContext";

import * as S from "./styles";
import StockRow from "./stock";

const Table = () => {
  const { portfolio, fetchPortfolio } = useUser();
  const { selectedStock, setSelectedStock } = useStock();

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  const handleRadioChange = (selectedStock) => {
    setSelectedStock(selectedStock);
  };

  return (
    <>
      <S.Wrapper>
        <h1>Minha Carteira</h1>
        <h3>
          Essa é sua carteira de ações. Acesse o menu Negociar para realizar a
          venda
        </h3>
      </S.Wrapper>
      <S.Container>
        <S.Table>
          <S.TableRowHeader>
            <S.SelectHeader align={true}>Selecionar</S.SelectHeader>

            <S.TableHeader>Nome do ativo</S.TableHeader>
            <S.TableHeader align>Cotação</S.TableHeader>
            <S.TableHeader align>Ações</S.TableHeader>
            <S.TableHeader>Posição (R$)</S.TableHeader>
          </S.TableRowHeader>
          {portfolio.length === 0 ? (
            <S.TableRow>
              <S.TableEmpty colSpan="5">
                Você não possui ações em seu portifólio.
              </S.TableEmpty>
            </S.TableRow>
          ) : (
            portfolio.map((data, index) => (
              <StockRow
                key={index}
                selectedStock={selectedStock}
                data={data.stock}
                handleRadioChange={handleRadioChange}
                flip={index % 2 === 0}
                totalShares={data.totalShares}
                positionValue={data.positionValue}
              />
            ))
          )}
        </S.Table>
      </S.Container>
    </>
  );
};

export default Table;
