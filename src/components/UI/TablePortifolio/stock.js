import React from "react";

import * as S from "./styles";

export default function StockRow({
  flip,
  selectedStock,
  data,
  handleRadioChange,
  totalShares,
  positionValue,
}) {
  const priceToReal = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const stockPriceReal = priceToReal(data.price);
  const positionValueReal = priceToReal(positionValue);

  return (
    <S.TableRow flip={flip} onClick={() => handleRadioChange(data)}>
      <S.TableCell align={true}>
        <input
          type="radio"
          name="selectedStock"
          value={data.id}
          checked={selectedStock && selectedStock.id === data.id}
        />
      </S.TableCell>
      <S.TableCell>
        {data.symbol} - {data.companyName}
      </S.TableCell>
      <S.TableCell align>{stockPriceReal}</S.TableCell>
      <S.TableCell align>{totalShares}</S.TableCell>
      <S.TableCell>{positionValueReal}</S.TableCell>
    </S.TableRow>
  );
}
