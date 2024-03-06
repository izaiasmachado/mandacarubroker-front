// import * as S from "./styles";

// const Historico = () => {
  
//   return (
//    <h1>Histórico</h1>
//   );
// };

// export default Historico;


import * as S from "./styles";

const Historico = () => {
  const stockData = [
    { name: "Stock 1", valor: "R$ 10.00", data: "06/03/2024" },
    { name: "Stock 2", valor: "R$ 20.00", data: "06/03/2024" },
    { name: "Stock 3", valor: "R$ 30.00", data: "06/03/2024" },
    { name: "Stock 4", valor: "R$ 40.00", data: "06/03/2024" },
    { name: "Stock 5", valor: "R$ 50.00", data: "06/03/2024" },
    { name: "Stock 6", valor: "R$ 60.00", data: "06/03/2024" },
    { name: "Stock 8", valor: "R$ 70.00", data: "06/03/2024" },
    { name: "Stock 9", valor: "R$ 70.00", data: "06/03/2024" },
    { name: "Stock 10", valor: "R$ 70.00", data: "06/03/2024" },
    { name: "Stock 11", valor: "R$ 70.00", data: "06/03/2024" },

  ];

  return (
    <S.Container>
      <S.Table>
        <S.TableRowHeader>
          <S.TableHeader>Stock</S.TableHeader>
          <S.TableHeader>Valor</S.TableHeader>
          <S.TableHeader>Data</S.TableHeader>
        </S.TableRowHeader>
        {stockData.map((data, index) => (
          
          <S.TableRow key={index} flip={index % 2 === 0} >
         
            <S.TableCell>{data.name}</S.TableCell>
            <S.TableCell>{data.valor}</S.TableCell>
            <S.TableCell>{data.data}</S.TableCell>
           
          </S.TableRow>
        ))}
      </S.Table>
    </S.Container>
  );
};

export default Historico;
