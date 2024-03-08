"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

import * as S from "./styles";
import StockRow from "./stock";

const Table = ({ sendDataToParent }) => {
  const [stockData, setStockData] = useState([]);
  const [selectedStock, setSelectedStock] = useState(0);

  useEffect(() => {
    async function fetchStockData() {
      try {
        const response = await api.get("/portfolio");

        setStockData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados das ações:", error);
      }
    }

    fetchStockData();
  }, []);

  const handleRadioChange = (data) => {
    setSelectedStock(data);
    sendDataToParent(data); // Envia os dados para o componente pai
  };

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
        {stockData.length === 0 ? (
          <S.TableRow>
            <S.TableEmpty colSpan="5">
              Você não possui ações em seu portifólio.
            </S.TableEmpty>
          </S.TableRow>
        ) : (
          stockData.map((data, index) => (
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
  );
};

export default Table;
