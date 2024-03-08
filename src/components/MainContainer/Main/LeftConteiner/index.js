import { useState } from "react";

import TablePortifolio from "@/components/UI/TablePortifolio";
import TableStocks from "@/components/UI/TableStocks";
import * as S from "./styles";
import Button from "@/components/UI/Button";

const LeftConteiner = ({ sendDataToParent }) => {
  const [activeTable, setactiveTable] = useState("stocks");
  const [selectedStockData, setSelectedStockData] = useState(null);

  const handleButtonClick = (buttonName) => {
    setactiveTable(buttonName);
  };

  const handleDataFromChild = (data) => {
    setSelectedStockData(data);
    sendDataToParent(data);
  };

  return (
    <S.LeftConteiner>
      <S.Controls>
        <Button
          text="Stocks"
          clicked={activeTable === "stocks"}
          onClick={() => handleButtonClick("stocks")}
        />
        <Button
          text="Portifólio"
          clicked={activeTable === "portifolio"}
          onClick={() => handleButtonClick("portifolio")}
        />
      </S.Controls>
      {activeTable === "stocks" && (
        <TableStocks sendDataToParent={handleDataFromChild} />
      )}
      {activeTable === "portifolio" && (
        <TablePortifolio sendDataToParent={handleDataFromChild} />
      )}
    </S.LeftConteiner>
  );
};

export default LeftConteiner;
