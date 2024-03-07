import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import * as S from "./styles";

const Table = () => {
  const [stockData, setStockData] = useState([]);
  const [selectedStocks, setSelectedStocks] = useState([]);

  useEffect(() => {
    async function fetchStockData() {
      try {
        const response = await api.get("/stocks", {
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

  const handleCheckboxChange = (symbol) => {
    const isChecked = selectedStocks.includes(symbol);
    if (isChecked) {
      setSelectedStocks(selectedStocks.filter(stock => stock !== symbol));
    } else {
      setSelectedStocks([...selectedStocks, symbol]);
    }
  };

  return (
    <S.Container>
      <S.Table>
        <S.TableRowHeader>
          <S.TableHeader>Selecionar</S.TableHeader>
          <S.TableHeader>Simbolo</S.TableHeader>
          <S.TableHeader>Empresa</S.TableHeader>
          <S.TableHeader>Valor de ação</S.TableHeader>
        </S.TableRowHeader>
        {stockData.map((data, index) => (
          <S.TableRow key={index} flip={index % 2 === 0}>
            <S.TableCell>
              <input
                type="checkbox"
                checked={selectedStocks.includes(data.id)}
                onChange={() => handleCheckboxChange(data.id)}
              />
            </S.TableCell>
            <S.TableCell>{data.symbol}</S.TableCell>
            <S.TableCell>{data.companyName}</S.TableCell>
            <S.TableCell>{data.price}</S.TableCell>
          </S.TableRow>
        ))}
      </S.Table>
    </S.Container>
  );
};

export default Table;
