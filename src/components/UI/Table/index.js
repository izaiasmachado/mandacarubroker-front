'use client';
import * as S from "./styles";

const Table = () => {
  const stockData = [
    { symbol: "--", enterprise: "Amazon", valor: "R$ 20.00",  qtdStocksUser: "3", position: "2"},
    { symbol: "--", enterprise: "Samsung", valor: "R$ 30.00",  qtdStocksUser: "5", position: "3"},
    { symbol: "--", enterprise: "Apple", valor: "R$ 10.00",  qtdStocksUser: "1", position: "1"},
    { symbol: "--", enterprise: "Americanas", valor: "R$ 40.00",  qtdStocksUser: "7", position: "4"},
    { symbol: "--", enterprise: "Banco do Brasil", valor: "R$ 50.00",  qtdStocksUser: "9", position: "5"},
    { symbol: "--", enterprise: "Magalu", valor: "R$ 60.00",  qtdStocksUser: "11", position: "6"},

    

  ];

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
        {stockData.map((data, index) => (
          
          <S.TableRow key={index} flip={index % 2 === 0} >
         
            <S.TableCell>{data.symbol}</S.TableCell>
            <S.TableCell>{data.enterprise}</S.TableCell>
            <S.TableCell>{data.valor}</S.TableCell>
            <S.TableCell>{data.qtdStocksUser}</S.TableCell>
            <S.TableCell>{data.position}</S.TableCell>

           
          </S.TableRow>
        ))}
      </S.Table>
    </S.Container>
  );
};

export default Table;
