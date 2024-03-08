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
        const response = await api.get("/stocks");

        setStockData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados das ações:", error);
      }
    }

    fetchStockData();
  }, []);

  const handleRadioChange = (data) => {
    setSelectedStock(data);
    sendDataToParent(data);
  };

  return (
    <S.Container>
      <S.Table>
        <S.TableRowHeader>
          <S.SelectHeader align={true}>Selecionar</S.SelectHeader>
          <S.TableHeader>Nome do ativo</S.TableHeader>
          <S.TableHeader align>Cotação</S.TableHeader>
        </S.TableRowHeader>
        {stockData.map((data, index) => (
          <StockRow
            key={index}
            selectedStock={selectedStock}
            data={data}
            flip={index % 2 === 0}
            handleRadioChange={handleRadioChange}
          />
        ))}
      </S.Table>
    </S.Container>
  );
};

export default Table;
