import React from "react";

import * as S from "./styles";

export default function StockRow({
  flip,
  selectedStock,
  data,
  handleRadioChange,
}) {
  const priceToReal = (price) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <S.TableRow flip={flip} onClick={() => handleRadioChange(data)}>
      <S.TableCell align={true}>
        <input
          type="radio"
          name="selectedStock"
          value={data.id || data.stock.id}
          checked={selectedStock.id === data.id}
        />
      </S.TableCell>
      <S.TableCell>
        {data.symbol} - {data.companyName}
      </S.TableCell>
      <S.TableCell align>{priceToReal(data.price)}</S.TableCell>
    </S.TableRow>
  );
}
