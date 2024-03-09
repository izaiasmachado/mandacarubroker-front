"use client";

import { useEffect } from "react";
import { useUser } from "@/contexts/UserContext";

import * as S from "./styles";
import StockRow from "./stock";

const Table = ({ sendDataToParent }) => {
  const { portfolio, fetchPortfolio, selectedStock, setSelectedStock } =
    useUser();

  useEffect(() => {
    fetchPortfolio();
  }, [fetchPortfolio]);

  const handleRadioChange = (data) => {
    setSelectedStock(data);
    sendDataToParent(data);
  };

  const sortedPortfolio = portfolio.sort((a, b) => {
    if (a.stock.symbol < b.stock.symbol) {
      return -1;
    }

    if (a.stock.symbol > b.stock.symbol) {
      return 1;
    }

    return 0;
  });

  return (
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
          sortedPortfolio.map((data, index) => (
            <StockRow
              key={data.id}
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
  );
};

export default Table;
