import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import * as S from "./styles";
import StockRow from "./stock";
import { useStock } from "@/contexts/StockContext";

const Table = () => {
  const [stockData, setStockData] = useState([]);
  const { selectedStock, setSelectedStock } = useStock();

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
  };

  return (
    <>
    <S.Wrapper>

      <h1>Ações</h1>
      <h3>Abaixo estão listadas as principais ações disponíveis para compra no mercado. Acesse o menu Negociar para realizar a venda</h3>
    </S.Wrapper>
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
    </>
  );
};

export default Table;
