import { useState, useEffect } from "react";
import { api } from "@/lib/api";
import * as S from "./styles";

const Table = ({ sendDataToParent }) => {
  const [stockData, setStockData] = useState([]);
  const [selectedStock, setSelectedStock] = useState(0);

  useEffect(() => {
    async function fetchStockData() {
      try {
        const response = await api.get("/stocks", {
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

  const handleRadioChange = (id) => {
    setSelectedStock(id);
    sendDataToParent(id); // Envia os dados para o componente pai
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
            <S.TableHeader width="50px">Selecionar</S.TableHeader>
            <S.TableHeader>Simbolo</S.TableHeader>
            <S.TableHeader>Empresa</S.TableHeader>
            <S.TableHeader>Valor de ação</S.TableHeader>
          </S.TableRowHeader>
          {stockData.map((data, index) => (
            <S.TableRow key={index} flip={index % 2 === 0}>
              <S.TableCell width="50px">
                <input
                  type="radio"
                  name="selectedStock"
                  value={data.id}
                  checked={selectedStock.id === data.id}
                  onChange={() => handleRadioChange(data)}
                  />
              </S.TableCell>
              <S.TableCell>{data.symbol}</S.TableCell>
              <S.TableCell>{data.companyName}</S.TableCell>
              <S.TableCell>{data.price}</S.TableCell>
            </S.TableRow>
          ))}
        </S.Table>
      </S.Container>

    </>

  );
};

export default Table;
