'use client';

import { useState, useEffect } from "react";
import { api } from "@/lib/api";

import * as S from "./styles";

const Table = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    async function fetchStockData() {
      try {
        const response = await api.get("/portfolio", {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.getItem("access_token"),
          }
        });

        setStockData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados das ações:", error);
      }
    }

    fetchStockData();
  }, []);

  return (
    <S.Container>
      <S.Table>
        <S.TableRowHeader>
          <S.TableHeader>Simbolo</S.TableHeader>
          <S.TableHeader>Empresa</S.TableHeader>
          <S.TableHeader>Valor de ação</S.TableHeader>
          <S.TableHeader>Quantidade de ações do usuário</S.TableHeader>
          <S.TableHeader>Posição</S.TableHeader>

        </S.TableRowHeader>
        {stockData.length === 0 ? (
          <S.TableRow>
            <S.TableEmpty colSpan="5">Você não possui ações em seu portifólio.</S.TableEmpty>
          </S.TableRow>
        ) : (
          stockData.map((data, index) => (
            <S.TableRow key={index} flip={index % 2 === 0}>
              <S.TableCell>{data.symbol}</S.TableCell>
              <S.TableCell>{data.companyName}</S.TableCell>
              <S.TableCell>{data.price}</S.TableCell>
              <S.TableCell>{data.qtdStocksUser}</S.TableCell>
              <S.TableCell>{data.position}</S.TableCell>
            </S.TableRow>
          ))
        )}
      </S.Table>
    </S.Container>
  );
};

export default Table;
