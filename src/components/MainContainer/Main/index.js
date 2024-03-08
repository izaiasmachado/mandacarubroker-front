import { useState } from "react";
import * as S from "./styles";
import LeftConteiner from "./LeftConteiner";
import RightConteiner from "./RightConteiner";

const Main = () => {
  const [selectedStockData, setSelectedStockData] = useState(null);

  const handleDataFromChild = (data) => {
    setSelectedStockData(data);
  };

  return (
    <S.Main>
      <LeftConteiner sendDataToParent={handleDataFromChild} />
      <RightConteiner selectedStockData={selectedStockData} />
    </S.Main>
  );
};

export default Main;
