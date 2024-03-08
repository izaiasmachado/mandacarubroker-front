import { useState } from "react";

import TablePortifolio from "@/components/UI/TablePortifolio";
import TableStocks from "@/components/UI/TableStocks";
import * as S from "./styles";
import Button from "@/components/UI/Button";
import { useTransactionType } from "@/contexts/TransationTypeContext";
import { useStock } from "@/contexts/StockContext";

const LeftConteiner = ({sendDataToParent}) => {
  const { selectedTransactionType, setSelectedTransactionType } = useTransactionType();
  const { setSelectedStock } = useStock(); 

  const handleButtonClick = (buttonName) => {
    setSelectedTransactionType(buttonName);
    setSelectedStock(null);
  };

  return (
    <S.LeftConteiner>
      <S.Controls>
        <Button          
          text="Stocks"
          clicked={selectedTransactionType === "buy"}
          onClick={() => handleButtonClick("buy")}
        />
        <Button
          text="Portifólio"
          clicked={selectedTransactionType === "sell"}
          onClick={() => handleButtonClick("sell")}
        />
      </S.Controls>
      {selectedTransactionType === "buy" &&  <TableStocks />}
      {selectedTransactionType === "sell" && <TablePortifolio />}     
    </S.LeftConteiner>
  );
};

export default LeftConteiner;
