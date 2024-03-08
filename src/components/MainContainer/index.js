import * as S from "./styles";
import SideBar from "@/components/SideBar";
import Hero from "./Hero";
import Main from "./Main";

const MainGroup = () => {
  return (
    <S.Main>
      <S.Conteiner>
        <Hero />
        <Main />
      </S.Conteiner>
    </S.Main>
  );
};

export default MainGroup;
