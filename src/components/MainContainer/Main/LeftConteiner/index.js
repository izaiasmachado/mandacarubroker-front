import { useState } from "react";

import Table from "@/components/UI/Table";
import * as S from "./styles";
import Button from "@/components/UI/Button";

const LeftConteiner = () => {
  const [activeTable, setactiveTable] = useState("stocks");

  const handleButtonClick = (buttonName) => {
    setactiveTable(buttonName);
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
      {activeTable === "stocks" &&  <Table />}
      {activeTable === "portifolio" && <Table />}     
    </S.LeftConteiner>
  );
  s;
};

export default LeftConteiner;
