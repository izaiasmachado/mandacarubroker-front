import * as S from "./styles";
import Balance from "../BalanceGroup";
import { FaUser } from "react-icons/fa6";

import {
    ContainerProfile,
    ContainerUser,
    InformationUser,
    Name,
    UserName,  
  } from "./styles";

const SideBar = () => (
    <S.SideBar> 
             <ContainerProfile>
          <ContainerUser>
            <S.Icon>
              <FaUser size={25} color={"orange"} />
            </S.Icon>
          </ContainerUser>
            <InformationUser>
              <Name>Iris Costa</Name>
              <UserName>coxtairis</UserName>
            </InformationUser>
        </ContainerProfile>
    </S.SideBar>
);

export default SideBar;
