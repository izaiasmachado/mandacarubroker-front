import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import * as S from "./styles";
import StockRow from "./stock";

import { useUser } from "@/contexts/UserContext";

const Table = ({ sendDataToParent }) => {
  const [stockData, setStockData] = useState([]);
  const { selectedStock, setSelectedStock } = useUser();

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
    console.log(data);
  };

  const sortedPortfolio = stockData.sort((a, b) => {
    if (a.symbol < b.symbol) {
      return -1;
    }

    if (a.symbol > b.symbol) {
      return 1;
    }

    return 0;
  });

  return (
    <>
      <S.Wrapper>
        <h1>Ações</h1>
        <h3>
          Abaixo estão listadas as principais ações disponíveis para compra no
          mercado. Acesse o menu Negociar para realizar a venda
        </h3>
      </S.Wrapper>

      <S.Container>
        <S.Table>
          <S.TableRowHeader>
            <S.SelectHeader align={true}>Selecionar</S.SelectHeader>
            <S.TableHeader>Nome do ativo</S.TableHeader>
            <S.TableHeader align>Cotação</S.TableHeader>
          </S.TableRowHeader>
          {sortedPortfolio.map((data, index) => (
            <StockRow
              key={data.id}
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
