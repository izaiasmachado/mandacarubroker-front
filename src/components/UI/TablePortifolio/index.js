"use client";

import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import { useStock } from "@/contexts/StockContext";

import * as S from "./styles";

const Table = () => {
  const [stockData, setStockData] = useState([]);
  const { selectedStock, setSelectedStock } = useStock();

  useEffect(() => {
    async function fetchStockData() {
      try {
        const response = await api.get("/portfolio", {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("access_token"),
          },
        });

        setStockData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados das ações:", error);
      }
    }

    fetchStockData();
  }, []);

  const handleRadioChange = (selectedStock) => {
    setSelectedStock(selectedStock);    
  };

  return (
    <S.Container>
      <S.Table>
        <S.TableRowHeader>          
          <S.TableHeader>Selecionar</S.TableHeader>
          <S.TableHeader>Simbolo</S.TableHeader>
          <S.TableHeader>Empresa</S.TableHeader>
          <S.TableHeader>Valor de ação</S.TableHeader>
          <S.TableHeader>Qtd. de ações do usuário</S.TableHeader>
          <S.TableHeader>Posição</S.TableHeader>
        </S.TableRowHeader>
        {stockData.length === 0 ? (
          <S.TableRow>
            <S.TableEmpty colSpan="5">
              Você não possui ações em seu portifólio.
            </S.TableEmpty>
          </S.TableRow>
        ) : (
          stockData.map((data, index) => (
            <S.TableRow key={index} flip={index % 2 === 0}>
              <S.TableCell>
                <input
                  type="radio"
                  name="selectedStock"
                  value={data.stock.id}
                  checked={selectedStock && selectedStock.id === data.stock.id}
                  onChange={() => handleRadioChange(data.stock)}
                />
              </S.TableCell>
              <S.TableCell>{data.stock.symbol}</S.TableCell>
              <S.TableCell>{data.stock.companyName}</S.TableCell>
              <S.TableCell>{data.stock.price}</S.TableCell>
              <S.TableCell>{data.totalShares}</S.TableCell>
              <S.TableCell>{data.positionValue}</S.TableCell>
            </S.TableRow>
          ))
        )}
      </S.Table>
    </S.Container>
  );
};

export default Table;
